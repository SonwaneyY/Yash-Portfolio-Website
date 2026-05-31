"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  slug: string;
  title: string;
  cardTitle?: string;
  subtitle: string;
  category: string;
  year?: string;
  cardBg?: string;
  cardTextColor?: "light" | "dark";
  coverImage: string;
  index?: number;
  imageConfig?: {
    fit: "cover" | "contain";
    position: string;
    bg?: string;
  };
}

export default function ProjectCard({
  slug,
  title,
  cardTitle,
  category,
  year,
  cardBg,
  coverImage,
  index = 1,
  imageConfig = { fit: "cover", position: "center center" },
}: ProjectCardProps) {
  const thumbBg = imageConfig.bg || cardBg || "var(--bg-secondary)";
  const num = String(index).padStart(2, "0");
  const displayTitle = cardTitle || title;
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      // Clip-path wipe from left + fade
      gsap.fromTo(
        cardRef.current!,
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 0.8,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Link href={`/work/${slug}`} className={styles.entry} ref={cardRef} data-project-card>
      <span className={styles.index}>{num} /</span>

      <div className={styles.body}>
        <h3 className={styles.title}>{displayTitle}</h3>
        <span className={styles.meta}>
          {category}{year ? ` · ${year}` : ""}
        </span>
      </div>

      <span className={styles.arrow}>→</span>

      <div className={styles.thumbnail} style={{ background: thumbBg }}>
        <Image
          src={coverImage}
          alt={displayTitle}
          fill
          sizes="240px"
          style={{
            objectFit: imageConfig.fit,
            objectPosition: imageConfig.position,
          }}
        />
      </div>
    </Link>
  );
}
