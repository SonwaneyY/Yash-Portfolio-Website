"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories, type ProjectCategory } from "@/lib/data";
import { gsap, ScrollTrigger } from "@/lib/gsap";
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
  const sectionRef = useRef<HTMLElement>(null);
  const markerRef = useRef<HTMLHeadingElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

  // GSAP scroll animations
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Section marker slide-in
      if (markerRef.current) {
        gsap.from(markerRef.current, {
          opacity: 0,
          x: -24,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: markerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }

      // Filter bar fade in
      if (filterRef.current) {
        gsap.from(filterRef.current.children, {
          opacity: 0,
          y: 12,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: filterRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate project cards on filter change — clip-path wipe
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!listRef.current) return;

    const cards = listRef.current.querySelectorAll("[data-project-card]");
    if (cards.length === 0) return;

    gsap.fromTo(
      cards,
      { clipPath: "inset(0 100% 0 0)", opacity: 0 },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power4.inOut",
        clearProps: "clipPath",
      }
    );
  }, [active]);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.filterCategory === active);

  const countFor = (cat: ProjectCategory) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.filterCategory === cat).length;

  return (
    <section id="work" className={styles.section} ref={sectionRef}>
      <Container>
        <h2 className={styles.sectionMarker} ref={markerRef}>
          <span className={styles.markerNum}>02 /</span>
          <span className={styles.markerLabel}>Selected Work</span>
        </h2>
      </Container>

      <div className={styles.filterBar} role="tablist" aria-label="Filter projects by category">
        <div className={styles.filterBarInner} ref={filterRef}>
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
      </div>

      <Container>
        <div
          id="project-list"
          role="tabpanel"
          aria-live="polite"
          aria-label={`${active} projects`}
          className={styles.entryList}
          ref={listRef}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} {...project} index={i + 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
