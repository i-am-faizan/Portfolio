import RevealText from "@/components/animations/RevealText";
import FadeIn from "@/components/animations/FadeIn";
import WaveLines from "@/components/ui/WaveLines";
import RadialStat from "@/components/ui/RadialStat";
import Badge from "@/components/ui/Badge";
import { profile } from "@/data/profile";

const timeAllocation = [
  { label: "Backend & APIs", value: 42 },
  { label: "Frontend", value: 28 },
  { label: "Infra & DevOps", value: 18 },
  { label: "Code review & mentoring", value: 12 },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-violet-fade px-6 py-20 md:px-14 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <WaveLines tone="dark" className="h-full w-full" lineCount={12} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <FadeIn>
          <Badge tone="dark">About</Badge>
        </FadeIn>

        <RevealText
          as="h2"
          text="I care more about what breaks at 2am than what looks good in a demo."
          className="mt-6 max-w-3xl font-display text-[30px] font-semibold leading-[1.2] tracking-[-0.01em] text-white sm:text-[38px]"
        />

        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
            {profile.philosophy}
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.05} className="rounded-card border border-white/10 bg-white/[0.04] p-7">
            <p className="text-[13px] font-medium uppercase tracking-wide text-white/40">
              Code health
            </p>
            <div className="mt-6">
              <RadialStat
                value={92}
                label="Average test coverage"
                sublabel="Across the last four production services I've owned end to end."
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="rounded-card border border-white/10 bg-white/[0.04] p-7">
            <p className="text-[13px] font-medium uppercase tracking-wide text-white/40">
              Where the hours go
            </p>
            <div className="mt-6 space-y-4">
              {timeAllocation.map((row) => (
                <div key={row.label}>
                  <div className="mb-1.5 flex items-center justify-between text-[13px] text-white/70">
                    <span>{row.label}</span>
                    <span className="font-tabular text-white/45">{row.value}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-violet-300"
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
