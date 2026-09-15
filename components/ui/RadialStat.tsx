"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function RadialStat({
  value,
  label,
  sublabel,
}: {
  value: number;
  label: string;
  sublabel: string;
}) {
  const prefersReduced = useReducedMotion();
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex items-center gap-5">
      <div className="relative h-[128px] w-[128px] shrink-0">
        <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="10"
          />
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="#a78bfa"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true, amount: 0.6 }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
            }
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-[26px] font-semibold text-white">
            {value}%
          </span>
        </div>
      </div>
      <div>
        <p className="text-[15px] font-medium text-white">{label}</p>
        <p className="mt-1 text-[13px] leading-relaxed text-white/50">
          {sublabel}
        </p>
      </div>
    </div>
  );
}
