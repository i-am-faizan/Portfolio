"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

/**
 * Always renders a motion.div on both server and client — see the note
 * in RevealText.tsx on why this must not branch on useReducedMotion().
 * Motion reduction is handled globally by <MotionConfig reducedMotion="user">.
 */
export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className,
  once = true,
  amount = 0.3,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
