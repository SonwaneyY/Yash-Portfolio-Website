"use client";

import { useRef, useEffect } from "react";
import Container from "@/components/ui/Container";
import { skillCategories } from "@/lib/data";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import styles from "./Skills.module.css";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header — slide in from left
      const header = sectionRef.current!.querySelector("[data-skills-header]");
      if (header) {
        gsap.from(header, {
          opacity: 0,
          x: -30,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }

      // Each column: label slides in, then the serif list fades up
      const categories = sectionRef.current!.querySelectorAll("[data-skill-category]");
      categories.forEach((cat) => {
        const label = cat.querySelector("[data-category-label]");
        const list = cat.querySelector("[data-skill-list]");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cat,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });

        if (label) {
          tl.from(label, {
            opacity: 0,
            x: -16,
            duration: 0.4,
            ease: "power2.out",
          });
        }

        if (list) {
          tl.from(
            list,
            {
              opacity: 0,
              y: 12,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.2"
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <Container>
        <span className={styles.header} data-skills-header>Capabilities</span>

        <div className={styles.categories}>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className={styles.category} data-skill-category>
              <span className={styles.categoryLabel} data-category-label>{category}</span>
              <p className={styles.skillList} data-skill-list>
                {skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
