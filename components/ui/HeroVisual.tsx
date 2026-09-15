"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Cpu, Monitor, Server, Zap, Database, Layers, Cloud } from "lucide-react";

interface GraphNode {
  key: string;
  label: string;
  icon: React.ElementType;
  x: number; // percent, 0-100
  y: number; // percent, 0-100
}

const CENTER = { x: 50, y: 50 };

const nodes: GraphNode[] = [
  { key: "client", label: "Client", icon: Monitor, x: 50, y: 11 },
  { key: "cache", label: "Cache", icon: Zap, x: 83.4, y: 30.5 },
  { key: "db", label: "Database", icon: Database, x: 83.4, y: 69.5 },
  { key: "queue", label: "Queue", icon: Layers, x: 50, y: 89 },
  { key: "cdn", label: "CDN", icon: Cloud, x: 16.6, y: 69.5 },
  { key: "api", label: "API", icon: Server, x: 16.6, y: 30.5 },
];

function quadPoint(
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  t: number
) {
  const x = (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t ** 2 * p2.x;
  const y = (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t ** 2 * p2.y;
  return { x, y };
}

/**
 * Hero graphic: a small animated "system architecture" diagram instead
 * of a UI mockup — a pulsing core node with services arranged around
 * it, connected by curved lines that carry a traveling glow (standing
 * in for live request/response traffic). Ambient glow + a slow dashed
 * orbit ring tie it back to the rest of the site's visual language.
 * All motion is transform/opacity based and calms down automatically
 * for reduced-motion users via the app-wide MotionConfig.
 */
export default function HeroVisual() {
  const edges = useMemo(() => {
    return nodes.map((node, i) => {
      const dx = node.x - CENTER.x;
      const dy = node.y - CENTER.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;
      const bend = i % 2 === 0 ? 7 : -7;
      const mid = { x: (CENTER.x + node.x) / 2, y: (CENTER.y + node.y) / 2 };
      const control = { x: mid.x + nx * bend, y: mid.y + ny * bend };
      const path = `M ${CENTER.x} ${CENTER.y} Q ${control.x} ${control.y} ${node.x} ${node.y}`;
      const samples = Array.from({ length: 7 }, (_, k) =>
        quadPoint(CENTER, control, node, k / 6)
      );
      return { key: node.key, path, samples, delay: i * 0.35 };
    });
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[400px]">
      {/* ambient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/25 blur-[90px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* slow-turning dashed orbit ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      {/* connecting lines (static) */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {edges.map((edge) => (
          <path
            key={edge.key}
            d={edge.path}
            fill="none"
            stroke="rgba(167,139,250,0.28)"
            strokeWidth={0.5}
          />
        ))}
      </svg>

      {/* traveling "packets" along each curve */}
      {edges.map((edge) => (
        <motion.div
          key={`${edge.key}-packet`}
          className="absolute h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300"
          style={{
            left: `${edge.samples[0].x}%`,
            top: `${edge.samples[0].y}%`,
            boxShadow: "0 0 6px 2px rgba(196,181,253,0.85)",
          }}
          animate={{
            left: edge.samples.map((p) => `${p.x}%`),
            top: edge.samples.map((p) => `${p.y}%`),
            opacity: [0, 1, 1, 1, 1, 1, 0],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "linear",
            delay: edge.delay,
            repeatDelay: 0.8,
          }}
        />
      ))}

      {/* core node */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-violet-300/30 bg-[#15122a] shadow-[0_0_40px_rgba(167,139,250,0.35)]"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cpu size={26} className="text-violet-300" />
      </motion.div>

      {/* service nodes */}
      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.key}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#15122a]/90 shadow-[0_15px_30px_-15px_rgba(20,10,50,0.7)] backdrop-blur-md">
              <Icon size={16} className="text-violet-300" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wide text-ink-faint">
              {node.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}