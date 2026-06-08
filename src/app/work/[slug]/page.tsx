import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import TextReveal from "@/components/ui/TextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/lib/data";
import styles from "./casestudy.module.css";
import { headingToId, type NavItem } from "./utils";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy)
    .map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project || !project.caseStudy) {
    notFound();
  }

  const cs = project.caseStudy;
  const heroVideo = (project as { heroVideo?: { mp4: string; webm?: string; poster?: string; bg?: string } }).heroVideo;

  // Build sidebar nav: text sections + any section that opts in via navLabel
  const navItems: NavItem[] = cs.sections
    .map((s) => {
      if (s.type === "text") return { label: s.label || s.heading, id: headingToId(s.heading) };
      const navLabel = (s as { navLabel?: string }).navLabel;
      if (navLabel) return { label: navLabel, id: headingToId(navLabel) };
      return null;
    })
    .filter((x): x is NavItem => x !== null);

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

      {/* Content Sections + Lightbox (client island) */}
      <CaseStudyClient sections={cs.sections} navItems={navItems} />

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
    </>
  );
}
