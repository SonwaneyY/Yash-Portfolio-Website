"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import { siteConfig, experience } from "@/lib/data";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [phase, setPhase] = useState<"intro" | "reveal">("intro");

  // Scroll-based name fade out
  const { scrollY } = useScroll();
  const nameOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    // Lock scroll during intro
    document.body.style.overflow = "hidden";
    document.body.classList.add("intro-active");

    const timer = setTimeout(() => {
      setPhase("reveal");
      document.body.style.overflow = "";
      document.body.classList.remove("intro-active");
    }, 2800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.body.classList.remove("intro-active");
    };
  }, []);

  const isReveal = phase === "reveal";

  return (
    <>
      {/* ---- FULL-SCREEN OVERLAY — covers everything during intro ---- */}
      <AnimatePresence>
        {!isReveal && (
          <motion.div
            className={styles.introOverlay}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            {/* Role label — above progress bar */}
            <div className={styles.introCenter}>
              {/* Progress bar */}
              <motion.div
                className={styles.progressWrapper}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease, delay: 0.25 }}
              >
                <div className={styles.progressTrack}>
                  <motion.div
                    className={styles.progressBar}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- MAIN HERO ---- */}
      <section className={styles.hero}>
        {/* Geometric arc */}
        <motion.div
          className={styles.geometricArc}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isReveal ? { scale: 1, opacity: 0.4 } : {}}
          transition={{ duration: 1.5, ease }}
        />

        {/* Center content — only visible after reveal */}
        <div className={styles.centerContent}>
          <motion.span
            className={styles.roleLabel}
            initial={{ opacity: 0, y: 12 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            Product Designer & Strategist
          </motion.span>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
          >
            I design enterprise tools and AI-native
            workflows that feel simple on the surface
            — and smart underneath.
          </motion.h1>

          <motion.div
            className={styles.belowHeadline}
            initial={{ opacity: 0, y: 16 }}
            animate={isReveal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
          >
            <p className={styles.bio}>
              7+ years at HP, Accenture, and Parsons — bridging research,
              strategy, and craft. Currently exploring how AI reshapes the
              way we design and decide.
            </p>

            <div className={styles.ctaGroup}>
              <a href="#work" className={styles.ctaPrimary}>
                <span>See my work</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href={`mailto:${siteConfig.email}`} className={styles.ctaSecondary}>
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Name — slides up, fades to watermark, vanishes on scroll */}
        <motion.div
          className={`${styles.nameBlock} ${isReveal ? styles.nameBlockRevealed : ''}`}
          style={isReveal ? { opacity: nameOpacity } : undefined}
        >
          <Container>
            <motion.div
              className={styles.nameInner}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.1 }}
            >
              <motion.span
                className={styles.nameFirst}
                animate={{ opacity: isReveal ? 0.08 : 1 }}
                transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
              >
                Yash
              </motion.span>
              <motion.span
                className={styles.nameLast}
                animate={{ opacity: isReveal ? 0.12 : 1 }}
                transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
              >
                Sonwaney
              </motion.span>
            </motion.div>
          </Container>
        </motion.div>
      </section>

      {/* Experience strip */}
      <section className={styles.experienceStrip}>
        <Container>
          <motion.div
            className={styles.experienceGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
          >
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className={styles.experienceItem}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
              >
                <div className={styles.experienceLogo}>
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className={styles.logoImg}
                  />
                </div>
                <div className={styles.experienceText}>
                  <span className={styles.experienceCompany}>{exp.company}</span>
                  <span className={styles.experienceRole}>{exp.role}</span>
                  <span className={styles.experienceYear}>{exp.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
