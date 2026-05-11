import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import PageTransition from "@/components/ui/PageTransition";
import { Agentation } from "agentation";
import "./globals.css";

const scotchText = localFont({
  src: [
    { path: "../../public/fonts/Scotch Text Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Scotch Text Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-scotch-display",
  display: "swap",
});

const generalSans = localFont({
  src: [
    { path: "../../public/fonts/GeneralSans-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/GeneralSans-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/GeneralSans-Italic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/GeneralSans-Light.otf", weight: "300", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yash Sonwaney — Product Designer",
  description:
    "Senior product designer shaping enterprise tools, service ecosystems, and AI-native workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${scotchText.variable} ${generalSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SmoothScroll />
        <Header />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        {process.env.NODE_ENV === 'development' && <Agentation endpoint="http://localhost:4747" />}
      </body>
    </html>
  );
}
