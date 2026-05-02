"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./CaseStudyMobileNav.module.css";

interface NavItem {
  label: string;
  id: string;
}

interface Props {
  items: NavItem[];
  sectionsRef: React.RefObject<HTMLDivElement | null>;
}

export default function CaseStudyMobileNav({ items, sectionsRef }: Props) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const navRef = useRef<HTMLDivElement>(null);

  // Track active section via IntersectionObserver
  useEffect(() => {
    if (!sectionsRef.current || items.length === 0) return;

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items, sectionsRef]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (items.length === 0) return null;

  const activeItem = items.find((i) => i.id === activeId) ?? items[0];
  const activeIndex = items.findIndex((i) => i.id === activeId);

  return (
    <div className={styles.mobileNav} ref={navRef}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Toggle section navigation"
      >
        <span className={styles.progress}>
          {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <span className={styles.activeLabel}>{activeItem.label}</span>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`} aria-hidden="true">
          ↓
        </span>
      </button>

      {open && (
        <nav className={styles.dropdown} aria-label="Case study sections">
          {items.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.navLink} ${item.id === activeId ? styles.navLinkActive : ""}`}
              onClick={() => setOpen(false)}
            >
              <span className={styles.navIndex}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
