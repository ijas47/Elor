/**
 * The hero's scroll timeline as plain functions, shared by the server render
 * (first frame, progress 0) and the scroll driver loaded after hydration, so the
 * two can never disagree about where scene 1 starts.
 *
 * Same piecewise-linear, clamped mapping framer-motion's useTransform used.
 */

export const N_STAGES = 3;
const SEG = 1 / N_STAGES;

export function interp(p: number, input: number[], output: number[]) {
  if (p <= input[0]) return output[0];
  for (let k = 1; k < input.length; k++) {
    if (p <= input[k]) {
      const t = (p - input[k - 1]) / (input[k] - input[k - 1]);
      return output[k - 1] + (output[k] - output[k - 1]) * t;
    }
  }
  return output[output.length - 1];
}

const last = N_STAGES - 1;

/** Scenes cross-dissolve, centred on the boundary between their segments. */
export const sceneOpacity = (p: number, i: number) =>
  interp(p, [i * SEG - 0.06, i * SEG + 0.01, (i + 1) * SEG - 0.06, (i + 1) * SEG + 0.01], [i === 0 ? 1 : 0, 1, 1, i === last ? 1 : 0]);

/** Gentle push-in, kept small so the wide crops don't read as blown up. */
export const sceneScale = (p: number, i: number) =>
  interp(p, [i * SEG - SEG, (i + 1) * SEG], [1.06, 1.0]);

/** Copy does NOT cross-dissolve: one headline finishes before the next starts. */
export const copyOpacity = (p: number, i: number) =>
  interp(p, [i * SEG - 0.04, i * SEG + 0.03, (i + 1) * SEG - 0.09, (i + 1) * SEG - 0.04], [i === 0 ? 1 : 0, 1, 1, i === last ? 1 : 0]);

export const copyY = (p: number, i: number) =>
  interp(p, [i * SEG - 0.05, (i + 1) * SEG - 0.03], [26, -26]);

export const tickOpacity = (p: number, i: number) =>
  interp(p, [i * SEG - SEG * 0.3, i * SEG + SEG * 0.2, (i + 1) * SEG - SEG * 0.2, (i + 1) * SEG + SEG * 0.3], [0.22, 1, 1, 0.22]);

export const cueOpacity = (p: number) => interp(p, [0, 0.06], [1, 0]);
