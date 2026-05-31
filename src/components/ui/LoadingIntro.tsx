"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import styles from "./LoadingIntro.module.css";

interface LoadingIntroProps {
  onComplete: () => void;
}

export default function LoadingIntro({ onComplete }: LoadingIntroProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLSpanElement>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);
  const [skipMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (skipMotion) {
      onComplete();
      return;
    }

    // Strict mode guard — only run once
    if (hasRun.current) return;
    hasRun.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Phase 1: Monogram fades in with 3D rotation
    tl.fromTo(
      monogramRef.current,
      { opacity: 0, scale: 0.6, rotationY: -90 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.7,
        ease: "power3.out",
      }
    );

    // Phase 2: Accent lines extend outward from monogram
    tl.fromTo(
      lineLeftRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.5, ease: "power4.inOut" },
      "-=0.2"
    );
    tl.fromTo(
      lineRightRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.5, ease: "power4.inOut" },
      "<"
    );

    // Phase 3: Tagline fades in below
    tl.fromTo(
      taglineRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.1"
    );

    // Phase 4: Brief hold — let it breathe
    tl.to({}, { duration: 0.6 });

    // Phase 5: Everything scales down + fades
    tl.to(
      [monogramRef.current, lineLeftRef.current, lineRightRef.current, taglineRef.current],
      {
        opacity: 0,
        scale: 0.85,
        y: -30,
        duration: 0.45,
        ease: "power3.in",
        stagger: 0.04,
      }
    );

    // Phase 6: Overlay wipes up to reveal content
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.7,
      ease: "power4.inOut",
    });

    // No cleanup — we want the timeline to finish even if strict mode re-runs the effect
    // The hasRun guard prevents double execution
  }, [skipMotion, onComplete]);

  if (skipMotion) return null;

  return (
    <div className={styles.overlay} ref={overlayRef}>
      <div className={styles.center}>
        <div className={styles.lineRow}>
          <div className={styles.lineLeft} ref={lineLeftRef} />
          <span className={styles.monogram} ref={monogramRef}>
            Yash Sonwaney
          </span>
          <div className={styles.lineRight} ref={lineRightRef} />
        </div>
        <span className={styles.tagline} ref={taglineRef}>
          Design · Strategy · Systems
        </span>
      </div>
    </div>
  );
}
