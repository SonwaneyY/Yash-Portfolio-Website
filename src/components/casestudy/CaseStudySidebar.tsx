"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./CaseStudySidebar.module.css";

interface NavItem {
  label: string;
  id: string;
}

interface CaseStudySidebarProps {
  items: NavItem[];
  sectionsRef?: React.RefObject<HTMLDivElement | null>;
}

export default function CaseStudySidebar({ items, sectionsRef }: CaseStudySidebarProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const sidebarRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Active section tracking
  useEffect(() => {
    if (items.length === 0) return;

    const headingElements = items.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    headingElements.forEach((el) => observerRef.current!.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [items]);

  // Visibility + dynamic top: direct DOM writes, zero re-renders on scroll
  useEffect(() => {
    const contentEl = sectionsRef?.current;
    const sidebar = sidebarRef.current;
    if (!contentEl || !sidebar) return;

    const update = () => {
      const rect = contentEl.getBoundingClientRect();
      const shouldShow = rect.top <= window.innerHeight * 0.6 && rect.bottom > 100;
      const top = Math.max(80, Math.min(Math.round(rect.top), 160));
      sidebar.style.top = `${top}px`;
      sidebar.style.opacity = shouldShow ? "1" : "0";
      sidebar.style.pointerEvents = shouldShow ? "auto" : "none";
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionsRef]);

  return (
    <aside ref={sidebarRef} className={styles.sidebar}>
      <Link href="/" className={styles.backLink}>
        <span className={styles.backArrow}>←</span>
        <span>Back</span>
      </Link>

      <nav className={styles.nav} aria-label="Case study sections">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${styles.navItem} ${activeId === item.id ? styles.navItemActive : ""}`}
            aria-current={activeId === item.id ? "true" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
