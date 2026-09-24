"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Monitor,
  Smartphone,
  BookOpen,
  Sparkles,
  ExternalLink,
  Layers,
  Palette,
  Calendar,
  Mic,
  Maximize2
} from "lucide-react";
import Image from "next/image";

const APP_URL = "https://sermon-note-manager-ddaw-i8r8do9e3-danny-077a.vercel.app";

interface DesktopViewOption {
  id: "dashboard" | "editor" | "typography";
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  hotspots: {
    title: string;
    description: string;
    x: number;
    y: number;
  }[];
}

const desktopViews: DesktopViewOption[] = [
  {
    id: "dashboard",
    title: "Sermon Library & Overview",
    subtitle: "Complete bird's-eye view of your sermon series, monthly calendar, and spiritual metrics.",
    image: "/images/desktop-dashboard.png",
    badge: "Dashboard Studio",
    hotspots: [
      {
        title: "Total Sermons & Progress",
        description: "Track library growth with monthly note counts and completion metrics.",
        x: 32,
        y: 80
      },
      {
        title: "Global ⌘K Command Palette",
        description: "Instant universal search for past notes, scriptures, and sermon topics.",
        x: 48,
        y: 8
      },
      {
        title: "Daily Verse & Calendar",
        description: "Daily inspirational scripture and calendar heat-dots for Sunday services.",
        x: 88,
        y: 35
      }
    ]
  },
  {
    id: "editor",
    title: "Focus Note Canvas (3-Pane)",
    subtitle: "Distraction-free markdown writing with live scripture attachments and series metadata.",
    image: "/images/desktop-editor.png",
    badge: "Focus Writing",
    hotspots: [
      {
        title: "Distraction-Free Canvas",
        description: "Generous margins, serif typography, and zero clutter for focused study.",
        x: 45,
        y: 50
      },
      {
        title: "Note Properties & Series",
        description: "Manage series tags, completion status, and attached key scriptures seamlessly.",
        x: 85,
        y: 40
      },
      {
        title: "Floating Floating Dock",
        description: "Quick access to text formatting, scriptures, and hands-free voice notes.",
        x: 48,
        y: 92
      }
    ]
  },
  {
    id: "typography",
    title: "Text & Typography Suite",
    subtitle: "Rich biblical formatting with emerald-frosted popover, headings, blockquotes, and lists.",
    image: "/images/desktop-typography.png",
    badge: "Typography Suite",
    hotspots: [
      {
        title: "Headings & Callouts",
        description: "H1-H3 headers, biblical blockquotes, and divider rules.",
        x: 50,
        y: 32
      },
      {
        title: "Scriptural Lists & Checks",
        description: "Bullet lists, numbered sermon points, and prayer checklists.",
        x: 50,
        y: 62
      }
    ]
  }
];

interface MobileViewOption {
  id: "library" | "editor";
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  features: string[];
}

const mobileViews: MobileViewOption[] = [
  {
    id: "library",
    title: "Mobile Sermon Sanctuary",
    subtitle: "Your complete sermon vault in your pocket, with Sunday calendar and quick note creation.",
    image: "/images/mobile-library.png",
    badge: "Pocket Library",
    features: [
      "September 2026 Interactive Calendar",
      "Floating one-tap sermon creator (+)",
      "Instant cloud sync with notification badges"
    ]
  },
  {
    id: "editor",
    title: "Mobile Focus Editor & Dock",
    subtitle: "Quick sermon note capture during church service with bottom-mounted touch dock.",
    image: "/images/mobile-editor.png",
    badge: "Service Companion",
    features: [
      "Bottom-anchored thumb-friendly formatting dock",
      "One-tap voice dictation & speech-to-text",
      "Clean reading mode with live word count"
    ]
  }
];

export function DeviceShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [deviceType, setDeviceType] = useState<"desktop" | "mobile">("desktop");
  const [selectedDesktopView, setSelectedDesktopView] = useState<DesktopViewOption>(desktopViews[0]);
  const [selectedMobileView, setSelectedMobileView] = useState<MobileViewOption>(mobileViews[0]);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  // Scroll driven 3D perspective tilt
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.8]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="py-24 relative overflow-hidden bg-[var(--bg-deep)]"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[var(--accent-primary-dim)] rounded-full blur-[160px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-primary-dim)] border border-[var(--accent-primary-border)] text-xs font-semibold text-[var(--accent-primary)] mb-4">
            <Sparkles size={14} />
            <span>Dual Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight leading-tight">
            Crafted for Big Screens & Mobile Sanctuary
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Whether preparing a detailed sermon manuscript at your study desk or recording quick devotional revelations on your phone during Sunday worship, Vessel is designed to feel native, responsive, and serene.
          </p>

          {/* Device Type Toggle (Desktop vs Mobile) */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/[0.04] border border-white/10 mt-8 backdrop-blur-lg">
            <button
              onClick={() => {
                setDeviceType("desktop");
                setActiveHotspot(null);
              }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                deviceType === "desktop"
                  ? "bg-[var(--accent-primary)] text-black shadow-[0_0_20px_var(--accent-primary-glow)] font-bold"
                  : "text-white/70 hover:text-white"
              }`}
              style={deviceType === "desktop" ? { color: "#000000" } : {}}
            >
              <Monitor size={15} />
              <span>Desktop Workspace</span>
            </button>

            <button
              onClick={() => {
                setDeviceType("mobile");
                setActiveHotspot(null);
              }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                deviceType === "mobile"
                  ? "bg-[var(--accent-primary)] text-black shadow-[0_0_20px_var(--accent-primary-glow)] font-bold"
                  : "text-white/70 hover:text-white"
              }`}
              style={deviceType === "mobile" ? { color: "#000000" } : {}}
            >
              <Smartphone size={15} />
              <span>Mobile Sanctuary</span>
            </button>
          </div>

          {/* Sub-view switcher tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {deviceType === "desktop" ? (
              desktopViews.map((view) => (
                <button
                  key={view.id}
                  onClick={() => {
                    setSelectedDesktopView(view);
                    setActiveHotspot(null);
                  }}
                  className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedDesktopView.id === view.id
                      ? "bg-white/15 text-white border border-white/20 shadow-sm"
                      : "text-white/50 hover:text-white/80 bg-white/[0.02]"
                  }`}
                >
                  {view.title}
                </button>
              ))
            ) : (
              mobileViews.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setSelectedMobileView(view)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedMobileView.id === view.id
                      ? "bg-white/15 text-white border border-white/20 shadow-sm"
                      : "text-white/50 hover:text-white/80 bg-white/[0.02]"
                  }`}
                >
                  {view.title}
                </button>
              ))
            )}
          </div>
        </div>

        {/* 3D Scroll Perspective Frame */}
        <motion.div
          style={{
            rotateX: rotateX,
            scale: scale,
            transformPerspective: 1200
          }}
          className="transition-transform duration-200"
        >
          <AnimatePresence mode="wait">
            {deviceType === "desktop" ? (
              /* ============================================================
                 DESKTOP HARDWARE FRAME WITH POLISHED USER SCREENSHOTS
                 ============================================================ */
              <motion.div
                key={`desktop-${selectedDesktopView.id}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/15 bg-[#12151b] shadow-[0_30px_90px_rgba(0,0,0,0.85)] relative"
              >
                {/* Desktop Window Title Bar */}
                <div className="h-10 bg-[#161a22] border-b border-white/[0.08] px-4 flex items-center justify-between select-none">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-80 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-80 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-80 transition-opacity" />
                    <span className="text-[11px] font-medium text-white/50 ml-3 hidden sm:inline">
                      Vessel Sermon Studio — {selectedDesktopView.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[var(--accent-primary)] bg-[var(--accent-primary-dim)] px-2.5 py-0.5 rounded-full border border-[var(--accent-primary-border)] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                      <span>Cloud Synced</span>
                    </span>

                    <a
                      href={APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-1 text-[11px] text-white/70 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 hover:border-white/20 transition-all"
                    >
                      <span>Open Live App</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                {/* Main Desktop Screenshot Area with Interactive Hotspots */}
                <div className="relative aspect-[16/7.5] sm:aspect-[16/7.4] w-full overflow-hidden bg-[#0b0d11]">
                  <Image
                    src={selectedDesktopView.image}
                    alt={selectedDesktopView.title}
                    fill
                    priority
                    className="object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                  />

                  {/* Subtle Specular Top Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/20 pointer-events-none" />

                  {/* Interactive Hotspot Pins */}
                  {selectedDesktopView.hotspots.map((spot, idx) => {
                    const isActive = activeHotspot === idx;
                    return (
                      <div
                        key={idx}
                        style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                      >
                        <button
                          onClick={() => setActiveHotspot(isActive ? null : idx)}
                          className="relative flex items-center justify-center p-2 group cursor-pointer"
                        >
                          <span className="absolute w-7 h-7 rounded-full bg-[var(--accent-primary)] opacity-40 animate-ping" />
                          <span className="relative w-5 h-5 rounded-full bg-[var(--accent-primary)] text-black flex items-center justify-center text-[10px] font-bold shadow-[0_0_12px_var(--accent-primary)] transition-transform group-hover:scale-125">
                            {idx + 1}
                          </span>
                        </button>

                        {/* Hotspot Popover Tooltip */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 p-3.5 rounded-xl bg-[#171b24]/95 border border-[var(--accent-primary-border)] shadow-2xl backdrop-blur-xl z-30 text-left pointer-events-auto"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] uppercase font-bold text-[var(--accent-primary)] tracking-wider">
                                  {spot.title}
                                </span>
                                <button
                                  onClick={() => setActiveHotspot(null)}
                                  className="text-white/40 hover:text-white text-xs"
                                >
                                  ✕
                                </button>
                              </div>
                              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                                {spot.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Bar Info */}
                <div className="h-10 bg-[#14171e] border-t border-white/[0.06] px-5 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                    <span>{selectedDesktopView.subtitle}</span>
                  </div>

                  <span className="hidden sm:inline text-[11px] text-white/40">
                    Click glowing numbers to explore features
                  </span>
                </div>
              </motion.div>
            ) : (
              /* ============================================================
                 MOBILE HARDWARE FRAME WITH POLISHED USER SCREENSHOTS
                 ============================================================ */
              <motion.div
                key={`mobile-${selectedMobileView.id}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-4xl mx-auto"
              >
                {/* Mobile Smartphone Chassis Frame */}
                <div className="relative w-[310px] sm:w-[340px] rounded-[48px] p-3.5 bg-gradient-to-b from-[#2a2e39] via-[#1a1d25] to-[#12141a] border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
                  {/* Outer Rim Details */}
                  <div className="relative rounded-[38px] overflow-hidden bg-black border border-white/10">
                    
                    {/* Dynamic Island / Speaker Pill */}
                    <div className="h-7 bg-[#0d0f13] flex items-center justify-center relative z-20">
                      <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2 border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-blue-950/60 border border-blue-500/30" />
                      </div>
                    </div>

                    {/* Smartphone Screen Content */}
                    <div className="relative aspect-[9/15.5] w-full overflow-hidden bg-[#0c0e12]">
                      <Image
                        src={selectedMobileView.image}
                        alt={selectedMobileView.title}
                        fill
                        priority
                        className="object-cover object-top filter brightness-[1.02]"
                      />

                      {/* Screen Glaze */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />
                    </div>

                    {/* Bottom Home Indicator Bar */}
                    <div className="h-5 bg-[#0d0f13] flex items-center justify-center">
                      <div className="w-28 h-1 bg-white/30 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Mobile Companion Storytelling Panel */}
                <div className="max-w-md text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[var(--accent-primary)] mb-3">
                    <Smartphone size={13} />
                    <span>{selectedMobileView.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                    {selectedMobileView.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {selectedMobileView.subtitle}
                  </p>

                  <div className="space-y-3 mb-8">
                    {selectedMobileView.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[var(--accent-primary-dim)] text-[var(--accent-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-xs text-white/90 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-black bg-[var(--accent-primary)] hover:brightness-110 transition-all shadow-[0_0_20px_var(--accent-primary-glow)]"
                      style={{ color: "#000000" }}
                    >
                      <BookOpen size={15} />
                      <span>Test on Your Phone</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
