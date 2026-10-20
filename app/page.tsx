"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Hero, ThemeKey } from "./components/hero";
import { DeviceShowcase } from "./components/device-showcase";
import { SanctuaryScroll } from "./components/sanctuary-scroll";
import { MarqueeTicker } from "./components/marquee-ticker";
import { FeaturesBento } from "./components/features-bento";
import { ScriptureDemo } from "./components/scripture-demo";
import { PlatformsSection } from "./components/platforms-section";
import { FAQAccordion } from "./components/faq-accordion";
import { DownloadModal } from "./components/download-modal";
import { Footer } from "./components/footer";
import { BookOpen, Download } from "lucide-react";
import { APP_URL } from "./constants";

export default function LandingPage() {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>("sage");
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadPlatform, setDownloadPlatform] = useState<"windows" | "android" | undefined>(undefined);

  const handleThemeChange = (theme: ThemeKey) => {
    setCurrentTheme(theme);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  const handleOpenDownload = (platform?: "windows" | "android") => {
    setDownloadPlatform(platform);
    setDownloadModalOpen(true);
  };

  const scrollToPrimaryDownload = (platform?: "windows" | "android") => {
    if (platform) {
      setDownloadPlatform(platform);
    }
    const ctaBtn = document.getElementById("primary-download-cta");
    if (ctaBtn) {
      ctaBtn.scrollIntoView({ behavior: "smooth", block: "center" });
      ctaBtn.classList.remove("cta-highlight-active");
      // Force DOM reflow to retrigger animation reliably
      void ctaBtn.offsetWidth;
      ctaBtn.classList.add("cta-highlight-active");
      setTimeout(() => {
        setDownloadModalOpen(true);
      }, 650);
    } else {
      setDownloadModalOpen(true);
    }
  };

  // Set default theme on mount
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-deep)] text-[var(--text-primary)] font-sans flex flex-col relative overflow-x-hidden selection:bg-[var(--accent-primary-dim)] selection:text-[var(--accent-primary)] pb-20 md:pb-0">
      
      {/* Background Subtle Dot Grid */}
      <div className="fixed inset-0 bg-dot-grid pointer-events-none opacity-40 z-0" />

      {/* Main Top Navigation */}
      <Navbar onRedirectToDownload={() => scrollToPrimaryDownload()} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section with Rotating Words & Live Theme Selector */}
        <Hero
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
          onOpenDownload={handleOpenDownload}
        />

        {/* 2. Interactive Dual-View Device Showcase (Desktop & Mobile with Genuine Screenshots) */}
        <DeviceShowcase />

        {/* 3. Infinite Feature Marquee */}
        <MarqueeTicker />

        {/* 4. Scrollable Sanctuary Bible Experience with Interactive Scripture Pins */}
        <SanctuaryScroll />

        {/* 5. 6-Card Core Pillars Bento Grid */}
        <FeaturesBento />

        {/* 6. Interactive Scripture Explorer Demo */}
        <ScriptureDemo />

        {/* 7. Multi-Platform Availability (Web, Windows, Android) */}
        <PlatformsSection onRedirectToDownload={scrollToPrimaryDownload} />

        {/* 8. Frequently Asked Questions Accordion */}
        <FAQAccordion />
      </main>

      {/* Footer with Pre-footer CTA */}
      <Footer onRedirectToDownload={() => scrollToPrimaryDownload()} />

      {/* Mobile Sticky Quick Action Dock (Single Action Button) */}
      <div className="fixed bottom-4 inset-x-4 z-40 md:hidden p-1.5 rounded-2xl bg-[#101318]/90 border border-white/15 backdrop-blur-xl shadow-2xl">
        <button
          onClick={() => scrollToPrimaryDownload()}
          className="btn-shimmer w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[var(--accent-primary)] text-black text-xs font-bold shadow-lg cursor-pointer"
          style={{ color: "#000000" }}
        >
          <Download size={15} />
          <span>Get Vessel — Web, Windows & Android</span>
        </button>
      </div>

      {/* Download & Installation Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        defaultPlatform={downloadPlatform}
      />

    </div>
  );
}
