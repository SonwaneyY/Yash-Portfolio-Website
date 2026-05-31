"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Ticker from "./Ticker";
import styles from "./Hero.module.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

const GREETING = "Hi, I'm Yash Sonwaney.";
const GREETING_BODY = GREETING.slice(0, -1);
const CHAR_DELAY = 70; // ms per character

const PHRASE_DURATION = 0.55;
const PHRASE_STAGGER = 0.3; // gap between each phrase entrance
const PHRASE_COUNT = 3;
const HOLD_AFTER_WORDS_MS = 600; // hold after last phrase lands before sentence resolves
const REVEAL_DELAY_MS =
  (PHRASE_STAGGER * (PHRASE_COUNT - 1) + PHRASE_DURATION) * 1000 + HOLD_AFTER_WORDS_MS;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<"words" | "reveal">(
    reduceMotion ? "reveal" : "words"
  );
  const [typedCount, setTypedCount] = useState(reduceMotion ? GREETING.length : 0);
  const [cursorOn, setCursorOn] = useState(true);

  const isReveal = phase === "reveal";
  const typingDone = typedCount >= GREETING.length;

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setTimeout(() => setPhase("reveal"), REVEAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  // Type one char at a time once reveal phase fires (slight delay for greeting fade-in)
  useEffect(() => {
    if (reduceMotion || !isReveal || typingDone) return;
    const t = setTimeout(() => setTypedCount((c) => c + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [reduceMotion, isReveal, typedCount, typingDone]);

  // Cursor / period blink
  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  const phraseInitial = reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 };
  const phraseAnimate = { opacity: 1, y: 0, scale: 1 };
  const phraseTransition = (delay: number) => ({
    duration: PHRASE_DURATION,
    ease: easeOut,
    delay,
  });

  const connectorInitial = reduceMotion ? false : { opacity: 0 };
  const connectorAnimate = isReveal ? { opacity: 1 } : {};
  const connectorTransition = { duration: 0.5, ease: easeOut };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <Container>
          {/* Greeting — hidden during phase 1, fades in with sentence resolve */}
          <motion.div
            className={styles.greeting}
            aria-label={GREETING}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.05 }}
          >
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
          </motion.div>

          {/* Display statement — phrases enter one by one, then sentence resolves */}
          <h1 className={styles.statement}>
            <motion.span
              className={styles.statementPhrase}
              data-revealed={isReveal}
              initial={phraseInitial}
              animate={phraseAnimate}
              transition={phraseTransition(0)}
            >
              Strategic Product Designer
            </motion.span>
            <motion.span
              className={styles.statementConnector}
              initial={connectorInitial}
              animate={connectorAnimate}
              transition={connectorTransition}
            >
              {" "}helping organizations turn{" "}
            </motion.span>
            <motion.span
              className={styles.statementPhrase}
              data-revealed={isReveal}
              initial={phraseInitial}
              animate={phraseAnimate}
              transition={phraseTransition(PHRASE_STAGGER)}
            >
              ambiguous problems
            </motion.span>
            <motion.span
              className={styles.statementConnector}
              initial={connectorInitial}
              animate={connectorAnimate}
              transition={connectorTransition}
            >
              {" "}into{" "}
            </motion.span>
            <motion.span
              className={styles.statementPhrase}
              data-revealed={isReveal}
              initial={phraseInitial}
              animate={phraseAnimate}
              transition={phraseTransition(PHRASE_STAGGER * 2)}
            >
              purposeful, scalable experiences
            </motion.span>
            <motion.span
              className={styles.statementConnector}
              initial={connectorInitial}
              animate={connectorAnimate}
              transition={connectorTransition}
            >
              .
            </motion.span>
          </h1>

          {/* Subline — scope: full-stack, generalist, global shipping */}
          <motion.p
            className={styles.subline}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.35 }}
          >
            As a full-stack designer, I combine 7+ years of UX design experience, a strategic design practice, and an AI-native toolkit to operate end to end, from problem framing to shipped product, with a strong product sense.
          </motion.p>
        </Container>
      </div>

      {/* ---- TICKER — slides up from below ---- */}
      <motion.div
        className={styles.tickerContainer}
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={isReveal ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
      >
        <Ticker />
      </motion.div>
    </section>
  );
}
