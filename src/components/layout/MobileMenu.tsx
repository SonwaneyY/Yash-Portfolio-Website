"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./MobileMenu.module.css";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  onCopyEmail?: () => void;
  emailCopied?: boolean;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const navVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  exit: {},
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
};

export default function MobileMenu({ isOpen, onClose, links, onCopyEmail, emailCopied }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab") {
        const overlay = document.getElementById("mobile-menu");
        if (!overlay) return;
        const focusable = Array.from(
          overlay.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={styles.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button ref={closeRef} className={styles.closeButton} onClick={onClose} aria-label="Close navigation menu">
            Close
          </button>

          <motion.nav className={styles.nav} variants={navVariants}>
            {links.map((link, i) =>
              link.external ? (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={styles.navLink}
                  variants={linkVariants}
                  custom={i}
                  onClick={onClose}
                >
                  {link.label}
                </motion.a>
              ) : (
                <motion.div
                  key={link.href}
                  variants={linkVariants}
                  custom={i}
                >
                  <Link
                    href={link.href}
                    className={styles.navLink}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}

            {onCopyEmail && (
              <motion.div
                className={styles.emailWrapper}
                variants={linkVariants}
                custom={links.length}
              >
                <button
                  className={styles.emailButton}
                  onClick={() => { onCopyEmail(); }}
                  aria-label="Copy email address"
                >
                  Email
                </button>
                {emailCopied && (
                  <span className={styles.copiedToast} role="status" aria-live="polite">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                      <path d="M1 4L4 7L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Copied
                  </span>
                )}
              </motion.div>
            )}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
