"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Ticker from "./Ticker";
import styles from "./Hero.module.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

const GREETING = "Hi, I'm Yash Sonwaney.";
const GREETING_BODY = GREETING.slice(0, -1);
const CHAR_DELAY = 45; // ms per character

const STATEMENT =
  "Strategic Product Designer building products and experiences that serve the user and the business in equal measure.";

// Choreography (matches Figma proto): black → statement fades into grey → full page + statement resolves to white
const STATEMENT_IN_MS = 120; // brief beat of black, then the sentence eases in (grey)
const REVEAL_DELAY_MS = 420; // sentence holds in grey, then the rest loads in and it brightens

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<"load" | "statement" | "reveal">(
    reduceMotion ? "reveal" : "load"
  );
  const [typedCount, setTypedCount] = useState(reduceMotion ? GREETING.length : 0);
  const [cursorOn, setCursorOn] = useState(true);

  const isReveal = phase === "reveal";
  const showStatement = phase !== "load";
  const typingDone = typedCount >= GREETING.length;

  // Signal the Header (and any other beat-2 listeners) to slide in with the reveal
  useEffect(() => {
    if (!isReveal || typeof window === "undefined") return;
    window.dispatchEvent(new Event("hero-reveal"));
  }, [isReveal]);

  // Beat 1: ease the statement in (grey). Beat 2: resolve everything else.
  useEffect(() => {
    if (reduceMotion) return;
    const t1 = setTimeout(() => setPhase("statement"), STATEMENT_IN_MS);
    const t2 = setTimeout(() => setPhase("reveal"), REVEAL_DELAY_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduceMotion]);

  // Type the greeting one char at a time once the reveal fires
  useEffect(() => {
    if (reduceMotion || !isReveal || typingDone) return;
    const t = setTimeout(() => setTypedCount((c) => c + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [reduceMotion, isReveal, typedCount, typingDone]);

  // Cursor blink — keeps blinking after typing so the period pulses too
  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <Container>
          {/* Greeting — hidden on load, fades in with the reveal */}
          <motion.div
            className={styles.greeting}
            aria-label={GREETING}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easeOut }}
          >{/* greeting leads the reveal at delay 0 */}
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

          {/* Display statement — eases in (grey) on beat 1, resolves to primary on beat 2 */}
          <motion.h1
            className={styles.statement}
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            animate={showStatement ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <span className={styles.statementPhrase} data-revealed={isReveal}>
              {STATEMENT}
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            className={styles.subline}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.08 }}
          >
            Full-stack designer with 7 years of experience shipping consumer product UX at HP and complex enterprise tools at Accenture, now working with an AI-native toolkit to take organizations from 0 to 1 in their product strategy.
          </motion.p>

          {/* Available for work pill */}
          <motion.div
            className={styles.statusPill}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.12 }}
          >
            <span className={styles.statusPillInner}>
              <span className={styles.statusPillDot} aria-hidden="true" />
              Available for Work
            </span>
          </motion.div>
        </Container>
      </div>

      {/* ---- TICKER — slides up from below ---- */}
      <motion.div
        className={styles.tickerContainer}
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={isReveal ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.16 }}
      >
        <Ticker />
      </motion.div>
    </section>
  );
}
