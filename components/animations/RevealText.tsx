"use client";

import { motion, Variants } from "framer-motion";

interface RevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
}

/**
 * Splits text into words and reveals them with a blur-to-sharp,
 * rise-into-place motion as the element scrolls into view.
 * This is the signature "signature moment" motion of the site,
 * used sparingly on section headings only.
 *
 * Always renders the same word-span tree on server and client —
 * branching the returned structure on useReducedMotion() would cause
 * a hydration mismatch, since that hook only resolves client-side.
 * Actual motion reduction is handled globally via <MotionConfig
 * reducedMotion="user"> in the root layout.
 */
export default function RevealText({
  text,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 0.045,
  once = true,
  amount = 0.6,
}: RevealTextProps) {
  const words = text.split(" ");
  const Tag = motion[as];

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const word: Variants = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
        mass: 0.9,
      },
    },
  };

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={container}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className="reveal-word"
          style={{ marginRight: "0.28em" }}
        >
          {w}
        </motion.span>
      ))}
    </Tag>
  );
}
