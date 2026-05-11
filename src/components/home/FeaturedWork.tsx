"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories, type ProjectCategory } from "@/lib/data";
import styles from "./FeaturedWork.module.css";

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

  useEffect(() => {
    if (categoryParam && slugToCategory[categoryParam]) {
      setActive(slugToCategory[categoryParam]);
    }
  }, [categoryParam]);

  useEffect(() => {
    if (categoryParam && slugToCategory[categoryParam]) {
      const el = document.getElementById("work");
      if (el) {
        const timer = setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 3200);
        return () => clearTimeout(timer);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.filterCategory === active);

  const countFor = (cat: ProjectCategory) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.filterCategory === cat).length;

  return (
    <section id="work" className={styles.section}>
      <Container>
        {/* Section marker */}
        <h2 className={styles.sectionMarker}>
          <span className={styles.markerNum}>02 /</span>
          <span className={styles.markerLabel}>Selected Work</span>
        </h2>

        {/* Filter bar */}
        <div className={styles.filterBar} role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                aria-controls="project-list"
                className={styles.filterBtn}
                data-active={isActive}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Entry list */}
        <div
          id="project-list"
          role="tabpanel"
          aria-live="polite"
          aria-label={`${active} projects`}
          className={styles.entryList}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} {...project} index={i + 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
