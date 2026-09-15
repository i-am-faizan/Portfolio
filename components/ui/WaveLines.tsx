"use client";

import { useMemo } from "react";
import { generateWaveLine } from "@/lib/paths";

interface WaveLinesProps {
  className?: string;
  lineCount?: number;
  tone?: "light" | "dark";
  width?: number;
  height?: number;
}

/**
 * Layered flowing contour lines used as a quiet decorative motif
 * beneath hero copy, along section seams, and in the footer band.
 */
export default function WaveLines({
  className = "",
  lineCount = 16,
  tone = "light",
  width = 1200,
  height = 220,
}: WaveLinesProps) {
  const lines = useMemo(() => {
    const arr: { d: string; opacity: number }[] = [];
    for (let i = 0; i < lineCount; i++) {
      const t = i / (lineCount - 1);
      const baseY = height * 0.25 + t * height * 0.65;
      const amplitude = 10 + t * 26;
      const frequency = 2.2 + t * 0.6;
      const phase = t * 2.4;
      arr.push({
        d: generateWaveLine(width, baseY, amplitude, frequency, phase, 28),
        opacity: 0.16 + (1 - Math.abs(t - 0.5) * 1.4) * 0.35,
      });
    }
    return arr;
  }, [lineCount, width, height]);

  const stroke = tone === "light" ? "#4a3d78" : "#c9bdf5";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {lines.map((line, i) => (
        <path
          key={i}
          d={line.d}
          fill="none"
          stroke={stroke}
          strokeWidth={1}
          opacity={line.opacity}
        />
      ))}
    </svg>
  );
}
