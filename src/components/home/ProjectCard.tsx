"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
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
  cardVideo?: string;
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
  subtitle,
  category,
  year,
  cardBg,
  coverImage,
  cardVideo,
  index = 1,
  imageConfig = { fit: "cover", position: "center center" },
}: ProjectCardProps) {
  const thumbBg = "var(--card-grey)";
  const num = String(index).padStart(2, "0");
  const displayTitle = cardTitle || title;
  const cardRef = useRef<HTMLAnchorElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!cardRef.current) return;

    const card = cardRef.current;
    const cover = coverRef.current;

    const ctx = gsap.context(() => {
      // Entrance: simple smooth fade
      gsap.from(card, {
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    // Hover: parallax the cover image opposite to cursor
    let xTo: ((v: number) => void) | null = null;
    let yTo: ((v: number) => void) | null = null;
    if (cover) {
      xTo = gsap.quickTo(cover, "x", { duration: 0.6, ease: "power3" });
      yTo = gsap.quickTo(cover, "y", { duration: 0.6, ease: "power3" });
    }

    const onEnter = () => {
      if (cover) gsap.to(cover, { scale: 1.06, duration: 0.6, ease: "power3" });
    };
    const onMove = (e: MouseEvent) => {
      if (!xTo || !yTo) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5; // -0.5..0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      xTo(-px * 24); // opposite drift, ~12px each way
      yTo(-py * 24);
    };
    const onLeave = () => {
      if (cover) gsap.to(cover, { x: 0, y: 0, scale: 1, duration: 0.6, ease: "power3" });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
      ctx.revert();
    };
  }, [index]);

  return (
    <Link href={`/work/${slug}`} className={styles.card} ref={cardRef} data-project-card>
      <div className={styles.media} style={{ background: thumbBg }}>
        <div className={styles.cover} ref={coverRef}>
          {cardVideo ? (
            <video
              className={styles.coverMedia}
              autoPlay
              muted
              loop
              playsInline
              poster={coverImage}
              style={{
                objectFit: imageConfig.fit,
                objectPosition: imageConfig.position,
              }}
            >
              <source src={cardVideo} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={coverImage}
              alt={displayTitle}
              fill
              sizes="(max-width: 767px) 100vw, 46vw"
              className={styles.coverMedia}
              style={{
                objectFit: imageConfig.fit,
                objectPosition: imageConfig.position,
              }}
            />
          )}
        </div>
      </div>

      <div className={styles.body}>
        <span className={styles.meta}>
          <span className={styles.index}>{num}</span>
          {category}
        </span>
        <h3 className={styles.title}>{displayTitle}</h3>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>
    </Link>
  );
}
