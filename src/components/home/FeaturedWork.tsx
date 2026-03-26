"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories, type ProjectCategory } from "@/lib/data";
import styles from "./FeaturedWork.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

/** Maps URL slug → category name */
const slugToCategory: Record<string, ProjectCategory> = {
  "product-design": "Product Design",
  "strategy": "Strategy",
  "research": "Research",
};

export default function FeaturedWork() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const initialCategory: ProjectCategory =
    (categoryParam && slugToCategory[categoryParam]) || "All";

  const [active, setActive] = useState<ProjectCategory>(initialCategory);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Sync with URL param changes
  useEffect(() => {
    if (categoryParam && slugToCategory[categoryParam]) {
      setActive(slugToCategory[categoryParam]);
    }
  }, [categoryParam]);

  // Auto-scroll to work section when arriving via category link
  useEffect(() => {
    if (categoryParam && slugToCategory[categoryParam] && sectionRef.current) {
      // Small delay to let intro animation finish
      const timer = setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.filterCategory === active);

  // Update underline indicator position
  useEffect(() => {
    if (!tabsRef.current) return;
    const activeTab = tabsRef.current.querySelector(
      `[data-active="true"]`
    ) as HTMLButtonElement | null;
    if (activeTab) {
      const parentRect = tabsRef.current.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      setIndicatorStyle({
        left: tabRect.left - parentRect.left,
        width: tabRect.width,
      });
    }
  }, [active]);

  return (
    <section id="work" ref={sectionRef} className={styles.section}>
      <Container>
        {/* Category tabs */}
        <div className={styles.tabBar} ref={tabsRef} role="tablist">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              data-active={active === cat}
              className={active === cat ? styles.tabActive : styles.tab}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
          <motion.div
            className={styles.tabIndicator}
            animate={indicatorStyle}
            transition={{ duration: 0.35, ease }}
          />
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.grid}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease, delay: i * 0.05 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
