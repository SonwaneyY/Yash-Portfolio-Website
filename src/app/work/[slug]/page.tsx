"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import TextReveal from "@/components/ui/TextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects, siteConfig } from "@/lib/data";
import type { CaseStudySection } from "@/lib/data";
import styles from "./casestudy.module.css";
import { SubscriberGrowthChart, ConversionMilestonesChart, ChurnReasonsChart } from "@/components/casestudy/CaseStudyCharts";
import CaseStudySidebar from "@/components/casestudy/CaseStudySidebar";

function headingToId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function SectionRenderer({ section }: { section: CaseStudySection }) {
  switch (section.type) {
    case "text":
      return (
        <ScrollReveal>
          <div id={headingToId(section.heading)} className={styles.textSection}>
            <h2 className={styles.textHeading}>{section.heading}</h2>
            {section.body.map((p, i) => (
              <p key={i} className={styles.textBody}>{p}</p>
            ))}
          </div>
        </ScrollReveal>
      );

    case "image":
      return (
        <ScrollReveal>
          <div className={styles.imageSection}>
            {section.layout === "mobile" ? (
              <div className={styles.imageMobilePanel}>
                <div className={styles.imageMobileFrame}>
                  <Image src={section.src} alt={section.alt} fill />
                </div>
              </div>
            ) : (
              <div className={styles.imageFull}>
                <Image src={section.src} alt={section.alt} fill />
              </div>
            )}
            {section.caption && (
              <p className={styles.imageCaption}>{section.caption}</p>
            )}
          </div>
        </ScrollReveal>
      );

    case "two-images":
      return (
        <ScrollReveal>
          <div className={styles.twoImages}>
            {section.images.map((img, i) => (
              <div key={i} className={styles.twoImageItem}>
                <div className={styles.twoImageWrapper}>
                  <Image src={img.src} alt={img.alt} fill />
                </div>
                {img.caption && (
                  <p className={styles.imageCaption}>{img.caption}</p>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      );

    case "quote":
      return (
        <ScrollReveal>
          <blockquote className={styles.quoteSection}>
            <p className={styles.quoteText}>{section.text}</p>
            {section.attribution && (
              <cite className={styles.quoteAttribution}>
                &mdash; {section.attribution}
              </cite>
            )}
          </blockquote>
        </ScrollReveal>
      );

    case "metrics":
      return (
        <ScrollReveal>
          <div className={styles.metricsGrid}>
            {section.items.map((item, i) => (
              <div key={i} className={styles.metricCard}>
                <span className={styles.metricValue}>{item.value}</span>
                <span className={styles.metricLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      );


    case "chart": {
      const chartMap: Record<string, React.ReactNode> = {
        "subscriber-growth": <SubscriberGrowthChart />,
        "conversion-milestones": <ConversionMilestonesChart />,
        "churn-reasons": <ChurnReasonsChart />,
      };
      const chart = chartMap[section.chartId];
      if (!chart) return null;
      return (
        <ScrollReveal>
          <div className={styles.chartSection}>
            {chart}
            {section.caption && (
              <p className={styles.chartCaption}>{section.caption}</p>
            )}
          </div>
        </ScrollReveal>
      );
    }

    case "insight-card":
      return (
        <ScrollReveal>
          <div className={styles.insightCard}>
            <p className={styles.insightCardTheme}>{section.theme}</p>
            <p className={styles.insightCardInsight}>{section.insight}</p>
            <p className={styles.insightCardVerbatim}>&ldquo;{section.verbatim}&rdquo;</p>
            <p className={styles.insightCardAttribution}>&mdash; {section.attribution}</p>
          </div>
        </ScrollReveal>
      );

    case "callout":
      return (
        <ScrollReveal>
          <div className={styles.calloutSection}>
            <div className={styles.calloutHeader}>
              <span className={styles.calloutLabel}>{section.label}</span>
              <span className={styles.calloutHeading}>{section.heading}</span>
            </div>
            <div className={styles.calloutBody}>
              <div className={styles.calloutColumn}>
                <p className={styles.calloutColumnLabel}>Current State</p>
                <p className={styles.calloutColumnText}>{section.current}</p>
              </div>
              <div className={styles.calloutColumn}>
                <p className={styles.calloutColumnLabel}>Desired State</p>
                <p className={styles.calloutColumnText}>{section.desired}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      );

    case "concepts-grid":
      return (
        <ScrollReveal>
          <div className={styles.conceptsSection}>
            <p className={styles.conceptsSectionHeading}>{section.heading}</p>
            <div className={styles.conceptsGrid}>
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className={`${styles.conceptCard} ${item.selected ? styles.conceptCardSelected : ""}`}
                >
                  <span className={`${styles.conceptTag} ${item.selected ? styles.conceptTagSelected : ""}`}>
                    {item.tag}
                  </span>
                  <p className={`${styles.conceptName} ${item.selected ? styles.conceptNameSelected : ""}`}>
                    {item.name}
                  </p>
                  <p className={`${styles.conceptDesc} ${item.selected ? styles.conceptDescSelected : ""}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      );

    default:
      return null;
  }
}

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project || !project.caseStudy) {
    return (
      <Container>
        <div style={{ padding: "160px 0 80px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 40, color: "var(--text-primary)" }}>
            Project not found
          </h1>
          <Link href="/" style={{ color: "var(--accent)", marginTop: 16, display: "inline-block" }}>
            &larr; Back to work
          </Link>
        </div>
      </Container>
    );
  }

  const cs = project.caseStudy;

  // Build sidebar nav from text sections only
  const navItems = cs.sections
    .filter((s): s is Extract<typeof s, { type: "text" }> => s.type === "text")
    .map((s) => ({ label: s.heading, id: headingToId(s.heading) }));

  // Prev / Next
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <Link href="/" className={styles.backLink}>
            &larr; Back to work
          </Link>
          <TextReveal as="span" className={styles.heroCategory}>
            {project.category}
          </TextReveal>
          <TextReveal as="h1" className={styles.heroTitle} delay={0.1}>
            {project.title}
          </TextReveal>
          <ScrollReveal delay={0.2}>
            <p className={styles.heroSubtitle}>{project.subtitle}</p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Cover Image */}
      <Container>
        <ScrollReveal delay={0.3}>
          <div
            className={styles.coverImageWrapper}
            style={{
              backgroundColor: project.imageConfig?.bg || "var(--bg-secondary)",
            }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className={styles.coverImage}
              style={{
                objectFit: (project.imageConfig?.fit as "cover" | "contain") || "cover",
                objectPosition: project.imageConfig?.position || "center center",
              }}
              priority
            />
          </div>
        </ScrollReveal>
      </Container>

      {/* Meta Strip */}
      <Container>
        <ScrollReveal delay={0.35}>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>{cs.role}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>{cs.timeline}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Tools</span>
              <span className={styles.metaValue}>{cs.tools.join(", ")}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Team</span>
              <span className={styles.metaValue}>{cs.team}</span>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Content Sections */}
      <Container>
        <div className={styles.contentLayout}>
          <CaseStudySidebar items={navItems} />
          <div className={styles.sections}>
            {cs.sections.map((section, i) => (
              <SectionRenderer key={i} section={section} />
            ))}
          </div>
        </div>
      </Container>

      {/* Prev / Next */}
      <Container>
        <nav className={styles.prevNext}>
          {prevProject ? (
            <Link href={`/work/${prevProject.slug}`} className={styles.prevNextLink}>
              <span className={styles.prevNextLabel}>&larr; Previous</span>
              <span className={styles.prevNextTitle}>{prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link href={`/work/${nextProject.slug}`} className={styles.prevNextLink}>
              <span className={styles.prevNextLabel}>Next &rarr;</span>
              <span className={styles.prevNextTitle}>{nextProject.title}</span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </Container>

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
