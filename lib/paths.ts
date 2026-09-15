export type Point = [number, number];

/** Rounds to 2 decimal places to keep server- and client-rendered path
 * strings byte-identical (raw floating point can differ in the last
 * bit between JS engines, which otherwise trips a hydration mismatch). */
function r(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Builds a smooth SVG path string through a series of points using
 * quadratic midpoint smoothing (cheap Catmull-Rom-ish approximation).
 */
export function smoothPath(points: Point[]): string {
  if (points.length < 2) return "";
  let d = `M ${r(points[0][0])},${r(points[0][1])}`;
  for (let i = 1; i < points.length - 1; i++) {
    const [x0, y0] = points[i];
    const [x1, y1] = points[i + 1];
    const mx = (x0 + x1) / 2;
    const my = (y0 + y1) / 2;
    d += ` Q ${r(x0)},${r(y0)} ${r(mx)},${r(my)}`;
  }
  const last = points[points.length - 1];
  d += ` T ${r(last[0])},${r(last[1])}`;
  return d;
}

/** Generates one flowing horizontal wavy line across a given width. */
export function generateWaveLine(
  width: number,
  baseY: number,
  amplitude: number,
  frequency: number,
  phase: number,
  segments = 24
): string {
  const points: Point[] = [];
  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * width;
    const y =
      baseY +
      Math.sin((i / segments) * Math.PI * frequency + phase) * amplitude;
    points.push([x, y]);
  }
  return smoothPath(points);
}

/** Generates a blobby closed contour ring for topographic-style backgrounds. */
export function generateContourRing(
  cx: number,
  cy: number,
  baseRadius: number,
  irregularity: number,
  seedOffset: number,
  points = 10
): string {
  const pts: Point[] = [];
  for (let i = 0; i <= points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const wobble =
      Math.sin(angle * 3 + seedOffset) * irregularity +
      Math.cos(angle * 2 + seedOffset * 1.7) * irregularity * 0.6;
    const r = baseRadius + wobble;
    pts.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
  }
  // close the loop smoothly
  pts.push(pts[1], pts[2]);
  return smoothPath(pts);
}
