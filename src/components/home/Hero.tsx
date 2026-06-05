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

// Choreography (matches Figma proto): black → statement fades into grey → full page + statement resolves to white
const STATEMENT_IN_MS = 160; // brief beat of black, then the sentence eases in (grey)
const REVEAL_DELAY_MS = 950; // sentence holds in grey, then the rest loads in and it brightens

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
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={showStatement ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: easeOut }}
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
            I&apos;m a full-stack designer with 7+ years of UX experience, a strategic practice, and an AI-native toolkit. I work end to end, from framing the problem to shipping the product.
          </motion.p>
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
