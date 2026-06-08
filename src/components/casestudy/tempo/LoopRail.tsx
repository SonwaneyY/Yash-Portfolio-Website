"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./LoopRail.module.css";

type Stage = { name: string; targetId?: string; active?: boolean };
type Marker = { id: string; stage: string };

export default function LoopRail({
  label,
  heading,
  stages,
  caption,
  markers,
}: {
  label?: string;
  heading?: string;
  stages: Stage[];
  caption?: string;
  markers?: Marker[];
}) {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const [traveled, setTraveled] = useState(false);
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const [released, setReleased] = useState(false);
  const [progressW, setProgressW] = useState(0);
  const [trackW, setTrackW] = useState(0);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // All scroll markers the rail follows: stage targets + extra (feature) markers.
  const watch: Marker[] = [
    ...stages
      .filter((s): s is Stage & { targetId: string } => Boolean(s.targetId))
      .map((s) => ({ id: s.targetId, stage: s.name })),
    ...(markers ?? []),
  ];
  const watchKey = watch.map((w) => `${w.id}:${w.stage}`).join("|");

  // Travel the dots once when the rail first enters view.
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

  // Scroll-driven: light the active stage and fill the progress bar continuously.
  useEffect(() => {
    if (watch.length === 0) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.4; // reference line in the viewport
      let active: string | null = null;
      let lastBottom: number | null = null;

      for (const w of watch) {
        const el = document.getElementById(w.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        lastBottom = r.bottom;
        if (r.top <= line) active = w.stage;
      }

      setActiveStage(active);
      if (lastBottom !== null) setReleased(lastBottom < 96);

      const dotHalf = 5.5; // half the 11px dot
      const lastNode = nodeRefs.current[stages.length - 1];
      if (lastNode) setTrackW(lastNode.offsetLeft + dotHalf);
      const idx = active ? stages.findIndex((s) => s.name === active) : -1;
      const activeNode = idx >= 0 ? nodeRefs.current[idx] : null;
      setProgressW(activeNode ? activeNode.offsetLeft + dotHalf : 0);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchKey]);

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
        <div className={styles.track} style={{ width: trackW || undefined }} aria-hidden />
        <div className={styles.progress} style={{ width: progressW }} aria-hidden />
        {stages.map((s, i) => {
          const isActive = activeStage === s.name;
          const lit = isActive || s.active;
          const clickable = Boolean(s.targetId);
          return (
            <button
              key={s.name}
              ref={(el) => { nodeRefs.current[i] = el; }}
              role="listitem"
              type="button"
              className={`${styles.node} ${lit ? styles.nodeLit : ""} ${clickable ? styles.nodeClickable : ""}`}
              onClick={() => handleJump(s.targetId)}
              disabled={!clickable}
              aria-current={isActive ? "true" : undefined}
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
