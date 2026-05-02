"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Ticker from "./Ticker";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const TANGLED_PATH =
  "M -140 0 C -180 -200 40 -200 -93 -80 C -200 40 -20 200 -47 60 C 80 -20 -100 -160 0 -70 C 100 -20 -80 180 47 60 C 180 160 80 -180 93 -50 C 120 -100 160 60 140 0";
const STRAIGHT_PATH =
  "M -140 0 C -126 0 -107 0 -93 0 C -79 0 -61 0 -47 0 C -33 0 -14 0 0 0 C 14 0 33 0 47 0 C 61 0 79 0 93 0 C 107 0 126 0 140 0";

const GREETING = "Hi, I'm Yash Sonwaney.";
const GREETING_BODY = GREETING.slice(0, -1); // without trailing period
const CHAR_DELAY = 82; // ms per character — slightly slower feels more intentional

export default function Hero() {
  const seen = typeof sessionStorage !== "undefined" && sessionStorage.getItem("intro-seen") === "1";
  const [phase, setPhase] = useState<"intro" | "reveal">(seen ? "reveal" : "intro");
  const [typedCount, setTypedCount] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  const isReveal = phase === "reveal";
  const typingDone = typedCount >= GREETING.length;

  useEffect(() => {
    if (seen) return;

    document.body.style.overflow = "hidden";
    document.body.classList.add("intro-active");

    const timer = setTimeout(() => {
      setPhase("reveal");
      document.body.style.overflow = "";
      document.body.classList.remove("intro-active");
      sessionStorage.setItem("intro-seen", "1");
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.body.classList.remove("intro-active");
    };
  }, []);

  // Type one character at a time after reveal
  useEffect(() => {
    if (!isReveal || typingDone) return;
    const t = setTimeout(() => setTypedCount((c) => c + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [isReveal, typedCount, typingDone]);

  // Blink the cursor (while typing) or the period (when done)
  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ---- INTRO OVERLAY — thin rule draws itself ---- */}
      <AnimatePresence>
        {!isReveal && (
          <motion.div
            className={styles.introOverlay}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <svg className={styles.introSvg} viewBox="-150 -100 300 200" fill="none">
              <motion.path
                variants={{
                  tangle: { d: TANGLED_PATH },
                  straight: { d: STRAIGHT_PATH },
                }}
                initial="tangle"
                animate="straight"
                transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
                stroke="var(--text-tertiary)"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- MAIN HERO ---- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
        <Container>
          {/* Typed greeting */}
          <div className={styles.greeting} aria-label={GREETING}>
            <span aria-hidden="true">
              {typingDone ? (
                <>
                  {GREETING_BODY}
                  <span className={styles.greetingPeriod} style={{ opacity: cursorOn ? 1 : 0 }}>.</span>
                </>
              ) : (
                <>
                  {GREETING.slice(0, typedCount)}
                  <span className={styles.greetingCursor} style={{ opacity: cursorOn ? 1 : 0 }}>|</span>
                </>
              )}
            </span>
          </div>

          {/* Display statement */}
          <motion.h1
            className={styles.statement}
            initial={{ opacity: 0, y: 24 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
          >
            A strategic design generalist bridging business strategy, systems thinking, and emerging technology.
          </motion.h1>

          {/* Subline */}
          <motion.p
            className={styles.subline}
            initial={{ opacity: 0, y: 16 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
          >
            Senior product designer operating between enterprise tools, service ecosystems, and AI-native workflows.
          </motion.p>

        </Container>
        </div>

        {/* ---- TICKER — pinned to bottom ---- */}
        <motion.div
          className={styles.tickerContainer}
          initial={{ opacity: 0 }}
          animate={isReveal ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.8 }}
        >
          <Ticker />
        </motion.div>
      </section>
    </>
  );
}
