"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { skillCategories } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";
import styles from "./Skills.module.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Skills() {
  return (
    <section className={styles.section}>
      <Container>
        <span className={styles.header}>Capabilities</span>

        <div className={styles.categories}>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className={styles.category}>
              <span className={styles.categoryLabel}>{category}</span>
              <motion.div
                className={styles.pills}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {skills.map((skill) => (
                  <motion.span key={skill} className={styles.pill} variants={pillVariants}>
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
