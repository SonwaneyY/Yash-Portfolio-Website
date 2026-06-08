"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { textRevealWord, viewportOnce } from "@/lib/animations";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  /** "word" = word-by-word, "char" = character-by-character */
  split?: "word" | "char";
}

export default function TextReveal({
  children,
  className = "",
  as: Tag = "h1",
  delay = 0,
  split = "word",
}: TextRevealProps) {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  // SSR / no-JS / reduced motion: render the text statically and visibly.
  // No mask, no opacity gate, no rotateX 3D spin.
  useEffect(() => {
    setEnabled(true);
  }, []);

  if (reduceMotion || !enabled) {
    return <Tag className={className}>{children}</Tag>;
  }

  if (split === "char") {
    // Character-by-character split — more dramatic for hero headings
    const words = children.split(" ");

    return (
      <Tag className={className}>
        <motion.span
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.025,
                delayChildren: delay,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ display: "flex", flexWrap: "wrap", gap: "0 0.3em" }}
        >
          {words.map((word, wi) => (
            <span key={wi} style={{ display: "inline-flex", overflow: "hidden" }}>
              {word.split("").map((char, ci) => (
                <motion.span
                  key={ci}
                  variants={{
                    hidden: { y: "110%", opacity: 0, rotateX: -80 },
                    visible: {
                      y: "0%",
                      opacity: 1,
                      rotateX: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1] as const,
                      },
                    },
                  }}
                  style={{
                    display: "inline-block",
                    transformOrigin: "bottom",
                    willChange: "transform",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.span>
      </Tag>
    );
  }

  // Word-by-word split — default for section headers
  const words = children.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.04,
              delayChildren: delay,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        style={{ display: "flex", flexWrap: "wrap", gap: "0 0.3em" }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{ overflow: "hidden", display: "inline-block" }}
          >
            <motion.span
              variants={textRevealWord}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
