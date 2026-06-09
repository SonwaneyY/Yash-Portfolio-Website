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
  cardMetric?: string;
  coverImage: string;
  cardVideo?: string;
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
  cardMetric,
  coverImage,
  cardVideo,
  imageConfig = { fit: "cover", position: "center center" },
}: ProjectCardProps) {
  const thumbBg = "var(--card-grey)";
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
          {category}
        </span>
        <h3 className={styles.title}>{displayTitle}</h3>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        {cardMetric ? <p className={styles.metric}>{cardMetric}</p> : null}
      </div>
    </Link>
  );
}
