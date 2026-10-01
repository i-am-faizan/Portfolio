import RevealText from "@/components/animations/RevealText";
import FadeIn from "@/components/animations/FadeIn";
import TopoLines from "@/components/ui/TopoLines";
import Counter from "@/components/ui/Counter";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: 40, suffix: "+", label: "Services shipped to production" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime across owned services" },
  { value: 380, suffix: "ms", label: "Median API response time" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-violet-fade-rev px-4 py-14 sm:px-8 sm:py-20 md:px-14 md:py-28 w-full max-w-full">
      <div className="pointer-events-none absolute inset-0">
        <TopoLines className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <RevealText
            as="h2"
            text="Built to hold real traffic, not just a demo click-through."
            className="max-w-2xl font-display text-[24px] sm:text-[34px] font-semibold leading-[1.25] tracking-[-0.01em] text-white"
          />
          <FadeIn delay={0.2}>
            <Button href="#projects" variant="secondary" className="!border-white/20 !text-white hover:!border-white/50 w-full sm:w-auto" icon={<ArrowUpRight size={16} />}>
              See the work
            </Button>
          </FadeIn>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-10 border-t border-white/10 pt-8 sm:pt-10 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
                className="font-display text-[36px] font-semibold text-white sm:text-[42px]"
              />
              <p className="mt-2 text-[13px] text-white/50">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
