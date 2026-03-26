"use client";

import styles from "./Ticker.module.css";
import { testimonials } from "@/lib/data";

function Dot() {
  return <span className={styles.dot} aria-hidden="true" />;
}

function TickerItems() {
  return (
    <>
      {testimonials.map((t, i) => (
        <span key={i} className={styles.item}>
          <span className={styles.quote}>"{t.quote}"</span>
        </span>
      ))}
      <Dot />
    </>
  );
}

export default function Ticker() {
  return (
    <div className={styles.ticker} aria-label="Testimonials">
      <div className={styles.track}>
        <div className={styles.inner}>
          <TickerItems />
        </div>
        <div className={styles.inner} aria-hidden="true">
          <TickerItems />
        </div>
      </div>
    </div>
  );
}
