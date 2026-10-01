"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import RevealText from "@/components/animations/RevealText";
import FadeIn from "@/components/animations/FadeIn";
import Badge from "@/components/ui/Badge";
import { experience } from "@/data/experience";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
  });

  return (
    <section id="experience" className="bg-surface px-4 py-14 sm:px-8 sm:py-20 md:px-14 md:py-28 overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <Badge>Experience</Badge>
        </FadeIn>
        <RevealText
          as="h2"
          text="Where I've built it before."
          className="mt-6 max-w-2xl font-display text-[24px] sm:text-[38px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
        />

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-[7px] top-1 h-full w-px bg-ink/10 sm:left-[9px]" />
          <motion.div
            style={{ scaleY: pathLength }}
            className="absolute left-[7px] top-1 h-full w-px origin-top bg-violet-500 sm:left-[9px]"
          />

          <div className="space-y-14">
            {experience.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.05} className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-surface bg-violet-500 shadow-[0_0_0_1px_rgba(20,10,50,0.08)] sm:h-[19px] sm:w-[19px]" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-[19px] font-semibold text-ink">
                      {item.role}
                      <span className="font-body font-normal text-ink-faint"> · {item.company}</span>
                    </h3>
                    {item.highlightBadge && (
                      <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-violet-600 border border-violet-500/20">
                        {item.highlightBadge}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[12px] text-ink-faint">{item.duration}</span>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2.5 text-[14px] leading-relaxed text-ink-soft">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/20" />
                      {r}
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-[13.5px] font-medium text-violet-600">{item.achievement}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-ink/[0.03] px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
