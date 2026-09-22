"use client";

import { motion } from "framer-motion";
import { Globe, Monitor, Smartphone, Check, ArrowRight, Download, ExternalLink } from "lucide-react";

const APP_URL = "https://sermon-note-manager-ddaw-i8r8do9e3-danny-077a.vercel.app";

interface PlatformsSectionProps {
  onOpenDownload?: (platform?: "windows" | "android") => void;
}

export function PlatformsSection({ onOpenDownload }: PlatformsSectionProps) {
  const platforms = [
    {
      id: "web",
      name: "Web Application",
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
          className="btn-shimmer w-full py-3 rounded-xl font-semibold text-xs text-black bg-[var(--accent-primary)] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_var(--accent-primary-glow)]"
          style={{ color: "#000000" }}
        >
          <span>Launch Web App</span>
          <ExternalLink size={14} />
        </a>
      )
    },
    {
      id: "windows",
      name: "Windows Desktop",
      description: "Dedicated sanctuary application for deep sermon preparation, pastoral writing, and long-form study.",
      icon: <Monitor size={26} className="text-[var(--accent-lavender)]" />,
      features: [
        "Native local-first storage architecture",
        "Global keyboard shortcuts (Ctrl+K, Ctrl+Z)",
        "Distraction-free fullscreen sanctuary",
        "Automatic background cloud sync"
      ],
      primaryAction: (
        <button
          onClick={() => onOpenDownload?.("windows")}
          className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 transition-all flex items-center justify-center gap-2"
        >
          <Download size={14} />
          <span>Get Windows Build</span>
        </button>
      )
    },
    {
      id: "android",
      name: "Android Mobile",
      description: "Your pocket devotion companion. Take notes on the go, record sermons with hands-free voice dictation, and browse scripture.",
      icon: <Smartphone size={26} className="text-[var(--accent-coral)]" />,
      features: [
        "Touch-optimized bottom dock pill",
        "Hands-free voice recording & speech-to-text",
        "Horizontal scrolling stats carousel",
        "Instant offline access in church sanctuary"
      ],
      primaryAction: (
        <button
          onClick={() => onOpenDownload?.("android")}
          className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 transition-all flex items-center justify-center gap-2"
        >
          <Download size={14} />
          <span>Get Android App</span>
        </button>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="vessel-glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6">
                  {platform.icon}
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  {platform.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {platform.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-8">
                  {platform.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-white/80">
                      <Check size={14} className="text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {platform.primaryAction}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
