"use client";

import { motion } from "framer-motion";
import { Globe, Monitor, Smartphone, Check, ArrowRight, Download, ExternalLink } from "lucide-react";
import { APP_URL } from "../constants";

interface PlatformsSectionProps {
  onOpenDownload?: (platform?: "windows" | "android") => void;
}

export function PlatformsSection({ onOpenDownload }: PlatformsSectionProps) {
  const platforms = [
    {
      id: "web",
      name: "Web Application",
      badge: "Instant Access",
      description: "Access your spiritual sanctuary from any computer or tablet browser with zero install required. PWA installable.",
      icon: <Globe size={26} className="text-[var(--accent-primary)]" />,
      features: [
        "Instant launch in Chrome, Safari, Edge",
        "PWA install to desktop dock / home screen",
        "Seamless offline service worker caching",
        "Automatic cloud sync with Google Sign-In"
      ],
      primaryAction: (
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer w-full py-3.5 rounded-xl font-bold text-xs text-black bg-[var(--accent-primary)] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_var(--accent-primary-glow)] hover:scale-[1.02] active:scale-[0.98]"
          style={{ color: "#000000" }}
        >
          <span>Launch Real Web App (Direct)</span>
          <ExternalLink size={14} />
        </a>
      )
    },
    {
      id: "windows",
      name: "Windows Desktop",
      badge: ".EXE Installer",
      description: "Dedicated sanctuary application for deep sermon preparation, pastoral writing, and long-form study.",
      icon: <Monitor size={26} className="text-[var(--accent-lavender)]" />,
      features: [
        "Native local-first storage architecture",
        "Global keyboard shortcuts (Ctrl+K, Ctrl+Z)",
        "Distraction-free fullscreen sanctuary",
        "Automatic background cloud sync"
      ],
      primaryAction: (
        <div className="flex flex-col gap-2 w-full">
          <a
            href="/downloads/vessel-setup.exe"
            download="vessel-setup.exe"
            className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-purple-600 hover:bg-purple-500 border border-purple-400/30 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            <Download size={14} />
            <span>Download Windows (.exe)</span>
          </a>
          <button
            onClick={() => onOpenDownload?.("windows")}
            className="text-[11px] text-white/50 hover:text-white/80 py-1 transition-colors"
          >
            View Installation Instructions
          </button>
        </div>
      )
    },
    {
      id: "android",
      name: "Android Mobile",
      badge: ".APK Package",
      description: "Your pocket devotion companion. Take notes on the go, record sermons with hands-free voice dictation, and browse scripture.",
      icon: <Smartphone size={26} className="text-[var(--accent-coral)]" />,
      features: [
        "Touch-optimized bottom dock pill",
        "Hands-free voice recording & speech-to-text",
        "Horizontal scrolling stats carousel",
        "Instant offline access in church sanctuary"
      ],
      primaryAction: (
        <div className="flex flex-col gap-2 w-full">
          <a
            href="/downloads/vessel.apk"
            download="vessel.apk"
            className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-orange-600 hover:bg-orange-500 border border-orange-400/30 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
          >
            <Download size={14} />
            <span>Download Android (.apk)</span>
          </a>
          <button
            onClick={() => onOpenDownload?.("android")}
            className="text-[11px] text-white/50 hover:text-white/80 py-1 transition-colors"
          >
            View Mobile Setup Guide
          </button>
        </div>
      )
    }
  ];

  return (
    <section id="platforms" className="py-24 relative bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[var(--accent-primary)] mb-4">
            <Monitor size={14} />
            <span>Multi-Device Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Wherever God Speaks, Vessel is Ready
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Write your sermon notes on your laptop at home, reference them from your phone at Sunday service, and reflect on tablet anytime.
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {platforms.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-3xl bg-[#13161c] border border-white/[0.08] p-7 flex flex-col justify-between hover:border-white/20 transition-all group relative overflow-hidden"
            >
              {/* Subtle Corner Ambient Aura */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full pointer-events-none group-hover:bg-white/[0.04] transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {p.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  {p.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                      <Check size={14} className="text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.05]">
                {p.primaryAction}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
