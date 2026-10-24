"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BookOpen, Monitor, Smartphone, Palette, ArrowRight, ShieldCheck, ExternalLink, Download } from "lucide-react";
import { APP_URL } from "../constants";

const rotatingWords = [
  "sermon notes",
  "prayer journals",
  "Bible studies",
  "spiritual reflections",
  "devotional insights"
];

export type ThemeKey = "sage" | "lavender" | "coral" | "amber";

interface ThemeOption {
  id: ThemeKey;
  label: string;
  colorHex: string;
  glowClass: string;
}

const themeOptions: ThemeOption[] = [
  { id: "sage", label: "Emerald Sage", colorHex: "#6ee7b7", glowClass: "bg-emerald-400" },
  { id: "lavender", label: "Amethyst Lavender", colorHex: "#a78bfa", glowClass: "bg-purple-400" },
  { id: "coral", label: "Sunset Coral", colorHex: "#fb923c", glowClass: "bg-orange-400" },
  { id: "amber", label: "Warm Amber", colorHex: "#fbbf24", glowClass: "bg-amber-400" }
];

interface HeroProps {
  currentTheme: ThemeKey;
  onThemeChange: (theme: ThemeKey) => void;
  onOpenDownload?: (platform?: "windows" | "android") => void;
}

export function Hero({ currentTheme, onThemeChange, onOpenDownload }: HeroProps) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Dynamic Ambient Background Glows that change with theme */}
      <div className="absolute top-0 inset-x-0 h-[850px] overflow-hidden -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.2, 0.12]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full mix-blend-screen filter blur-[140px]"
          style={{ backgroundColor: "var(--accent-primary)" }}
        />
        <div className="absolute top-48 left-1/4 w-[500px] h-[500px] bg-[var(--accent-primary-dim)] rounded-full mix-blend-screen filter blur-[160px] opacity-40" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Release Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-[var(--text-secondary)] mb-8 shadow-sm backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
          </span>
          <span className="text-white/90">Available across Web, Windows & Android</span>
          <span className="text-white/30">•</span>
          <span className="text-[var(--accent-primary)] font-semibold">Local-First Sanctuary</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-serif font-bold tracking-tight text-white leading-[1.15] mb-7 text-center"
        >
          <span className="block">A quiet space for your</span>
          <span className="relative block h-[1.2em] w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "block", textAlign: "center", width: "100%" }}
                className="absolute inset-0 whitespace-nowrap bg-gradient-to-r from-white via-[var(--accent-primary)] to-white bg-clip-text text-transparent leading-[1.2em]"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Vessel is a distraction-free, local-first sanctuary for sermon notes, Bible study, and devotion. Instant scripture insertion, AI auto-tagging, and zero subscription barriers.
        </motion.p>

        {/* Unified Single Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center max-w-xl mx-auto mb-14"
        >
          <button
            id="primary-download-cta"
            onClick={() => onOpenDownload?.()}
            className="btn-shimmer group relative flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl font-bold text-base sm:text-lg text-black bg-[var(--accent-primary)] hover:brightness-110 transition-all duration-300 shadow-[0_0_40px_var(--accent-primary-glow)] hover:shadow-[0_0_55px_var(--accent-primary-glow)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            style={{ color: "#000000" }}
          >
            <div className="w-7 h-7 rounded-lg bg-black/15 flex items-center justify-center">
              <Download size={18} className="text-black group-hover:translate-y-0.5 transition-transform" />
            </div>
            <span className="tracking-tight">Get Vessel — Free</span>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/15 text-black">
              <span>Web</span>
              <span>•</span>
              <span>Windows</span>
              <span>•</span>
              <span>Android</span>
            </div>
            <ArrowRight size={18} className="text-black group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 mt-4 text-xs text-[var(--text-secondary)]">
            <span className="flex items-center gap-1.5">
              <Sparkles size={13} className="text-[var(--accent-primary)]" />
              <span>Instant Web Launch • Windows (.exe) • Android (.apk)</span>
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-[var(--text-muted)]">Zero Installation or Native Builds</span>
          </div>
        </motion.div>

        {/* Live Interactive Accent Theme Switcher Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-lg shadow-black/40"
        >
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium">
            <Palette size={14} className="text-[var(--accent-primary)]" />
            <span>Experience Accent Theme:</span>
          </div>
          <div className="flex items-center gap-2">
            {themeOptions.map((t) => (
              <button
                key={t.id}
                onClick={() => onThemeChange(t.id)}
                title={`Switch to ${t.label}`}
                className={`w-6 h-6 rounded-full transition-all flex items-center justify-center relative ${
                  currentTheme === t.id
                    ? "scale-125 ring-2 ring-white/60 shadow-[0_0_12px_var(--accent-primary)]"
                    : "opacity-60 hover:opacity-100 hover:scale-110"
                }`}
                style={{ backgroundColor: t.colorHex }}
              >
                {currentTheme === t.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-black/70" />
                )}
              </button>
            ))}
          </div>
          <span className="text-[11px] font-semibold text-white/70 tracking-wide uppercase">
            {themeOptions.find((t) => t.id === currentTheme)?.label.split(" ")[1]}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
