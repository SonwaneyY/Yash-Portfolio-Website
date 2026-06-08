"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  // Only opt into the hidden->visible reveal after mount. SSR / no-JS / reduced
  // motion render the content visible so it is never gated behind an in-view trigger.
  useEffect(() => {
    setEnabled(true);
  }, []);

  if (reduceMotion || !enabled) {
    return <div className={className}>{children}</div>;
  }

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
