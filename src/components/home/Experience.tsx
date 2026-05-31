"use client";

import { useRef, useEffect } from "react";
import Container from "@/components/ui/Container";
import { experience } from "@/lib/data";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import styles from "./Experience.module.css";

export default function Experience() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const items = gridRef.current!.querySelectorAll("[data-exp-item]");
      const logos = gridRef.current!.querySelectorAll("[data-exp-logo]");
      const texts = gridRef.current!.querySelectorAll("[data-exp-text]");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // Logos: elastic bounce from scale(0)
      tl.from(logos, {
        scale: 0,
        rotation: -45,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "elastic.out(1, 0.5)",
      });

      // Text: slide in from right, staggered with logos
      tl.from(
        texts,
        {
          x: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.experienceStrip}>
      <Container>
        <div className={styles.experienceGrid} ref={gridRef}>
          {experience.map((exp, i) => (
            <div key={i} className={styles.experienceItem} data-exp-item>
              <div className={styles.experienceLogo} data-exp-logo>
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.experienceText} data-exp-text>
                <span className={styles.experienceCompany}>{exp.company}</span>
                <span className={styles.experienceRole}>{exp.role}</span>
                <span className={styles.experienceYear}>{exp.year}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
