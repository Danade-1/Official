"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Hero, ThemeKey } from "./components/hero";
import { DeviceShowcase } from "./components/device-showcase";
import { MarqueeTicker } from "./components/marquee-ticker";
import { FeaturesBento } from "./components/features-bento";
import { ScriptureDemo } from "./components/scripture-demo";
import { PlatformsSection } from "./components/platforms-section";
import { FAQAccordion } from "./components/faq-accordion";
import { DownloadModal } from "./components/download-modal";
import { Footer } from "./components/footer";

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

  // Set default theme on mount
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-deep)] text-[var(--text-primary)] font-sans flex flex-col relative overflow-x-hidden selection:bg-[var(--accent-primary-dim)] selection:text-[var(--accent-primary)]">
      
      {/* Background Subtle Dot Grid */}
      <div className="fixed inset-0 bg-dot-grid pointer-events-none opacity-40 z-0" />

      {/* Main Top Navigation */}
      <Navbar onOpenDownload={() => handleOpenDownload()} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section with Rotating Words & Live Theme Selector */}
        <Hero
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
          onOpenDownload={handleOpenDownload}
        />

        {/* 2. Interactive Dual-View Device Showcase (Desktop & Mobile) */}
        <DeviceShowcase />

        {/* 3. Infinite Feature Marquee */}
        <MarqueeTicker />

        {/* 4. 6-Card Core Pillars Bento Grid */}
        <FeaturesBento />

        {/* 5. Interactive Scripture Explorer Demo */}
        <ScriptureDemo />

        {/* 6. Multi-Platform Availability (Web, Windows, Android) */}
        <PlatformsSection onOpenDownload={handleOpenDownload} />

        {/* 7. Frequently Asked Questions Accordion */}
        <FAQAccordion />
      </main>

      {/* Footer with Pre-footer CTA */}
      <Footer />

      {/* Download & Installation Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        defaultPlatform={downloadPlatform}
      />

    </div>
  );
}
