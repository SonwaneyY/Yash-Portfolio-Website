"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { experience } from "@/lib/data";
import styles from "./Experience.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  return (
    <section className={styles.experienceStrip}>
      <Container>
        <motion.div
          className={styles.experienceGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className={styles.experienceItem}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
            >
              <div className={styles.experienceLogo}>
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.experienceText}>
                <span className={styles.experienceCompany}>{exp.company}</span>
                <span className={styles.experienceRole}>{exp.role}</span>
                <span className={styles.experienceYear}>{exp.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
