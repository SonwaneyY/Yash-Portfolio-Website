"use client";

import { useMemo, useState } from "react";
import styles from "./RebalanceSandbox.module.css";

type Externality = { id: string; name: string; hint?: string };
type Output = {
  id: string;
  label: string;
  base: number;
  unit?: string;
  format?: "percent" | "number";
  sensitivities: Record<string, number>;
  goodDirection?: "up" | "down";
};

function formatValue(v: number, o: Output) {
  const rounded = o.format === "percent" ? v.toFixed(1) : v.toFixed(2);
  const unit = o.unit ?? (o.format === "percent" ? "%" : "");
  return `${rounded}${unit}`;
}

export default function RebalanceSandbox({
  label,
  heading,
  intro,
  externalities,
  outputs,
  cohortSize = 12,
  note,
}: {
  label?: string;
  heading: string;
  intro?: string;
  externalities: Externality[];
  outputs: Output[];
  cohortSize?: number;
  note?: string;
}) {
  // Slider state: 0..100 per externality, default 0 (calm market).
  const [levels, setLevels] = useState<Record<string, number>>(
    Object.fromEntries(externalities.map((e) => [e.id, 0]))
  );

  const stress = useMemo(() => {
    const total = externalities.reduce((sum, e) => sum + (levels[e.id] ?? 0), 0);
    return total / (externalities.length * 100); // 0..1
  }, [levels, externalities]);

  const computed = useMemo(() => {
    return outputs.map((o) => {
      const shift = externalities.reduce((acc, e) => {
        const norm = (levels[e.id] ?? 0) / 100;
        return acc + norm * (o.sensitivities[e.id] ?? 0);
      }, 0);
      const value = o.base + shift;
      const good = o.goodDirection ?? "up";
      // "alarmed" when value moves against the good direction
      const alarmed = good === "up" ? value < o.base : value > o.base;
      return { ...o, value, alarmed };
    });
  }, [levels, outputs, externalities]);

  // Cohort dots: deterministic per-client risk threshold, flips with stress.
  const cohort = useMemo(() => {
    return Array.from({ length: cohortSize }, (_, i) => {
      const threshold = (i + 0.5) / cohortSize; // evenly spread 0..1
      return stress > threshold;
    });
  }, [stress, cohortSize]);

  const atRisk = cohort.filter(Boolean).length;

  const reset = () =>
    setLevels(Object.fromEntries(externalities.map((e) => [e.id, 0])));

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        {label && <span className={styles.label}>{label}</span>}
        <h2 className={styles.heading}>{heading}</h2>
        {intro && <p className={styles.intro}>{intro}</p>}
      </div>

      <div className={styles.panel}>
        {/* Equalizer */}
        <div className={styles.eq}>
          <div className={styles.eqHead}>
            <span className={styles.panelTitle}>Inject externalities</span>
            <button type="button" className={styles.reset} onClick={reset}>
              Reset
            </button>
          </div>
          <div className={styles.sliders}>
            {externalities.map((e) => (
              <label key={e.id} className={styles.sliderRow}>
                <span className={styles.sliderName}>
                  {e.name}
                  {e.hint && <span className={styles.sliderHint}>{e.hint}</span>}
                </span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={levels[e.id] ?? 0}
                  onChange={(ev) =>
                    setLevels((prev) => ({ ...prev, [e.id]: Number(ev.target.value) }))
                  }
                  className={styles.slider}
                  aria-label={`${e.name} severity`}
                  style={{ "--fill": `${levels[e.id] ?? 0}%` } as React.CSSProperties}
                />
                <span className={styles.sliderVal}>{levels[e.id] ?? 0}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Live outputs */}
        <div className={styles.outputs}>
          <span className={styles.panelTitle}>Projected impact</span>
          <div className={styles.outGrid}>
            {computed.map((o) => (
              <div key={o.id} className={styles.outCard}>
                <span className={styles.outLabel}>{o.label}</span>
                <span className={`${styles.outValue} ${o.alarmed ? styles.outAlarmed : ""}`}>
                  {formatValue(o.value, o)}
                </span>
              </div>
            ))}
          </div>

          {/* Cohort strip */}
          <div className={styles.cohort}>
            <div className={styles.cohortHead}>
              <span className={styles.cohortLabel}>Book exposure</span>
              <span className={styles.cohortCount}>
                {atRisk}/{cohortSize} at risk
              </span>
            </div>
            <div className={styles.cohortDots} role="img" aria-label={`${atRisk} of ${cohortSize} clients exposed`}>
              {cohort.map((risk, i) => (
                <span key={i} className={`${styles.dot} ${risk ? styles.dotRisk : styles.dotSafe}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}
