"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Database, Wrench, ChevronDown } from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import FadeIn from "@/components/animations/FadeIn";
import Badge from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";

const icons: Record<string, React.ElementType> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export default function Skills() {
  const [openId, setOpenId] = useState<string>("");

  return (
    <section id="skills" className="bg-surface px-6 py-20 md:px-14 md:py-28">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <Badge>Skills</Badge>
        </FadeIn>
        <RevealText
          as="h2"
          text="A toolkit built for shipping, not for slides."
          className="mt-6 max-w-2xl font-display text-[30px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[38px]"
        />

        <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-2">
          {skillCategories.map((cat) => {
            const Icon = icons[cat.id] || Code2;
            const open = openId === cat.id;
            return (
              <StaggerItem key={cat.id}>
                <button
                  onClick={() => setOpenId(open ? "" : cat.id)}
                  className="w-full rounded-card border border-ink/10 bg-white p-6 text-left shadow-card transition-colors hover:border-violet-300/60"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="text-[16px] font-semibold text-ink">{cat.label}</p>
                        <p className="text-[13px] text-ink-faint">{cat.note}</p>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-ink-faint"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </div>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 flex flex-wrap gap-2 pt-1">
                          {cat.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-ink/10 bg-ink/[0.02] px-3 py-1.5 font-mono text-[12px] text-ink-soft"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
