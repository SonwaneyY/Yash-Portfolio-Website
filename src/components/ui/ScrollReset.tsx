"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type LenisLike = { scrollTo: (target: number, opts?: { immediate?: boolean }) => void };

export default function ScrollReset() {
  const pathname = usePathname();

  // Stop the browser from restoring previous scroll position on navigation
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const lenis = (window as unknown as { lenis?: LenisLike }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
