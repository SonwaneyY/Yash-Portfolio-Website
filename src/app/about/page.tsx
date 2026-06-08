"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { experience, skills, aboutData } from "@/lib/data";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>About</span>
          </div>
          <h1 className={styles.heading}>{aboutData.subtitle}</h1>
        </Container>
      </section>

      {/* Narrative — single column, near-essay */}
      <section className={styles.narrative}>
        <Container>
          <div className={styles.narrativeInner}>
            {aboutData.narrative.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className={styles.narrativeParagraph}>{paragraph}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Info blocks */}
      <section className={styles.infoSection}>
        <Container>
          <div className={styles.infoGrid}>

            <ScrollReveal>
              <div className={styles.infoBlock}>
                <div className={styles.blockMarker}>
                  <span className={styles.markerLabel}>Experience</span>
                </div>
                <div className={styles.expList}>
                  {experience.map((exp) => (
                    <div key={exp.company} className={styles.expRow}>
                      <div className={styles.expLeft}>
                        <Image src={exp.logo} alt={exp.company} width={28} height={28} className={styles.expLogo} />
                        <div>
                          <span className={styles.expCompany}>{exp.company}</span>
                          <span className={styles.expRole}>{exp.role}</span>
                        </div>
                      </div>
                      <span className={styles.expYear}>{exp.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className={styles.infoBlock}>
                <div className={styles.blockMarker}>
                  <span className={styles.markerLabel}>Education</span>
                </div>
                <p className={styles.eduSchool}>{aboutData.education.school}</p>
                <p className={styles.eduDegree}>{aboutData.education.degree}</p>
                <span className={styles.eduYear}>{aboutData.education.year}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className={styles.infoBlock}>
                <div className={styles.blockMarker}>
                  <span className={styles.markerLabel}>Now</span>
                </div>
                <div className={styles.nowList}>
                  {aboutData.now.map((item, i) => (
                    <p key={i} className={styles.nowItem}>{item}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className={styles.infoBlock}>
                <div className={styles.blockMarker}>
                  <span className={styles.markerLabel}>Design Beliefs</span>
                </div>
                <div className={styles.beliefList}>
                  {aboutData.philosophy.map((belief, i) => (
                    <p key={i} className={styles.beliefItem}>{belief}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className={styles.infoBlock}>
                <div className={styles.blockMarker}>
                  <span className={styles.markerLabel}>Toolkit</span>
                </div>
                <div className={styles.toolkit}>
                  {skills.map((skill, i) => (
                    <span key={skill}>
                      <span className={styles.toolPill}>{skill}</span>
                      {i < skills.length - 1 && (
                        <span className={styles.toolSep} aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className={styles.infoBlock}>
                <div className={styles.blockMarker}>
                  <span className={styles.markerLabel}>Beyond Work</span>
                </div>
                <p className={styles.personal}>{aboutData.personal}</p>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>
    </>
  );
}
