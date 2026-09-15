import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { social, getMailtoUrl } from "@/data/social";

const platformLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export default function Footer() {
  const socialLinks = [
    { href: social.github, label: "GitHub", icon: Github },
    { href: social.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: social.twitter, label: "X / Twitter", icon: Twitter },
    { href: getMailtoUrl(), label: "Email", icon: Mail },
  ];
  return (
    <footer className="bg-surface px-6 pt-14 md:px-14">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col justify-between gap-10 border-b border-ink/[0.08] pb-12 sm:flex-row">
          <div className="max-w-xs">
            <p className="font-display text-[18px] font-semibold text-ink">
              {profile.firstName}
              <span className="text-violet-500">.</span>
            </p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-ink-faint">
              {profile.short}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-wide text-ink-faint">
                Site
              </p>
              <ul className="mt-4 space-y-2.5">
                {platformLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[13.5px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-medium uppercase tracking-wide text-ink-faint">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-2.5">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-[13.5px] text-ink-soft transition-colors hover:text-ink"
                    >
                      <link.icon size={13} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-[12px] text-ink-faint sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Engineered for high performance &amp; scale</p>
        </div>

        <div className="select-none overflow-hidden py-2">
          <p
            className="bg-gradient-to-b from-violet-700 via-violet-500 to-surface bg-clip-text text-center font-display font-bold leading-none tracking-tight text-transparent"
            style={{ fontSize: "clamp(64px, 15vw, 190px)" }}
            aria-hidden="true"
          >
            {profile.firstName.toUpperCase()}
          </p>
        </div>
      </div>
    </footer>
  );
}
