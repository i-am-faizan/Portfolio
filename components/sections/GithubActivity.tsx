import { Star } from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import Badge from "@/components/ui/Badge";
import { repos, activityStats } from "@/data/repos";
import { social } from "@/data/social";

const langColor: Record<string, string> = {
  TypeScript: "#7cb7ff",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Java: "#f2a65a",
  Rust: "#f0a3a3",
  Shell: "#a3e6a3",
};

export default function GithubActivity() {
  return (
    <section className="relative overflow-hidden bg-violet-fade px-6 py-20 md:px-14 md:py-28">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <FadeIn>
              <Badge tone="dark">Open source</Badge>
            </FadeIn>
            <RevealText
              as="h2"
              text="Most weeks, the green squares tell the truth."
              className="mt-6 max-w-xl font-display text-[28px] font-semibold leading-[1.25] tracking-[-0.01em] text-white sm:text-[34px]"
            />
          </div>
          <FadeIn delay={0.15} className="flex gap-8">
            <div>
              <p className="font-display text-[22px] font-semibold text-white">
                {activityStats.contributions}
              </p>
              <p className="text-[12.5px] text-white/45">Contributions / yr</p>
            </div>
            <div>
              <p className="font-display text-[22px] font-semibold text-white">
                {activityStats.publicRepos}
              </p>
              <p className="text-[12.5px] text-white/45">Public repos</p>
            </div>
          </FadeIn>
        </div>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <StaggerItem key={repo.name}>
              <a
                href={`${social.github}${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-card border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-violet-300/40 hover:bg-white/[0.06]"
              >
                <p className="font-mono text-[14px] font-medium text-white">{repo.name}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/50">
                  {repo.description}
                </p>
                <div className="mt-5 flex items-center gap-4 text-[12px] text-white/40">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: langColor[repo.language] ?? "#c4b5fd" }}
                    />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stars}
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
