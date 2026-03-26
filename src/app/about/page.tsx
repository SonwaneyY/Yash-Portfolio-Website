"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import TextReveal from "@/components/ui/TextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig, experience, skills, aboutData } from "@/lib/data";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <TextReveal className={styles.heading} as="h1">
                About.Me
              </TextReveal>
              <ScrollReveal delay={0.2}>
                <p className={styles.subtitle}>{aboutData.subtitle}</p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.3}>
              <div className={styles.photoPlaceholder}>
                <span className={styles.photoLabel}>Photo</span>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Narrative */}
      <section className={styles.narrative}>
        <Container>
          {aboutData.narrative.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className={styles.narrativeParagraph}>{paragraph}</p>
            </ScrollReveal>
          ))}
        </Container>
      </section>

      {/* Bento Grid */}
      <section className={styles.bentoSection}>
        <Container>
          <div className={styles.bentoGrid}>
            {/* Experience */}
            <ScrollReveal delay={0}>
              <div className={styles.bentoCard}>
                <span className={styles.cardLabel}>Experience</span>
                <div className={styles.experienceList}>
                  {experience.map((exp) => (
                    <div key={exp.company} className={styles.experienceItem}>
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={32}
                        height={32}
                        className={styles.experienceLogo}
                      />
                      <div className={styles.experienceInfo}>
                        <span className={styles.experienceCompany}>{exp.company}</span>
                        <span className={styles.experienceRole}>{exp.role}</span>
                      </div>
                      <span className={styles.experienceYear}>{exp.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal delay={0.05}>
              <div className={styles.bentoCard}>
                <span className={styles.cardLabel}>Education</span>
                <div>
                  <p className={styles.educationSchool}>{aboutData.education.school}</p>
                  <p className={styles.educationDegree}>{aboutData.education.degree}</p>
                  <p className={styles.educationYear}>{aboutData.education.year}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Now */}
            <ScrollReveal delay={0.1}>
              <div className={styles.bentoCard}>
                <span className={styles.cardLabel}>Now</span>
                <div className={styles.nowList}>
                  {aboutData.now.map((item, i) => (
                    <p key={i} className={styles.nowItem}>{item}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Philosophy */}
            <ScrollReveal delay={0.15}>
              <div className={styles.bentoCard}>
                <span className={styles.cardLabel}>Design Beliefs</span>
                <div className={styles.philosophyList}>
                  {aboutData.philosophy.map((belief, i) => (
                    <p key={i} className={styles.philosophyItem}>{belief}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Toolkit */}
            <ScrollReveal delay={0.2}>
              <div className={styles.bentoCard}>
                <span className={styles.cardLabel}>Toolkit</span>
                <div className={styles.toolkitGrid}>
                  {skills.map((skill) => (
                    <span key={skill} className={styles.toolkitPill}>{skill}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Personal */}
            <ScrollReveal delay={0.25}>
              <div className={styles.bentoCard}>
                <span className={styles.cardLabel}>Beyond Work</span>
                <p className={styles.personalText}>{aboutData.personal}</p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <Container>
          <ScrollReveal>
            <h2 className={styles.ctaHeading}>Let&rsquo;s work together</h2>
            <a href={`mailto:${siteConfig.email}`} className={styles.ctaLink}>
              {siteConfig.email} &rarr;
            </a>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
