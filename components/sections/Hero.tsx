"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Code2, Zap } from "lucide-react";
import Magnetic from "@/components/animations/Magnetic";
import Badge from "@/components/ui/Badge";
import { profile } from "@/data/profile";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative px-3 pt-3 pb-6 md:px-6 md:pt-4 md:pb-10 overflow-hidden">
      {/* Ambient background glowing aura */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/15 blur-[150px]" />

      {/* Outer Hero Card Container */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[26px] border border-ink/10 bg-surface/90 shadow-[0_20px_50px_-20px_rgba(106,75,214,0.12)] backdrop-blur-md md:rounded-[36px]">
        
        {/* Subtle grid pattern background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0c0a18_1px,transparent_1px)] [background-size:24px_24px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch relative z-10"
        >
          {/* Left Column: Typography, CTAs, Metrics */}
          <div className="flex flex-col justify-between p-7 sm:p-10 md:p-14 lg:py-16 lg:pl-16 lg:pr-8">
            <div>
              {/* Eyebrow Badge */}
              <motion.div variants={rise}>
                <Badge>
                  <span className="flex items-center gap-1.5 text-violet-600">
                    <Sparkles size={13} />
                    <span>Lead Full-Stack &amp; Systems Architect</span>
                  </span>
                </Badge>
              </motion.div>

              {/* Main Headline with Theme Gradient Accent */}
              <motion.h1
                variants={rise}
                className="mt-5 font-display text-[38px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[54px] md:text-[62px] lg:text-[66px]"
              >
                Design Better. <br />
                Build <span className="text-violet-600/90">Faster &amp; Smarter.</span>
              </motion.h1>

              {/* Bio / Tagline */}
              <motion.p
                variants={rise}
                className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:text-[16.5px]"
              >
                I architect refined brands, high-performance web applications, and scalable distributed systems for ambitious teams and modern founders.
              </motion.p>

              {/* CTA Buttons with Brand Violet Accents */}
              <motion.div
                variants={rise}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Magnetic strength={0.2}>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_25px_-8px_rgba(106,75,214,0.45)] transition-all duration-300 hover:bg-violet-700 hover:scale-105 hover:shadow-[0_15px_30px_-8px_rgba(106,75,214,0.6)]"
                  >
                    <span>Explore Work</span>
                    <ArrowUpRight size={16} />
                  </a>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/5 px-7 py-3.5 text-[14px] font-medium text-ink transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10"
                  >
                    Get in touch
                  </a>
                </Magnetic>
              </motion.div>
            </div>

            {/* Metrics Row with Brand Accents */}
            <motion.div
              variants={rise}
              className="mt-12 flex flex-wrap items-center gap-8 border-t border-ink/[0.08] pt-8 sm:gap-12"
            >
              <div>
                <p className="font-display text-[28px] font-bold tracking-tight text-ink sm:text-[34px]">
                  120<span className="text-violet-600">+</span>
                </p>
                <p className="text-[12.5px] font-mono font-medium uppercase tracking-wider text-ink-faint">
                  Projects shipped
                </p>
              </div>

              <div>
                <p className="font-display text-[28px] font-bold tracking-tight text-ink sm:text-[34px]">2
                  <span className="text-violet-600">yrs</span>
                </p>
                <p className="text-[12.5px] font-mono font-medium uppercase tracking-wider text-ink-faint">
                  Engineering Exp
                </p>
              </div>

              <div>
                <p className="font-display text-[28px] font-bold tracking-tight text-ink sm:text-[34px]">
                  99.9<span className="text-violet-600">%</span>
                </p>
                <p className="text-[12.5px] font-mono font-medium uppercase tracking-wider text-ink-faint">
                  Uptime Record
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Natural Full-Color Studio Portrait + Theme Glow Card */}
          <motion.div
            variants={rise}
            className="relative flex min-h-[420px] items-end justify-center overflow-hidden bg-gradient-to-tr from-violet-500/10 via-purple-500/5 to-transparent lg:min-h-full"
          >
            {/* Full-Color Natural Portrait */}
            <div className="relative h-full w-full min-h-[440px] sm:min-h-[500px] lg:min-h-full">
              <Image
                src="/images/hero-potrait.jpeg"
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              {/* Warm gradient vignette matching overall site theme */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/40 via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphic Availability Card with Theme Tokens */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-violet-500/30 bg-[#0c0a18]/85 p-5 text-white shadow-[0_25px_50px_-12px_rgba(106,75,214,0.3)] backdrop-blur-xl sm:bottom-8 sm:left-auto sm:right-8 sm:max-w-[320px]"
            >
              <div className="flex items-start justify-between gap-3.5">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-violet-300">
                      System Status
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <h3 className="text-[14.5px] font-semibold text-white tracking-tight">
                      Available for projects
                    </h3>
                  </div>

                  <p className="mt-1.5 text-[12px] leading-relaxed text-white/70">
                    Open for high-impact architecture, web applications &amp; technical leadership.
                  </p>
                </div>

                <Magnetic strength={0.3}>
                  <a
                    href="#contact"
                    className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-violet-500"
                    aria-label="Get in touch"
                  >
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white"
                    />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

