"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Github,
  CheckCircle2,
  Cpu,
  Sparkles,
  Zap,
  Layers,
} from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Focus close button on open for accessibility
    setTimeout(() => closeButtonRef.current?.focus(), 50);

    // Reset scroll position on open
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-8"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Backdrop with heavy blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window: Full-screen on mobile, floating card on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          data-lenis-prevent="true"
          className="relative z-10 h-full w-full max-w-6xl overflow-hidden bg-[#0d0f1f] text-white shadow-[0_30px_100px_-20px_rgba(0,0,0,0.85)] flex flex-col sm:h-auto sm:max-h-[92vh] sm:rounded-[28px] md:rounded-[32px] sm:border sm:border-white/15"
        >
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-indigo-600/20 blur-[100px]" />

          {/* Sticky Header Bar */}
          <div className="relative z-20 flex shrink-0 items-center justify-between border-b border-white/10 bg-[#0d0f1f]/95 px-5 py-3.5 sm:px-7 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/20 font-mono text-[12px] font-bold text-violet-300 border border-violet-500/30">
                {project.index}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-[17px] sm:text-[20px] font-bold text-white leading-tight">
                    {project.name}
                  </h3>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10.5px] text-emerald-400 border border-emerald-500/20">
                    {project.status || "Production"}
                  </span>
                </div>
                <p className="text-[12px] text-white/50">{project.category} · {project.role} ({project.year})</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-violet-600 px-4 py-1.5 text-[12px] font-semibold text-white transition-all hover:bg-violet-500 hover:scale-105"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={13} />
              </a>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Scrollable Content Container */}
          <div
            ref={scrollContainerRef}
            data-lenis-prevent="true"
            className="modal-scrollbar relative z-10 flex-1 overflow-y-auto p-5 sm:p-7 md:p-8 space-y-6"
            style={{ overscrollBehavior: "contain" }}
          >
            {/* Dual Images Showcase */}
            <div className="grid gap-4 sm:grid-cols-12">
              <div className="relative aspect-[16/10] sm:col-span-7 overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-xl">
                <Image
                  src={project.image}
                  alt={`${project.name} main interface`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative aspect-[16/10] sm:col-span-5 overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-xl">
                <Image
                  src={project.secondaryImage}
                  alt={`${project.name} secondary view`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Information, Problem, Features & Architecture (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                {/* Overview Narrative */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                  <h4 className="font-display text-[16px] font-bold text-white mb-2 flex items-center gap-2">
                    <Sparkles size={16} className="text-violet-400" />
                    Project Purpose &amp; Overview
                  </h4>
                  <p className="text-[13.5px] leading-relaxed text-white/80">
                    {project.detailedDescription}
                  </p>
                </div>

                {/* Core Capabilities */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md space-y-3">
                  <h4 className="font-display text-[15.5px] font-bold text-white flex items-center gap-2">
                    <Layers size={16} className="text-violet-400" />
                    Key Capabilities &amp; Engineering Scope
                  </h4>
                  <div className="space-y-2">
                    {project.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-[13px] text-white/75">
                        <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Architecture Blueprint */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md space-y-3.5">
                  <h4 className="font-display text-[15.5px] font-bold text-white flex items-center gap-2">
                    <Cpu size={16} className="text-violet-400" />
                    System Architecture
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px]">
                    <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                      <span className="font-mono text-[10.5px] font-semibold uppercase text-violet-300">Frontend</span>
                      <p className="font-medium text-white/90 mt-1">{project.architecture.frontend}</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                      <span className="font-mono text-[10.5px] font-semibold uppercase text-violet-300">Backend</span>
                      <p className="font-medium text-white/90 mt-1">{project.architecture.backend}</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                      <span className="font-mono text-[10.5px] font-semibold uppercase text-violet-300">Database &amp; Cache</span>
                      <p className="font-medium text-white/90 mt-1">{project.architecture.database}</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                      <span className="font-mono text-[10.5px] font-semibold uppercase text-violet-300">Infra &amp; CI/CD</span>
                      <p className="font-medium text-white/90 mt-1">{project.architecture.infrastructure}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Telemetry Metrics & Stack (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                {/* Telemetry & Impact Metric Cards */}
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2.5 flex items-center gap-1.5">
                    <Zap size={13} className="text-violet-400" />
                    Verified Production Benchmarks
                  </p>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md"
                      >
                        <p className="font-display text-[20px] font-bold text-violet-300">
                          {m.value}
                        </p>
                        <p className="mt-0.5 text-[11px] text-white/60 font-medium">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Stack Cloud */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                  <p className="font-mono text-[11px] font-semibold uppercase text-white/50 mb-3">
                    Technologies &amp; Frameworks
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11.5px] text-white/90 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action Links */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[13px] text-white/70">
                    <span className="block font-semibold text-white">Live Project Resources</span>
                    <span>Explore source code or live deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-[12.5px] font-medium text-white hover:bg-white/20 transition-colors flex-1 sm:flex-none"
                    >
                      <Github size={14} />
                      <span>Source</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-violet-600 px-4 py-2 text-[12.5px] font-semibold text-white hover:bg-violet-500 transition-colors flex-1 sm:flex-none"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer CTA Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 mt-4">
              <span className="text-[13px] text-white/70">
                Interested in building high-performance systems like <strong className="text-white">{project.name}</strong>?
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="rounded-full border border-white/15 px-4 py-2 text-[12.5px] font-medium text-white/80 hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 rounded-full bg-violet-600 px-5 py-2 text-[12.5px] font-semibold text-white shadow-md transition-all hover:bg-violet-500 hover:scale-105"
                >
                  Discuss similar project
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


