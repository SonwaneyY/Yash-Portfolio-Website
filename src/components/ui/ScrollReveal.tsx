"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          ...(fadeInUp.visible as object),
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1] as const,
            delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}
