"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import FadeIn from "@/components/animations/FadeIn";
import Badge from "@/components/ui/Badge";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface px-4 py-14 sm:px-8 sm:py-20 md:px-14 md:py-28 overflow-hidden w-full max-w-full">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Badge>Working together</Badge>
        </FadeIn>
        <RevealText
          as="h2"
          text="A few things people usually ask."
          className="mt-6 font-display text-[24px] sm:text-[38px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink"
        />

        <div className="mt-12 divide-y divide-ink/[0.08] border-t border-ink/[0.08]">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-[15px] font-medium text-ink">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink-soft"
                  >
                    <Plus size={14} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 max-w-xl text-[14px] leading-relaxed text-ink-soft">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
