import { GraduationCap, Award } from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import FadeIn from "@/components/animations/FadeIn";
import Badge from "@/components/ui/Badge";
import { education, certifications } from "@/data/education";

export default function Education() {
  return (
    <section className="bg-surface px-6 pb-20 md:px-14 md:pb-28">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <Badge>Education</Badge>
        </FadeIn>
        <RevealText
          as="h2"
          text="The formal part of the story."
          className="mt-6 max-w-2xl font-display text-[30px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[38px]"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <FadeIn key={item.id} className="rounded-card border border-ink/10 bg-white p-6 shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <GraduationCap size={18} />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold text-ink">{item.degree}</h3>
              <p className="mt-1 text-[13.5px] text-ink-soft">{item.institution}</p>
              <p className="mt-1 font-mono text-[12px] text-ink-faint">{item.year}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-faint">{item.detail}</p>
            </FadeIn>
          ))}

          <FadeIn delay={0.1} className="rounded-card border border-ink/10 bg-white p-6 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <Award size={18} />
            </span>
            <h3 className="mt-4 text-[16px] font-semibold text-ink">Certifications</h3>
            <ul className="mt-3 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-2.5 text-[13.5px] text-ink-soft">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                  {cert}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
