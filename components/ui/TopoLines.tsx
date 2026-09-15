"use client";

import { useMemo } from "react";
import { generateContourRing } from "@/lib/paths";

interface TopoLinesProps {
  className?: string;
  ringCount?: number;
  width?: number;
  height?: number;
}

/**
 * Topographic-map style nested contour rings, used on the dark
 * stats band to echo the reference site's line-art texture while
 * reading as "data / terrain" rather than decoration for its own sake.
 */
export default function TopoLines({
  className = "",
  ringCount = 7,
  width = 1200,
  height = 300,
}: TopoLinesProps) {
  const rings = useMemo(() => {
    const arr: { d: string; opacity: number }[] = [];
    const centers: [number, number][] = [
      [width * 0.18, height * 0.4],
      [width * 0.5, height * 0.65],
      [width * 0.82, height * 0.35],
    ];
    centers.forEach(([cx, cy], c) => {
      for (let i = 0; i < ringCount; i++) {
        const t = i / (ringCount - 1);
        arr.push({
          d: generateContourRing(
            cx,
            cy,
            36 + t * 60,
            5 + t * 3,
            c * 2.1 + i * 0.9,
            16
          ),
          opacity: 0.12 + t * 0.24,
        });
      }
    });
    return arr;
  }, [ringCount, width, height]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {rings.map((ring, i) => (
        <path
          key={i}
          d={ring.d}
          fill="none"
          stroke="#d9cffb"
          strokeWidth={1}
          opacity={ring.opacity}
        />
      ))}
    </svg>
  );
}
