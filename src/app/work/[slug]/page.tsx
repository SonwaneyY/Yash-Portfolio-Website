"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import TextReveal from "@/components/ui/TextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/lib/data";
import type { CaseStudySection } from "@/lib/data";
import styles from "./casestudy.module.css";
import { SubscriberGrowthChart, ConversionMilestonesChart, ChurnReasonsChart } from "@/components/casestudy/CaseStudyCharts";
import CaseStudySidebar from "@/components/casestudy/CaseStudySidebar";
import CaseStudyMobileNav from "@/components/casestudy/CaseStudyMobileNav";
import LoopRail from "@/components/casestudy/tempo/LoopRail";
import MorningTriage from "@/components/casestudy/tempo/MorningTriage";
import RebalanceSandbox from "@/components/casestudy/tempo/RebalanceSandbox";
import RoadmapTimeline from "@/components/casestudy/tempo/RoadmapTimeline";

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
            <div className={styles.textHeadingGroup}>
              {section.label && <span className={styles.textHeadingLabel}>{section.label}</span>}
              <h2 className={styles.textHeading}>{section.heading}</h2>
            </div>
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
                style={{ cursor: "zoom-in", ...(section.aspectRatio ? { aspectRatio: section.aspectRatio } : {}) }}
              >
                <div className={styles.imageInner}>
                  <Image src={section.src} alt={section.alt} fill />
                </div>
              </div>
            )}
            {section.caption && (
              <p className={styles.imageCaption}>{section.caption}</p>
            )}
          </div>
        </ScrollReveal>
      );

    case "logos":
      return (
        <ScrollReveal>
          <div className={styles.logosSection}>
            <div className={styles.logosRow}>
              {section.items.map((logo, i) => {
                const card = (
                  <div className={styles.logoCard}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.alt} className={styles.logoImg} loading="lazy" />
                  </div>
                );
                return logo.url ? (
                  <a key={i} href={logo.url} target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
                    {card}
                  </a>
                ) : (
                  <div key={i}>{card}</div>
                );
              })}
            </div>
            {section.caption && (
              <p className={styles.imageCaption}>{section.caption}</p>
            )}
          </div>
        </ScrollReveal>
      );

    case "two-images":
      return (
        <ScrollReveal>
          <div className={`${styles.imageStack}${section.columns ? ` ${styles.imageStackColumns}` : ""}${section.fit === "contain" ? ` ${styles.imageStackContain}` : ""}`}>
            {section.images.map((img, i) => (
              <div key={i} className={styles.imageStackItem}>
                <div
                  className={styles.imageStackFrame}
                  onClick={() => onImageClick(img.src)}
                  style={{ cursor: "zoom-in" }}
                >
                  <div className={styles.imageInner}>
                    <Image src={img.src} alt={img.alt} fill />
                  </div>
                </div>
                {img.caption && (
                  <p className={styles.imageCaption}>{img.caption}</p>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      );

    case "gallery":
      return (
        <ScrollReveal>
          <div className={styles.gallery}>
            <div className={styles.galleryTrack}>
              {section.images.map((img, i) => (
                <figure key={i} className={styles.galleryItem}>
                  <div
                    className={styles.galleryFrame}
                    onClick={() => onImageClick(img.src)}
                    style={{ cursor: "zoom-in" }}
                  >
                    <div className={styles.imageInner}>
                      <Image src={img.src} alt={img.alt} fill />
                    </div>
                  </div>
                  {img.caption && (
                    <figcaption className={styles.imageCaption}>{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
            {section.caption && <p className={styles.galleryNote}>{section.caption}</p>}
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
                {section.attribution}
              </cite>
            )}
          </blockquote>
        </ScrollReveal>
      );

    case "pull-quote":
      return (
        <ScrollReveal>
          <blockquote id={section.navLabel ? headingToId(section.navLabel) : undefined} className={styles.pullQuote}>
            {section.label && <span className={styles.textHeadingLabel}>{section.label}</span>}
            <p className={styles.pullQuoteText}>{section.text}</p>
            {section.subtitle && (
              <p className={styles.pullQuoteSubtitle}>{section.subtitle}</p>
            )}
            {section.attribution && (
              <cite className={styles.pullQuoteAttribution}>
                {section.attribution}
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
                        <div className={styles.imageInner}>
                          <Image src={item.image} alt={item.imageAlt || item.label} fill style={{ objectFit: "contain" }} />
                        </div>
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
          <div
            className={styles.metricsGrid}
            style={section.columns ? { gridTemplateColumns: `repeat(${section.columns}, 1fr)` } : undefined}
          >
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
            {section.loop ? (
              <video
                src={section.src}
                poster={section.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className={styles.videoPlayer}
                style={section.maxWidth ? { maxWidth: section.maxWidth } : undefined}
              />
            ) : (
              <video
                src={section.src}
                poster={section.poster}
                controls
                playsInline
                className={styles.videoPlayer}
                style={section.maxWidth ? { maxWidth: section.maxWidth } : undefined}
              />
            )}
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
            <p className={styles.insightCardAttribution}>{section.attribution}</p>
          </div>
        </ScrollReveal>
      );

    case "loop":
      return (
        <LoopRail
          label={section.label}
          heading={section.heading}
          stages={section.stages}
          caption={section.caption}
        />
      );

    case "triage":
      return (
        <MorningTriage
          label={section.label}
          heading={section.heading}
          intro={section.intro}
          noise={section.noise}
          cards={section.cards}
          note={section.note}
        />
      );

    case "sandbox":
      return (
        <RebalanceSandbox
          label={section.label}
          heading={section.heading}
          intro={section.intro}
          externalities={section.externalities}
          outputs={section.outputs}
          cohortSize={section.cohortSize}
          note={section.note}
        />
      );

    case "timeline":
      return (
        <div id={section.navLabel ? headingToId(section.navLabel) : undefined}>
          <RoadmapTimeline label={section.label} title={section.title} items={section.items} />
        </div>
      );

    case "features":
      return (
        <ScrollReveal>
          <div id={section.navLabel ? headingToId(section.navLabel) : undefined} className={styles.features}>
            {(section.label || section.heading) && (
              <div className={styles.featuresHead}>
                {section.label && <span className={styles.textHeadingLabel}>{section.label}</span>}
                {section.heading && <h2 className={styles.textHeading}>{section.heading}</h2>}
              </div>
            )}
            {section.items.map((item, i) => (
              <div key={i} className={styles.featureRow}>
                <div className={styles.featureText}>
                  {item.tag && <span className={styles.featureTag}>{item.tag}</span>}
                  <h3 className={styles.featureName}>{item.name}</h3>
                  <p className={styles.featureBody}>{item.body}</p>
                </div>
                {item.src ? (
                  <div
                    className={styles.featureMediaFilled}
                    style={{ aspectRatio: item.ratio || "4 / 3" }}
                  >
                    {/\.(png|jpe?g|webp|gif|avif)$/i.test(item.src) ? (
                      <Image
                        className={styles.featureVideo}
                        src={item.src}
                        alt={item.mediaLabel || item.name}
                        fill
                        sizes="(max-width: 1023px) 100vw, 60vw"
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      <video
                        className={styles.featureVideo}
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label={item.mediaLabel || item.name}
                      />
                    )}
                  </div>
                ) : (
                  <div
                    className={styles.featureMedia}
                    style={{ aspectRatio: item.ratio || "4 / 3" }}
                  >
                    <span className={styles.mediaPlaceholderTag}>{item.media || "image"}</span>
                    {item.mediaLabel && (
                      <span className={styles.mediaPlaceholderLabel}>{item.mediaLabel}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      );

    case "embed":
      return (
        <ScrollReveal>
          <div id={section.navLabel ? headingToId(section.navLabel) : undefined} className={styles.embedSection}>
            {(section.label || section.heading) && (
              <div className={styles.embedHead}>
                {section.label && <span className={styles.textHeadingLabel}>{section.label}</span>}
                {section.heading && <h2 className={styles.textHeading}>{section.heading}</h2>}
                {section.intro && <p className={styles.embedIntro}>{section.intro}</p>}
              </div>
            )}
            <div className={styles.embedFrame} style={{ aspectRatio: section.ratio || "16 / 10" }}>
              <iframe
                src={section.url}
                title={section.heading || "Live prototype"}
                loading="lazy"
                className={styles.embedIframe}
                allow="fullscreen"
              />
            </div>
            <p className={styles.embedNote}>
              {section.note ? <span className={styles.embedNoteWarning}>{section.note} </span> : ""}
              <a href={section.url} target="_blank" rel="noopener noreferrer" className={styles.embedLink}>
                Open in a new tab &rarr;
              </a>
            </p>
          </div>
        </ScrollReveal>
      );

    case "button":
      return (
        <ScrollReveal>
          <div className={styles.buttonSection}>
            <a
              href={section.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.caseButton}
            >
              {section.label} &rarr;
            </a>
          </div>
        </ScrollReveal>
      );

    case "buttons":
      return (
        <ScrollReveal>
          <div className={styles.buttonsRow}>
            {section.items.map((b, i) => (
              <a
                key={i}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.caseButton}
              >
                {b.label} &rarr;
              </a>
            ))}
          </div>
        </ScrollReveal>
      );

    case "product-cards":
      return (
        <ScrollReveal>
          <div className={styles.productCardsBlock}>
            <div className={styles.productCardsRow}>
              {section.items.map((card, i) => (
                <a
                  key={i}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.productCard}
                >
                  <div className={styles.productCardThumb}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={card.src} alt={card.alt} className={styles.productCardImg} loading="lazy" />
                  </div>
                  <span className={styles.productCardBtn}>{card.label} &rarr;</span>
                </a>
              ))}
            </div>
            {section.note && <p className={styles.productCardsNote}>{section.note}</p>}
          </div>
        </ScrollReveal>
      );

    case "divider":
      return <hr className={styles.sectionDivider} aria-hidden />;

    case "placeholder":
      return (
        <ScrollReveal>
          <div
            className={`${styles.mediaPlaceholder} ${section.width === "wide" ? styles.mediaPlaceholderWide : ""}`}
            style={{ aspectRatio: section.ratio || "16 / 9" }}
          >
            <span className={styles.mediaPlaceholderTag}>{section.media}</span>
            <span className={styles.mediaPlaceholderLabel}>{section.label}</span>
          </div>
        </ScrollReveal>
      );

    case "problem-gap":
      return (
        <ScrollReveal>
          <div id={headingToId(section.label)} className={styles.problemGap}>
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
          <div id={section.navLabel ? headingToId(section.navLabel) : undefined} className={styles.conceptsSection}>
            <div className={styles.conceptsHead}>
              <h2 className={styles.conceptsTitle}>{section.heading}</h2>
              {section.label && <span className={styles.conceptsSubtitle}>{section.label}</span>}
            </div>
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
  const touchStartY = useRef<number>(0);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxSrc(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxSrc]);

  const handleLightboxTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0]?.clientY ?? 0;
  };

  const handleLightboxTouchEnd = (e: React.TouchEvent) => {
    const deltaY = (e.changedTouches[0]?.clientY ?? 0) - touchStartY.current;
    if (deltaY > 80) setLightboxSrc(null);
  };

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
  const heroVideo = (project as { heroVideo?: { mp4: string; webm?: string; poster?: string; bg?: string } }).heroVideo;

  // Build sidebar nav: text sections + any section that opts in via navLabel
  const navItems = cs.sections
    .map((s) => {
      if (s.type === "text") return { label: s.label || s.heading, id: headingToId(s.heading) };
      const navLabel = (s as { navLabel?: string }).navLabel;
      if (navLabel) return { label: navLabel, id: headingToId(navLabel) };
      return null;
    })
    .filter((x): x is { label: string; id: string } => x !== null);

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

      {/* Cover Image / Reel */}
      <Container>
        <ScrollReveal delay={0.3}>
          <div
            className={styles.coverImageWrapper}
            style={
              heroVideo?.bg
                ? { background: heroVideo.bg }
                : { backgroundColor: project.imageConfig?.bg || "var(--bg-secondary)" }
            }
          >
            <div className={styles.imageInner}>
              {heroVideo ? (
                <video
                  className={styles.coverVideo}
                  poster={heroVideo.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`${project.title} prototype reel`}
                >
                  {heroVideo.webm && <source src={heroVideo.webm} type="video/webm" />}
                  <source src={heroVideo.mp4} type="video/mp4" />
                </video>
              ) : (
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
              )}
            </div>
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
        <CaseStudyMobileNav items={navItems} sectionsRef={sectionsRef} />
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
        <div
          className={styles.lightboxOverlay}
          onClick={() => setLightboxSrc(null)}
          onTouchStart={handleLightboxTouchStart}
          onTouchEnd={handleLightboxTouchEnd}
        >
          <button className={styles.lightboxClose} onClick={() => setLightboxSrc(null)} aria-label="Close">✕</button>
          <div className={styles.lightboxImageWrap} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightboxSrc} alt="Full size" className={styles.lightboxImage} />
          </div>
        </div>
      )}

    </>
  );
}
