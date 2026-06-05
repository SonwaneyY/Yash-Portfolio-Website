"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./LoopRail.module.css";

type Stage = { name: string; targetId?: string; active?: boolean };

export default function LoopRail({
  label,
  heading,
  stages,
  caption,
}: {
  label?: string;
  heading?: string;
  stages: Stage[];
  caption?: string;
}) {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const [traveled, setTraveled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [released, setReleased] = useState(false);

  // Travel the dot once when the rail first enters view.
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setTraveled(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Follow scroll: light the stage whose target section is deepest in view.
  useEffect(() => {
    const targets = stages
      .map((s) => s.targetId)
      .filter((id): id is string => Boolean(id));
    if (targets.length === 0) return;

    const els = targets
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        }
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio >= bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        if (best) setActiveId(best);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -40% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [stages]);

  // Release stickiness once the last targeted stage scrolls above the rail.
  useEffect(() => {
    const ids = stages
      .map((s) => s.targetId)
      .filter((id): id is string => Boolean(id));
    const lastId = ids[ids.length - 1];
    const el = lastId ? document.getElementById(lastId) : null;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setReleased(!e.isIntersecting && e.boundingClientRect.top < 0),
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stages]);

  const handleJump = (targetId?: string) => {
    if (!targetId) return;
    document.getElementById(targetId)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <div
      className={styles.wrap}
      ref={railRef}
      style={released ? { position: "static" } : undefined}
    >
      {(label || heading) && (
        <div className={styles.head}>
          {label && <span className={styles.label}>{label}</span>}
          {heading && <h2 className={styles.heading}>{heading}</h2>}
        </div>
      )}

      <div
        className={styles.rail}
        role="list"
        style={{ gridTemplateColumns: `repeat(${Math.max(stages.length - 1, 1)}, 1fr) max-content` }}
      >
        <div className={styles.track} aria-hidden />
        <motion.div
          className={styles.progress}
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: traveled || reduce ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        {stages.map((s, i) => {
          const isTarget = activeId && s.targetId === activeId;
          const lit = isTarget || s.active;
          const clickable = Boolean(s.targetId);
          return (
            <button
              key={s.name}
              role="listitem"
              type="button"
              className={`${styles.node} ${lit ? styles.nodeLit : ""} ${clickable ? styles.nodeClickable : ""}`}
              onClick={() => handleJump(s.targetId)}
              disabled={!clickable}
              aria-current={isTarget ? "true" : undefined}
            >
              <motion.span
                className={styles.dot}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{
                  scale: traveled || reduce ? 1 : 0.6,
                  opacity: traveled || reduce ? 1 : 0,
                }}
                transition={{ delay: reduce ? 0 : 0.15 * i, duration: 0.4 }}
              />
              <span className={styles.nodeName}>{s.name}</span>
              <span className={styles.nodeIndex}>{String(i + 1).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
