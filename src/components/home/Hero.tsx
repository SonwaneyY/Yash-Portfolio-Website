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
  "Strategic Product Designer turning ambiguous problems into purposeful, scalable experiences.";
const REVEAL_DELAY_MS = 250; // sentence sits in grey, then the rest loads in

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<"load" | "reveal">(
    reduceMotion ? "reveal" : "load"
  );
  const [typedCount, setTypedCount] = useState(reduceMotion ? GREETING.length : 0);
  const [cursorOn, setCursorOn] = useState(true);

  const isReveal = phase === "reveal";
  const typingDone = typedCount >= GREETING.length;

  // After a brief hold, resolve the sentence and load the rest of the page in
  useEffect(() => {
    if (reduceMotion) return;
    const timer = setTimeout(() => setPhase("reveal"), REVEAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  // Type the greeting one char at a time once the reveal fires
  useEffect(() => {
    if (reduceMotion || !isReveal || typingDone) return;
    const t = setTimeout(() => setTypedCount((c) => c + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [reduceMotion, isReveal, typedCount, typingDone]);

  // Cursor blink — only while typing; period sits solid once done
  useEffect(() => {
    if (typingDone) {
      setCursorOn(true);
      return;
    }
    const t = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(t);
  }, [typingDone]);

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

          {/* Display statement — visible immediately in grey, resolves to primary on reveal */}
          <h1 className={styles.statement}>
            <span className={styles.statementPhrase} data-revealed={isReveal}>
              {STATEMENT}
            </span>
          </h1>

          {/* Subline */}
          <motion.p
            className={styles.subline}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            I&apos;m a full-stack designer with 7+ years of UX experience, a strategic practice, and an AI-native toolkit. I work end to end, from framing the problem to shipping the product.
          </motion.p>
        </Container>
      </div>

      {/* ---- TICKER — slides up from below ---- */}
      <motion.div
        className={styles.tickerContainer}
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={isReveal ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <Ticker />
      </motion.div>
    </section>
  );
}
