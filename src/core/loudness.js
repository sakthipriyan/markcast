// @ts-check
// How loud a recording is, the way YouTube measures it (ITU-R BS.1770 integrated loudness, in LUFS), and the
// one gain that brings it to YouTube's level without clipping. Pure: fed planes of float samples.

/** YouTube plays everything at about this loudness, turning louder videos down (but not quieter ones up). */
export const YOUTUBE_LUFS = -14;
/** Sample peaks stay below this after the gain: about -1 dB true peak once encoded to AAC. */
export const PEAK_CEILING_DB = -1.5;

/**
 * The K-weighting filter for a sample rate: a high shelf (the head's effect) then a high-pass (low rumble
 * counts for less). Coefficients as in BS.1770 and libebur128, so any sample rate works.
 * @param {number} rate
 */
export function kWeighting(rate){
  let f0 = 1681.974450955533, q = 0.7071752369554196, k = Math.tan(Math.PI * f0 / rate);
  const vh = Math.pow(10, 3.999843853973347 / 20), vb = Math.pow(vh, 0.4996667741545416);
  let a0 = 1 + k / q + k * k;
  const shelf = {b0: (vh + vb * k / q + k * k) / a0, b1: 2 * (k * k - vh) / a0, b2: (vh - vb * k / q + k * k) / a0,
    a1: 2 * (k * k - 1) / a0, a2: (1 - k / q + k * k) / a0};
  f0 = 38.13547087602444; q = 0.5003270373238773; k = Math.tan(Math.PI * f0 / rate);
  a0 = 1 + k / q + k * k;
  const highPass = {b0: 1, b1: -2, b2: 1, a1: 2 * (k * k - 1) / a0, a2: (1 - k / q + k * k) / a0};
  return {shelf, highPass};
}

/** @param {number} x */
const toDb = x=>20 * Math.log10(x);
/** @param {number} meanSquare */
const lufs = meanSquare=>-0.691 + 10 * Math.log10(meanSquare);

/**
 * A meter that is fed audio in pieces, in order, and then says how loud all of it was.
 * @param {number} sampleRate
 * @param {number} channels
 */
export function loudnessMeter(sampleRate, channels){
  const {shelf: s, highPass: h} = kWeighting(sampleRate);
  const step = Math.round(sampleRate / 10);          // 100 ms: blocks are 400 ms, one every 100 ms
  /** @type {number[]} weighted energy of each 100 ms */
  const energy = [];
  const state = Array.from({length: channels}, ()=>new Float64Array(8));
  // left, right and centre count once; surround channels (4th and 5th) count 1.41 times
  const weight = /** @param {number} c */ c=>c >= 3 && c <= 4 ? 1.41 : 1;
  let frames = 0, peak = 0;
  return {
    /** @param {Float32Array[]} planes  one array per channel, the same length */
    add(planes){
      const len = planes[0].length;
      for (let c = 0; c < channels; c++){
        const x = planes[c] || planes[0], st = state[c], w = weight(c);
        let [x1, x2, y1, y2, u1, u2, v1, v2] = st;
        let at = frames, k = Math.floor(at / step), next = (k + 1) * step, acc = 0;
        for (let i = 0; i < len; i++){
          const v = x[i];
          if (v > peak) peak = v; else if (-v > peak) peak = -v;
          const y = s.b0 * v + s.b1 * x1 + s.b2 * x2 - s.a1 * y1 - s.a2 * y2;
          x2 = x1; x1 = v; y2 = y1; y1 = y;
          const z = h.b0 * y + h.b1 * u1 + h.b2 * u2 - h.a1 * v1 - h.a2 * v2;
          u2 = u1; u1 = y; v2 = v1; v1 = z;
          acc += z * z;
          if (++at === next){ energy[k] = (energy[k] || 0) + w * acc; acc = 0; k++; next += step; }
        }
        if (acc) energy[k] = (energy[k] || 0) + w * acc;
        st.set([x1, x2, y1, y2, u1, u2, v1, v2]);
      }
      frames += len;
    },
    /** @returns {{integrated: number, peak: number, peakDb: number}} integrated in LUFS (-Infinity for silence) */
    result(){
      const done = Math.floor(frames / step);
      /** @type {number[]} mean square of every whole 400 ms block */
      const blocks = [];
      for (let j = 3; j < done; j++) blocks.push(((energy[j - 3] || 0) + (energy[j - 2] || 0) + (energy[j - 1] || 0) + (energy[j] || 0)) / (4 * step));
      const mean = /** @param {number[]} a */ a=>a.reduce((x, y)=>x + y, 0) / a.length;
      // silence is ignored (below -70 LUFS), then anything 10 LU quieter than the rest
      const audible = blocks.filter(z=>lufs(z) > -70);
      const kept = audible.length ? audible.filter(z=>lufs(z) > lufs(mean(audible)) - 10) : [];
      return {integrated: kept.length ? lufs(mean(kept)) : -Infinity, peak, peakDb: peak > 0 ? toDb(peak) : -Infinity};
    },
  };
}

/** The most a quiet recording is raised: beyond this it is mostly noise being made louder. */
export const MAX_BOOST_DB = 20;

/**
 * The gain, in dB, that brings a recording to the target loudness: up for a quiet one (at most MAX_BOOST_DB),
 * down for a loud one. 0 for silence.
 * With the limiter (limit), the few peaks the gain pushes past the ceiling are its job, so one loud click
 * doesn't hold the whole video back. Without it, raising stops where the loudest peak reaches the ceiling, so
 * the gain alone never clips, and never turns into a cut (peaks that already clip are left as they are).
 * @param {{integrated: number, peakDb?: number}} measured
 * @param {{limit?: boolean, target?: number, ceiling?: number}} [opts]
 */
export function gainToTarget(measured, {limit = false, target = YOUTUBE_LUFS, ceiling = PEAK_CEILING_DB} = {}){
  if (!isFinite(measured.integrated)) return 0;
  const g = Math.min(target - measured.integrated, MAX_BOOST_DB);
  if (g <= 0 || limit || measured.peakDb == null || !isFinite(measured.peakDb)) return g;
  return Math.max(0, Math.min(g, ceiling - measured.peakDb));
}
/** @param {number} db */
export const dbToGain = db=>Math.pow(10, db / 20);

/**
 * A look-ahead peak limiter: keeps every sample within the ceiling by turning down just the moments that would
 * pass it, smoothly, before they arrive. The gain falls over the look-ahead (5 ms) to exactly what the loudest
 * sample needs and recovers over the release (50 ms), so a click or a plosive is caught without distortion or
 * pumping, and everything else passes untouched.
 *
 * Fed audio in pieces, in order (push), it hands back the same frames in the same order once each one's gain
 * is known (ready, take): output runs a look-ahead behind input, and end() lets the last frames out.
 * How it is sure to hold the ceiling: each output frame's gain is the average of the last L window-minimums of
 * the gain needed, and every one of those windows contains that frame, so the average is never above its need.
 * @param {number} sampleRate @param {number} channels
 * @param {{ceilingDb?: number, lookahead?: number, release?: number}} [opts]
 */
export function peakLimiter(sampleRate, channels, opts = {}){
  const ceiling = dbToGain(opts.ceilingDb ?? PEAK_CEILING_DB);
  const L = Math.max(1, Math.round((opts.lookahead ?? 0.005) * sampleRate));
  const rel = 1 - Math.exp(-1 / ((opts.release ?? 0.05) * sampleRate));
  /** @type {number[][]} frames waiting for their gain, per channel */
  const held = Array.from({length: channels}, ()=>[]);
  /** @type {number[]} gains of the frames ready to go, in order */
  const gains = [];
  // sliding minimum of the needed gain over the last L frames (a deque of [index, need])
  /** @type {[number, number][]} */
  const mins = [];
  const box = new Float64Array(L);           // the last L smoothed minimums, for their average
  let n = 0, boxSum = L, smooth = 1, below = false, events = 0, head = 0;
  box.fill(1);
  /** @param {number} need */
  const step = need=>{
    while (mins.length && mins[mins.length - 1][1] >= need) mins.pop();
    mins.push([n, need]);
    while (mins[0][0] <= n - L) mins.shift();
    const h = mins[0][1];
    smooth = h < smooth ? h : smooth + (h - smooth) * rel;   // straight down, slowly back up
    if (smooth > 0.999) smooth = 1;                          // and all the way back (within 0.01 dB), not a hair short
    boxSum += smooth - box[n % L];
    box[n % L] = smooth;
    if (n >= L - 1){
      const avg = boxSum / L, g = avg > 0.999 ? 1 : avg;
      gains.push(g);
      if (g < 0.999 && !below) events++;
      below = g < 0.999;
    }
    n++;
  };
  return {
    /** @param {Float32Array[]} planes */
    push(planes){
      const len = planes[0].length;
      for (let i = 0; i < len; i++){
        let peak = 0;
        for (let c = 0; c < channels; c++){
          const v = (planes[c] || planes[0])[i];
          held[c].push(v);
          if (v > peak) peak = v; else if (-v > peak) peak = -v;
        }
        step(peak > ceiling ? ceiling / peak : 1);
      }
    },
    /** frames whose gain is known, ready to take */
    ready: ()=>gains.length - head,
    /** the next n ready frames, limited, one array per channel @param {number} count */
    take(count){
      const out = Array.from({length: channels}, ()=>new Float32Array(count));
      for (let i = 0; i < count; i++){
        const g = gains[head + i];
        for (let c = 0; c < channels; c++) out[c][i] = held[c][head + i] * g;
      }
      head += count;
      // drop what has been taken, now and then, so the buffers stay small
      if (head > 65536){ gains.splice(0, head); held.forEach(h=>h.splice(0, head)); head = 0; }
      return out;
    },
    /** no more input: let the last frames through */
    end(){ for (let i = 0; i < L - 1; i++){ for (let c = 0; c < channels; c++) held[c].push(0); step(1); } },
    /** how many separate moments were turned down */
    get events(){ return events; },
  };
}
