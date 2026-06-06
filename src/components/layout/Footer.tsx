"use client";

import { useRef, useEffect } from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/data";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import styles from "./Footer.module.css";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(footerRef.current!.querySelector("[data-footer-inner]")!, {
        opacity: 0,
        y: 12,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className={styles.footer} ref={footerRef}>
      <Container>
        <div className={styles.status}>
          <span className={styles.pill}>
            <span className={styles.pillDot} aria-hidden="true" />
            Available for Work
          </span>
          <div className={styles.statusRow}>
            <p className={styles.statusLine}>
              Interested in building tech that actually works and makes you money?
            </p>
            <a href={`mailto:${siteConfig.email}`} className={styles.statusCta}>
              Let&rsquo;s talk &rarr;
            </a>
          </div>
        </div>
        <div className={styles.inner} data-footer-inner>
          <span className={styles.name}>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </span>
          <div className={styles.links}>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a href={`mailto:${siteConfig.email}`} className={styles.link}>
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
