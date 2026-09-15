import {
  Code2,
  Layers,
  Bot,
  CheckSquare,
  Fingerprint,
  Sparkles,
  Compass,
  Cpu,
  Globe,
  Zap,
} from "lucide-react";

const brands = [
  { name: "Codify", icon: Code2 },
  { name: "Flowboard", icon: Layers },
  { name: "Agentify", icon: Bot },
  { name: "TodoFusion", icon: CheckSquare },
  { name: "Identify", icon: Fingerprint },
  { name: "Nexus AI", icon: Sparkles },
  { name: "Landify", icon: Compass },
  { name: "Synapse", icon: Cpu },
  { name: "Aether Cloud", icon: Globe },
  { name: "HyperScale", icon: Zap },
];

export default function TechMarquee() {
  const loop = [...brands, ...brands];

  return (
    <section className="border-y border-ink/[0.06] bg-surface py-6 sm:py-8 overflow-hidden">
      <div className="relative overflow-hidden">
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14">
          {loop.map((brand, i) => {
            const Icon = brand.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <Icon size={18} className="text-ink" />
                <span className="font-display text-[15px] font-bold tracking-tight text-ink sm:text-[16px]">
                  {brand.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

