"use client";

import { useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import LoadingIntro from "./LoadingIntro";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Only show intro on first home visit per session
  const hasShownIntro = useRef(false);
  const showIntro = isHome && !hasShownIntro.current;
  const [introComplete, setIntroComplete] = useState(!showIntro);

  const handleIntroComplete = useCallback(() => {
    hasShownIntro.current = true;
    setIntroComplete(true);
  }, []);

  return (
    <>
      {showIntro && !introComplete && <LoadingIntro onComplete={handleIntroComplete} />}
      <div
        style={
          !introComplete
            ? { opacity: 0, pointerEvents: "none" as const }
            : undefined
        }
      >
        {children}
      </div>
    </>
  );
}
