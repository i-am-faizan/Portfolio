"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

const codeLines = [
  { indent: 0, text: "export async function handler(req: Request) {" },
  { indent: 1, text: "const user = await auth.verify(req);" },
  { indent: 1, text: "const orders = await db.orders" },
  { indent: 2, text: ".where({ userId: user.id })" },
  { indent: 2, text: ".orderBy('createdAt', 'desc');" },
  { indent: 1, text: "return json({ orders });" },
  { indent: 0, text: "}" },
];

const buildSteps = [
  { label: "Type-checking with TypeScript", meta: "0 errors" },
  { label: "Running test suite", meta: "128 passed" },
  { label: "Bundling for production", meta: "412kb → 118kb" },
  { label: "Deploying to production", meta: "Live in 12s" },
];

export default function CodePanel() {
  const prefersReduced = useReducedMotion();
  // Always start from the same state the server rendered (fully
  // collapsed) so client hydration matches, then jump straight to the
  // finished state in an effect if the user prefers reduced motion —
  // seeding useState from a value only known on the client (like
  // useReducedMotion's SSR-null) causes a hydration mismatch.
  const [visibleLines, setVisibleLines] = useState(0);
  const [stepIndex, setStepIndex] = useState(-1);

  useEffect(() => {
    if (prefersReduced) {
      setVisibleLines(codeLines.length);
      setStepIndex(buildSteps.length - 1);
    }
  }, [prefersReduced]);

  useEffect(() => {
    if (prefersReduced) return;
    if (visibleLines >= codeLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 220);
    return () => clearTimeout(t);
  }, [visibleLines, prefersReduced]);

  useEffect(() => {
    if (prefersReduced) return;
    if (visibleLines < codeLines.length) return;
    if (stepIndex >= buildSteps.length - 1) return;
    const t = setTimeout(() => setStepIndex((s) => s + 1), 550);
    return () => clearTimeout(t);
  }, [visibleLines, stepIndex, prefersReduced]);

  return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-ink/10 bg-[#0d0b1a] shadow-[0_30px_60px_-24px_rgba(20,10,50,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-[11px] text-white/40">
          orders.service.ts
        </span>
      </div>

      <div className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.9]">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            style={{ paddingLeft: `${line.indent * 16}px` }}
            className="whitespace-pre text-white/70"
          >
            {line.text}
          </motion.div>
        ))}
      </div>

      <div className="space-y-2.5 border-t border-white/5 bg-white/[0.02] px-4 py-4">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-white/30">
          Deploy pipeline
        </p>
        {buildSteps.map((step, i) => {
          const active = i === stepIndex;
          const shown = i <= stepIndex;
          if (!shown) return null;
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2">
                {active ? (
                  <Loader2 size={13} className="animate-spin text-violet-300" />
                ) : (
                  <Check size={13} className="text-violet-300" />
                )}
                <span className="text-[12.5px] text-white/80">{step.label}</span>
              </div>
              <span className="font-mono text-[11px] text-white/35">{step.meta}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
