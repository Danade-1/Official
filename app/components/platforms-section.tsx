"use client";

import { motion } from "framer-motion";
import { Globe, Monitor, Smartphone, Check, ArrowRight, Download, ExternalLink } from "lucide-react";
import { APP_URL } from "../constants";

interface PlatformsSectionProps {
  onRedirectToDownload?: (platform?: "windows" | "android") => void;
}

export function PlatformsSection({ onRedirectToDownload }: PlatformsSectionProps) {
  const platforms = [
    {
      id: "web" as const,
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
      actionLabel: "Launch Web Sanctuary",
      buttonClass: "bg-[var(--accent-primary-dim)] hover:bg-[var(--accent-primary)] text-[var(--accent-primary)] hover:text-black border border-[var(--accent-primary-border)]"
    },
    {
      id: "windows" as const,
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
      actionLabel: "Get Windows (.exe)",
      buttonClass: "bg-[var(--accent-lavender-dim)] hover:bg-[var(--accent-lavender)] text-[var(--accent-lavender)] hover:text-black border border-purple-500/30"
    },
    {
      id: "android" as const,
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
      actionLabel: "Get Android (.apk)",
      buttonClass: "bg-[var(--accent-coral-dim)] hover:bg-[var(--accent-coral)] text-[var(--accent-coral)] hover:text-black border border-orange-500/30"
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
                <button
                  onClick={() => onRedirectToDownload?.(p.id === "web" ? undefined : p.id)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] ${p.buttonClass}`}
                >
                  <Download size={14} />
                  <span>{p.actionLabel}</span>
                  <ArrowRight size={13} className="opacity-70" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
