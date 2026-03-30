import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import FeaturedWork from "@/components/home/FeaturedWork";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <>
      <div style={{ marginTop: "24px" }}>
        <Ticker />
      </div>
      <Hero />
      <Suspense>
        <FeaturedWork />
      </Suspense>
      <Experience />
      <Skills />
    </>
  );
}
