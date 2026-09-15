"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";
import { projects, type Project } from "@/data/projects";
import { Sparkles, Layers, SlidersHorizontal } from "lucide-react";

const CATEGORIES = [
  "All Projects",
  "Real Estate",
  "E-Commerce",
  "Logistics",
  "Hardware & Design",
  "Enterprise Software",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All Projects") return true;
    if (activeCategory === "Real Estate") return p.category.includes("Estate") || p.category.includes("PropTech");
    if (activeCategory === "E-Commerce") return p.category.includes("Commerce") || p.category.includes("Fashion");
    if (activeCategory === "Logistics") return p.category.includes("Logistics") || p.category.includes("Delivery");
    if (activeCategory === "Hardware & Design") return p.category.includes("Hardware") || p.category.includes("Design");
    if (activeCategory === "Enterprise Software") return p.category.includes("Enterprise") || p.category.includes("Software");
    return true;
  });

  return (
    <section
      id="projects"
      className="relative w-full border-t border-b border-ink/10 bg-surface"
    >
      {/* Ambient background aura */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-violet-400/10 blur-[140px]" />

      {/* Blueprint Grid Layout: Full width split container */}
      <div className="mx-auto max-w-[1500px] grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        
        {/* Left Sticky Sidebar Column (lg:col-span-4 or 5) */}
        <div className="lg:col-span-4 xl:col-span-4 border-b lg:border-b-0 lg:border-r border-ink/10 p-6 sm:p-8 lg:p-12 flex flex-col justify-between bg-surface/50 backdrop-blur-xs lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:self-start">
          <div className="space-y-6">
            {/* Blueprint Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-3.5 py-1 font-mono text-[12px] font-semibold text-violet-600 uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-600 animate-pulse" />
              <span>PROJECTS</span>
            </div>

            {/* Large Bold Heading */}
            <h2 className="font-display text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
              Selected <br className="hidden sm:inline" /> Work
            </h2>

            {/* Supporting Subtext */}
            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-ink-soft max-w-md">
              High-impact production systems built from scratch — architected for extreme latency requirements, resilient infrastructure, and seamless user experiences.
            </p>

            {/* Category Filter Pills in Sidebar */}
            <div className="pt-4 border-t border-ink/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-ink-faint">
                <span className="flex items-center gap-1.5">
                  <SlidersHorizontal size={13} className="text-violet-600" />
                  Filter Disciplines
                </span>
                <span>{filteredProjects.length} / {projects.length}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`relative rounded-full px-3 py-1.5 text-[12px] font-mono font-medium transition-all ${
                        isActive
                          ? "bg-ink text-white shadow-xs"
                          : "bg-ink/[0.03] text-ink-soft hover:bg-ink/[0.07] hover:text-ink border border-ink/[0.06]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pinned Bottom Caption */}
          <div className="mt-8 lg:mt-0 pt-6 border-t border-ink/10 flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-faint">
            <span>EST. 2019</span>
            <span className="flex items-center gap-1.5 text-ink-soft">
              <Sparkles size={13} className="text-violet-600" />
              {projects.length} CASE STUDIES
            </span>
          </div>
        </div>

        {/* Right Stacked Projects List Column (lg:col-span-8 or 7) */}
        <div className="lg:col-span-8 xl:col-span-8 divide-y divide-ink/10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="p-12 text-center text-ink-soft font-mono text-sm">
              No projects found in this category.
            </div>
          )}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

