"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import { testimonials } from "@/lib/data";
import styles from "./Testimonials.module.css";

const quoteVariants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3 } },
};

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);

  // Measure tallest testimonial to prevent layout shift
  useEffect(() => {
    if (!measureRef.current) return;
    const items = measureRef.current.children;
    let tallest = 0;
    for (let i = 0; i < items.length; i++) {
      tallest = Math.max(tallest, (items[i] as HTMLElement).offsetHeight);
    }
    setMaxHeight(tallest);

    const handleResize = () => {
      let t = 0;
      for (let i = 0; i < items.length; i++) {
        t = Math.max(t, (items[i] as HTMLElement).offsetHeight);
      }
      setMaxHeight(t);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const current = testimonials[active];

  return (
    <section
      className={styles.section}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        {/* Hidden measurer — renders all testimonials to find tallest */}
        <div ref={measureRef} className={styles.measurer} aria-hidden="true">
          {testimonials.map((t, i) => (
            <div key={i} className={styles.quoteWrapper}>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <span className={styles.attribution}>
                &mdash; {t.name}, {t.title}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.inner}>
          <div
            className={styles.quoteArea}
            style={maxHeight ? { minHeight: maxHeight } : undefined}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className={styles.quoteWrapper}
                variants={quoteVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <p className={styles.quote}>&ldquo;{current.quote}&rdquo;</p>
                <span className={styles.attribution}>
                  &mdash; {current.name}, {current.title}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={clsx(styles.dot, i === active && styles.dotActive)}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
