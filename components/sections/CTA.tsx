import { ArrowUpRight, Mail } from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import FadeIn from "@/components/animations/FadeIn";
import WaveLines from "@/components/ui/WaveLines";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { getMailtoUrl } from "@/data/social";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-violet-fade-rev px-6 pb-28 pt-20 text-center md:px-14"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] opacity-70">
        <WaveLines tone="dark" className="h-full w-full" lineCount={14} />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <RevealText
          as="h2"
          text="Have something worth building?"
          className="font-display text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:text-[44px]"
        />
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
            {profile.availability}. If you have a role or a project that needs someone who cares about both ends of the stack, I&rsquo;d like to hear about it.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={getMailtoUrl({ email: profile.email })} variant="primary" className="!bg-white !text-ink hover:!bg-violet-100" icon={<Mail size={16} />}>
            {profile.email}
          </Button>
          <Button href="#projects" variant="secondary" className="!border-white/25 !text-white hover:!border-white/50" icon={<ArrowUpRight size={16} />}>
            View my work
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
