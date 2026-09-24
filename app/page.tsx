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

const APP_URL = "https://sermon-note-manager-ddaw-i8r8do9e3-danny-077a.vercel.app";

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
    <div className="min-h-screen bg-[var(--bg-deep)] text-[var(--text-primary)] font-sans flex flex-col relative overflow-x-hidden selection:bg-[var(--accent-primary-dim)] selection:text-[var(--accent-primary)] pb-20 md:pb-0">
      
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
        <PlatformsSection onOpenDownload={handleOpenDownload} />

        {/* 8. Frequently Asked Questions Accordion */}
        <FAQAccordion />
      </main>

      {/* Footer with Pre-footer CTA */}
      <Footer />

      {/* Mobile Sticky Quick Action Dock (Visible only on small screens) */}
      <div className="fixed bottom-4 inset-x-4 z-40 md:hidden flex items-center justify-between gap-2.5 p-2 rounded-2xl bg-[#14171d]/90 border border-white/15 backdrop-blur-xl shadow-2xl">
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[var(--accent-primary)] text-black text-xs font-bold shadow-lg"
          style={{ color: "#000000" }}
        >
          <BookOpen size={14} />
          <span>Launch Web App</span>
        </a>

        <button
          onClick={() => handleOpenDownload()}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-colors"
        >
          <Download size={14} />
          <span>Download</span>
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
