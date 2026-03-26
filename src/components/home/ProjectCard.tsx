"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  company?: string;
  year?: string;
  coverImage: string;
  imageConfig?: {
    fit: "cover" | "contain";
    position: string;
    bg?: string;
  };
}

// Clip-path reveal: image wipes in from bottom
const imageReveal = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ProjectCard({
  slug,
  title,
  subtitle,
  category,
  company,
  year,
  coverImage,
  imageConfig = { fit: "cover", position: "center center" },
}: ProjectCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax on the image
  const imageY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <Link href={`/work/${slug}`} className={styles.card} ref={ref}>
      <motion.div
        className={styles.imageWrapper}
        variants={imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
        style={imageConfig.bg ? { backgroundColor: imageConfig.bg } : undefined}
      >
        <motion.div
          className={styles.imageInner}
          style={{ y: imageY }}
        >
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            className={styles.coverImage}
            style={{
              objectFit: imageConfig.fit,
              objectPosition: imageConfig.position,
            }}
          />
        </motion.div>
      </motion.div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        {(company || year) && (
          <span className={styles.meta}>
            {[company, year].filter(Boolean).join(" · ")}
          </span>
        )}
      </div>
    </Link>
  );
}
