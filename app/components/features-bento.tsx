"use client";

import { motion } from "framer-motion";
import {
  Feather,
  BookOpen,
  Sparkles,
  Heart,
  Zap,
  Mic,
  CheckCircle2,
  Lock,
  Compass,
  Layers,
  ArrowUpRight
} from "lucide-react";

export function FeaturesBento() {
  const bentoCards = [
    {
      title: "Distraction-Free Sanctuary",
      category: "Writing Environment",
      description: "An uncluttered, typography-focused editor with Markdown shortcuts, clean hierarchy, reading time metrics, and zero UI distractions.",
      icon: <Feather size={22} className="text-[var(--accent-primary)]" />,
      colSpan: "lg:col-span-2",
      badge: "Focus Mode",
      interactiveElement: (
        <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] font-serif text-sm text-white/80 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-sans text-[var(--text-muted)] pb-2 border-b border-white/5">
            <span>Reading Time: 4 mins</span>
            <span className="text-[var(--accent-primary)]">TipTap Engine</span>
          </div>
          <p className="italic text-white">"Faith is taking the first step even when you don't see the whole staircase."</p>
          <div className="flex gap-2 font-sans text-xs pt-1">
            <span className="px-2 py-0.5 rounded bg-white/5 text-[var(--accent-primary)] font-medium">Heading 2</span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-white/60">Scripture Quote</span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-white/60">Checklist</span>
          </div>
        </div>
      )
    },
    {
      title: "Scripture at Your Fingertips",
      category: "Bible Integration",
      description: "Search any book, chapter, or verse and insert rich scripture callouts directly into your notes with one simple click.",
      icon: <BookOpen size={22} className="text-[var(--accent-primary)]" />,
      colSpan: "lg:col-span-1",
      badge: "One-Click Quote",
      interactiveElement: (
        <div className="mt-4 p-3 rounded-xl bg-[var(--accent-primary-dim)] border border-[var(--accent-primary-border)] text-xs">
          <span className="font-semibold text-[var(--accent-primary)] block mb-1">Hebrews 11:1 (ESV)</span>
          <p className="text-white/90 italic font-serif leading-snug">
            "Now faith is the assurance of things hoped for, the conviction of things not seen."
          </p>
        </div>
      )
    },
    {
      title: "AI Semantic Auto-Tagging",
      category: "Intelligence",
      description: "Vessel's smart tagging engine detects core biblical themes and auto-organizes your sermon library into searchable topics.",
      icon: <Sparkles size={22} className="text-[var(--accent-lavender)]" />,
      colSpan: "lg:col-span-1",
      badge: "Zero Manual Effort",
      interactiveElement: (
        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-medium">#Justification</span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-[var(--accent-primary)] border border-emerald-500/20 text-xs font-medium">#Grace</span>
          <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-medium">#Discipleship</span>
          <span className="px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/20 text-xs font-medium">#Devotion</span>
        </div>
      )
    },
    {
      title: "Spiritual Devotion & Keepers",
      category: "Reflection & Growth",
      description: "Mark standout sermons as Keepers, track your monthly devotion metrics, and view clean 2x2 desktop grids and mobile carousels.",
      icon: <Heart size={22} className="text-rose-400" />,
      colSpan: "lg:col-span-2",
      badge: "Devotion Metrics",
      interactiveElement: (
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
            <span className="text-lg font-bold text-white block">65</span>
            <span className="text-[10px] text-[var(--accent-primary)]">+12 this mo</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
            <span className="text-lg font-bold text-white block">32</span>
            <span className="text-[10px] text-emerald-400">49% Completed</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
            <span className="text-lg font-bold text-white block">18</span>
            <span className="text-[10px] text-rose-400">Keepers</span>
          </div>
        </div>
      )
    },
    {
      title: "Blazing Fast Local-First",
      category: "Performance & Privacy",
      description: "Your notes live on your device first. Works effortlessly when church Wi-Fi fails, with instant sync when connected.",
      icon: <Zap size={22} className="text-[var(--accent-amber)]" />,
      colSpan: "lg:col-span-1",
      badge: "Instant Offline",
      interactiveElement: (
        <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Zero cloud loading latency</span>
        </div>
      )
    },
    {
      title: "Hands-Free Voice Dictation",
      category: "Spoken Reflection",
      description: "Capture spoken sermon epiphanies and pastor quotes instantly without breaking your devotional train of thought.",
      icon: <Mic size={22} className="text-rose-400" />,
      colSpan: "lg:col-span-2",
      badge: "Speech-to-Text",
      interactiveElement: (
        <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Mic size={15} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">Voice Dictation Active</span>
              <span className="text-[10px] text-white/50">"Grace isn't just pardon; it's power..."</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1 h-3 bg-rose-400 rounded-full animate-bounce" />
            <span className="w-1 h-5 bg-rose-400 rounded-full animate-bounce [animation-delay:0.15s]" />
            <span className="w-1 h-2 bg-rose-400 rounded-full animate-bounce [animation-delay:0.3s]" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-radial-ambient">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[var(--accent-primary)] mb-4">
            <Layers size={14} />
            <span>Core Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Built from the Ground Up for Spiritual Reflection
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Generic note taking apps get cluttered with recipes and work memos. Vessel is dedicated solely to God's Word, prayer, and personal study.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bentoCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`vessel-glass-card p-7 flex flex-col justify-between ${card.colSpan}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-semibold text-white/70 uppercase tracking-wider">
                    {card.badge}
                  </span>
                </div>

                <span className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wider block mb-1">
                  {card.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {card.interactiveElement}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
