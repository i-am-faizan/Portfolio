"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View case study for ${project.name}`}
      className="group relative cursor-pointer overflow-hidden p-6 sm:p-8 lg:p-10 transition-colors duration-300 hover:bg-ink/[0.015] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
    >
      {/* Blueprint Index & Top-Right Metadata Bar */}
      <div className="flex items-center justify-between gap-4 font-mono text-[12px] uppercase tracking-wider text-ink-faint">
        <div className="flex items-center gap-2 text-violet-600 font-semibold">
          <span>{project.index}</span>
          <span className="text-ink/20">/</span>
          <span className="text-ink-soft">{project.category}</span>
        </div>

        <div className="flex items-center gap-3">
          {project.client && (
            <span className="hidden sm:inline-block text-ink-faint">
              Client: <strong className="font-semibold text-ink-soft">{project.client}</strong>
            </span>
          )}
          <span className="rounded-full bg-ink/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-ink-soft border border-ink/[0.08]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Large Bold Project Title */}
      <div className="mt-3 mb-6 flex items-start justify-between gap-4">
        <h3 className="font-display text-[26px] sm:text-[34px] lg:text-[40px] font-bold leading-tight tracking-[-0.02em] text-ink transition-colors group-hover:text-violet-600">
          {project.name}
        </h3>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-ink-soft shadow-sm transition-all duration-300 group-hover:border-violet-500 group-hover:bg-violet-600 group-hover:text-white group-hover:scale-110">
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Asymmetric Dual Preview Images Showcase */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 items-stretch">
        {/* Main Wider Image (e.g. 7 columns) */}
        <div className="relative aspect-[16/10] sm:col-span-7 w-full overflow-hidden rounded-[18px] border border-ink/10 bg-graphite shadow-sm">
          <Image
            src={project.image}
            alt={`${project.name} main interface screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:opacity-0" />
        </div>

        {/* Secondary Asymmetric Preview Image (e.g. 5 columns) */}
        <div className="relative aspect-[16/10] sm:col-span-5 w-full overflow-hidden rounded-[18px] border border-ink/10 bg-graphite shadow-sm">
          <Image
            src={project.secondaryImage}
            alt={`${project.name} detail preview`}
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:opacity-0" />
        </div>
      </div>

      {/* Short 2-3 Line Project Description */}
      <p className="mt-6 max-w-3xl text-[14.5px] sm:text-[15.5px] leading-relaxed text-ink-soft">
        {project.description}
      </p>

      {/* Services & Technology Tag Pills Row */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-ink/10 bg-white/70 px-3.5 py-1 font-mono text-[11.5px] font-medium text-ink-soft shadow-xs backdrop-blur-xs transition-colors duration-200 group-hover:border-violet-400/60 group-hover:text-ink"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}


