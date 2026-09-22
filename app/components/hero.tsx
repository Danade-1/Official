"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BookOpen, Monitor, Smartphone, Palette, ArrowRight, ShieldCheck } from "lucide-react";

const APP_URL = "https://sermon-note-manager-ddaw-i8r8do9e3-danny-077a.vercel.app";

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
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-serif font-bold tracking-tight text-white leading-[1.12] mb-7"
        >
          A quiet space for your <br className="hidden sm:inline" />
          <span className="relative inline-block min-w-[280px] sm:min-w-[440px] text-left">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 whitespace-nowrap bg-gradient-to-r from-white via-[var(--accent-primary)] to-white bg-clip-text text-transparent"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="opacity-0 pointer-events-none">spiritual reflections</span>
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

        {/* Action Button Suite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto mb-14"
        >
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base text-black bg-[var(--accent-primary)] hover:brightness-110 transition-all shadow-[0_0_35px_var(--accent-primary-glow)] hover:scale-[1.02] active:scale-[0.98]"
            style={{ color: "#000000" }}
          >
            <BookOpen size={19} />
            <span>Launch Web App</span>
          </a>

          <button
            onClick={() => onOpenDownload?.("windows")}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-medium text-sm text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 transition-all"
          >
            <Monitor size={17} className="text-white/70" />
            <span>Windows</span>
          </button>

          <button
            onClick={() => onOpenDownload?.("android")}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-medium text-sm text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 transition-all"
          >
            <Smartphone size={17} className="text-white/70" />
            <span>Android</span>
          </button>
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
