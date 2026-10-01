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
      className="relative overflow-hidden bg-violet-fade-rev px-4 pb-20 pt-16 text-center sm:px-8 sm:pb-28 sm:pt-20 md:px-14 w-full max-w-full"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] opacity-70">
        <WaveLines tone="dark" className="h-full w-full" lineCount={14} />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <RevealText
          as="h2"
          text="Have something worth building?"
          className="font-display text-[26px] sm:text-[44px] font-semibold leading-[1.15] tracking-[-0.01em] text-white"
        />
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-4 sm:mt-5 max-w-md text-[14px] sm:text-[15px] leading-relaxed text-white/55">
            {profile.availability}. If you have a role or a project that needs someone who cares about both ends of the stack, I&rsquo;d like to hear about it.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
          <Button href={getMailtoUrl({ email: profile.email })} variant="primary" className="!bg-white !text-ink hover:!bg-violet-100 justify-center truncate" icon={<Mail size={16} />}>
            <span className="truncate">{profile.email}</span>
          </Button>
          <Button href="#projects" variant="secondary" className="!border-white/25 !text-white hover:!border-white/50 justify-center" icon={<ArrowUpRight size={16} />}>
            View my work
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
