"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/lib/data";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About.Me" },
  { href: `mailto:${siteConfig.email}`, label: "Contact", external: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.inner}>
            <Link href="/" className={styles.monogram}>
              {siteConfig.initials}
            </Link>

            <nav className={styles.desktopNav}>
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className={styles.navLink}
                  >
                    {link.label}
                  </a>
                ) : (
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
                )
              )}
              <ThemeToggle />
            </nav>

            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
