"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let prevY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 16);

      if (currentY > 80) {
        if (currentY > prevY + 6) {
          // Scrolling down -> hide navbar smoothly
          setVisible(false);
        } else if (currentY < prevY - 6) {
          // Scrolling up -> reveal navbar smoothly
          setVisible(true);
        }
      } else {
        // Near top -> always show
        setVisible(true);
      }
      prevY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: visible || open ? 0 : -90,
        opacity: visible || open ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8 md:pt-6 pointer-events-auto"
    >
      <div
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-500",
          scrolled
            ? "border-ink/10 bg-surface/80 shadow-[0_8px_30px_-12px_rgba(20,10,50,0.25)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <a href="#top" className="font-display text-[15px] font-semibold tracking-tight text-ink">
          {profile.firstName}
          <span className="text-violet-500">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={clsx(
                "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors",
                active === link.href
                  ? "text-ink"
                  : "text-ink-soft hover:text-ink"
              )}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-ink/[0.06]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-surface transition-colors hover:bg-violet-700 md:inline-flex"
        >
          Let&rsquo;s talk
          <ArrowUpRight size={14} />
        </a>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-ink/10 bg-surface/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-[15px] font-medium text-ink-soft hover:bg-ink/[0.04] hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
