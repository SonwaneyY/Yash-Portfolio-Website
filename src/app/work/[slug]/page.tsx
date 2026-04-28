"use client";

import React, { useState, useEffect, useRef } from "react";
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

function SectionRenderer({ section, onImageClick }: { section: CaseStudySection; onImageClick: (src: string) => void }) {
  switch (section.type) {
    case "text":
      return (
        <ScrollReveal>
          <div id={headingToId(section.heading)} className={styles.textSection}>
            <h2 className={styles.textHeading}>{section.heading}</h2>
            {section.body.map((p, i) => (
              <p key={i} className={i === 0 ? styles.textBodyLead : styles.textBody}>{p}</p>
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
                <div
                  className={styles.imageMobileFrame}
                  onClick={() => onImageClick(section.src)}
                  style={{ cursor: "zoom-in" }}
                >
                  <Image src={section.src} alt={section.alt} fill />
                </div>
              </div>
            ) : (
              <div
                className={styles.imageFull}
                onClick={() => onImageClick(section.src)}
                style={{ cursor: "zoom-in" }}
              >
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
                <div
                  className={styles.twoImageWrapper}
                  onClick={() => onImageClick(img.src)}
                  style={{ cursor: "zoom-in" }}
                >
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

    case "pull-quote":
      return (
        <ScrollReveal>
          <blockquote className={styles.pullQuote}>
            <p className={styles.pullQuoteText}>&ldquo;{section.text}&rdquo;</p>
            {section.attribution && (
              <cite className={styles.pullQuoteAttribution}>
                &mdash; {section.attribution}
              </cite>
            )}
          </blockquote>
        </ScrollReveal>
      );

    case "callout":
      return (
        <ScrollReveal>
          <div className={styles.callout}>
            <span className={styles.calloutLabel}>{section.label}</span>
            {section.body.map((p, i) => (
              <p key={i} className={styles.calloutBody}>{p}</p>
            ))}
          </div>
        </ScrollReveal>
      );

    case "steps":
      return (
        <ScrollReveal>
          <div className={styles.steps}>
            {section.title && <span className={styles.stepsTitle}>{section.title}</span>}
            {section.items.map((item, i) => (
              <div key={i} className={styles.step}>
                <span className={styles.stepNum}>{item.num}</span>
                <div className={styles.stepContent}>
                  {item.video && (
                    <div className={styles.stepMedia}>
                      <video
                        src={item.video}
                        poster={item.videoPoster}
                        controls
                        playsInline
                        className={styles.stepVideo}
                      />
                      {item.videoCaption && <p className={styles.imageCaption}>{item.videoCaption}</p>}
                    </div>
                  )}
                  {item.image && (
                    <div className={styles.stepMedia}>
                      <div className={styles.stepImageWrapper}>
                        <Image src={item.image} alt={item.imageAlt || item.label} fill style={{ objectFit: "contain" }} />
                      </div>
                      {item.imageCaption && <p className={styles.imageCaption}>{item.imageCaption}</p>}
                    </div>
                  )}
                  <span className={styles.stepLabel}>{item.label}</span>
                  {item.body && <p className={styles.stepBody}>{item.body}</p>}
                </div>
              </div>
            ))}
          </div>
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

    case "video":
      return (
        <ScrollReveal>
          <div className={styles.videoSection}>
            <video
              src={section.src}
              poster={section.poster}
              controls
              playsInline
              className={styles.videoPlayer}
            />
            {section.caption && (
              <p className={styles.imageCaption}>{section.caption}</p>
            )}
          </div>
        </ScrollReveal>
      );

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

    case "problem-gap":
      return (
        <ScrollReveal>
          <div className={styles.problemGap}>
            <div className={styles.problemGapHeader}>
              <span className={styles.problemGapLabel}>{section.label}</span>
              <span className={styles.problemGapHeading}>{section.heading}</span>
            </div>
            <div className={styles.problemGapBody}>
              <div className={styles.problemGapColumn}>
                <p className={styles.problemGapColumnLabel}>Current State</p>
                <p className={styles.problemGapColumnText}>{section.current}</p>
              </div>
              <div className={styles.problemGapColumn}>
                <p className={styles.problemGapColumnLabel}>Desired State</p>
                <p className={styles.problemGapColumnText}>{section.desired}</p>
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
                <div key={i} className={`${styles.conceptCard} ${item.selected ? styles.conceptCardSelected : ""}`}>
                  <span className={`${styles.conceptTag} ${item.selected ? styles.conceptTagSelected : ""}`}>{item.tag}</span>
                  <p className={`${styles.conceptName} ${item.selected ? styles.conceptNameSelected : ""}`}>{item.name}</p>
                  <p className={`${styles.conceptDesc} ${item.selected ? styles.conceptDescSelected : ""}`}>{item.description}</p>
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
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxSrc(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxSrc]);

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
          <CaseStudySidebar items={navItems} sectionsRef={sectionsRef} />
          <div className={styles.sections} ref={sectionsRef}>
            {cs.sections.map((section, i) => (
              <SectionRenderer key={i} section={section} onImageClick={setLightboxSrc} />
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

      {/* Lightbox */}
      {lightboxSrc && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxSrc(null)}>
          <button className={styles.lightboxClose} onClick={() => setLightboxSrc(null)} aria-label="Close">✕</button>
          <div className={styles.lightboxImageWrap} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightboxSrc} alt="Full size" className={styles.lightboxImage} />
          </div>
        </div>
      )}

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
