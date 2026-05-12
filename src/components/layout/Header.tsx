"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";

import { siteConfig } from "@/lib/data";
import styles from "./Header.module.css";

const EMAIL = "yash.sonwaney@newschool.edu";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About.Me" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  function handleCopyEmail() {
    const confirm = () => {
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2500);
    };

    const fallback = () => {
      const el = document.createElement("textarea");
      el.value = EMAIL;
      el.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      confirm();
    };

    if (navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL).then(confirm).catch(fallback);
    } else {
      fallback();
    }
  }

  const isHome = pathname === "/";
  // Sync with Hero phase 2 cascade: reveal fires at ~1.75s on home, header joins at +0.25s
  const headerDelay = isHome ? 2.0 : 0;
  const headerInitialY = isHome ? -24 : 0;

  return (
    <>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: headerInitialY }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: headerDelay }}
      >
        <Container>
          <div className={styles.inner}>
            <Link href="/" className={styles.monogram}>
              {siteConfig.initials}
            </Link>

            <span className={styles.location} aria-label="Location: New York City">
              <svg className={styles.locationIcon} width="8" height="10" viewBox="0 0 8 10" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 0C1.79 0 0 1.79 0 4C0 7 4 10 4 10C4 10 8 7 8 4C8 1.79 6.21 0 4 0ZM4 5.5C3.17 5.5 2.5 4.83 2.5 4C2.5 3.17 3.17 2.5 4 2.5C4.83 2.5 5.5 3.17 5.5 4C5.5 4.83 4.83 5.5 4 5.5Z" fill="currentColor"/>
              </svg>
              New York City
            </span>

            <nav className={styles.desktopNav}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    styles.navLink,
                    pathname === link.href && styles.navLinkActive
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className={styles.emailWrapper}>
                <button
                  className={styles.navLink}
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  Email
                </button>
                {copied && (
                  <div className={styles.copiedToast} role="status" aria-live="polite">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                      <path d="M1 4L4 7L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Email copied to clipboard
                  </div>
                )}
              </div>
            </nav>

            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </Container>
      </motion.header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        onCopyEmail={handleCopyEmail}
        emailCopied={copied}
      />
    </>
  );
}
