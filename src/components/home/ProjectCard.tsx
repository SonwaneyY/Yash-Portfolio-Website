"use client";

import Link from "next/link";
import Image from "next/image";
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

  return (
    <Link href={`/work/${slug}`} className={styles.card} data-project-card>
      <div className={styles.media} style={{ background: thumbBg }}>
        <div className={styles.cover}>
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
