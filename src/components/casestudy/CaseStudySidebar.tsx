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
}

export default function CaseStudySidebar({ items }: CaseStudySidebarProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className={styles.sidebar}>
      <Link href="/" className={styles.backLink}>
        <span className={styles.backArrow}>←</span>
        <span>Back</span>
      </Link>

      <nav className={styles.nav}>
        {items.map((item) => (
          <button
            key={item.id}
            className={`${styles.navItem} ${activeId === item.id ? styles.navItemActive : ""}`}
            onClick={() => handleClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
