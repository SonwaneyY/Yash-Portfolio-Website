"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./MorningTriage.module.css";

type Card = {
  client: string;
  signal: string;
  delta?: string;
  urgency?: "high" | "med" | "low";
};

export default function MorningTriage({
  label,
  heading,
  intro,
  noise,
  cards,
  note,
}: {
  label?: string;
  heading: string;
  intro?: string;
  noise: string[];
  cards: Card[];
  note?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setFiltered(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const showSignal = Boolean(filtered || reduce);

  return (
    <div className={styles.wrap} ref={ref}>
      <div className={styles.head}>
        {label && <span className={styles.label}>{label}</span>}
        <h2 className={styles.heading}>{heading}</h2>
        {intro && <p className={styles.intro}>{intro}</p>}
      </div>

      <div className={styles.stage}>
        <div className={styles.stageHead}>
          <span className={styles.stageTitle}>The raw feed</span>
          <motion.span
            className={styles.arrow}
            animate={{ opacity: showSignal ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
          >
            filtered to signal
          </motion.span>
          <span className={styles.stageTitleStrong}>Today&rsquo;s priorities</span>
        </div>

        <div className={styles.columns}>
          {/* Noise column — recedes once filtered */}
          <motion.div
            className={styles.noise}
            animate={{ opacity: showSignal ? 0.32 : 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-hidden={showSignal || undefined}
          >
            {noise.map((n, i) => (
              <span key={i} className={styles.noiseChip}>
                {n}
              </span>
            ))}
          </motion.div>

          {/* Signal column — client cards rank up */}
          <div className={styles.signal}>
            {cards.map((c, i) => (
              <motion.div
                key={c.client}
                className={`${styles.card} ${styles[`u_${c.urgency || "med"}`]}`}
                initial={{ opacity: 0, y: 16 }}
                animate={
                  showSignal
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{
                  delay: reduce ? 0 : 0.12 * i,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className={styles.cardRank}>{String(i + 1).padStart(2, "0")}</span>
                <div className={styles.cardBody}>
                  <span className={styles.cardClient}>{c.client}</span>
                  <span className={styles.cardSignal}>{c.signal}</span>
                </div>
                {c.delta && <span className={styles.cardDelta}>{c.delta}</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}
