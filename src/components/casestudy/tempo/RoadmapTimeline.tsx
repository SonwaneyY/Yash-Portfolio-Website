"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import styles from "./RoadmapTimeline.module.css";

type Item = { num: string; label: string; body?: string };

export default function RoadmapTimeline({
  label,
  title,
  items,
}: {
  label?: string;
  title?: string;
  items: Item[];
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 35%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className={styles.wrap} ref={ref}>
      <div className={styles.head}>
        {label && <span className={styles.label}>{label}</span>}
        {title && <h2 className={styles.title}>{title}</h2>}
      </div>

      <div className={styles.track}>
        <div className={styles.line} aria-hidden />
        <motion.div
          className={styles.lineFill}
          aria-hidden
          style={{ width: reduce ? "100%" : fill }}
        />
        <div className={styles.phases}>
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              className={styles.phase}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: reduce ? 0 : 0.08 * i, duration: 0.5 }}
            >
              <span className={styles.node} aria-hidden />
              <span className={styles.num}>{item.num}</span>
              <span className={styles.label2}>{item.label}</span>
              {item.body && <p className={styles.body}>{item.body}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
