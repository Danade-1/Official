"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Smartphone,
  BookOpen,
  Search,
  CheckCircle2,
  Bell,
  Heart,
  Calendar,
  Tag,
  Settings,
  Mic,
  Undo2,
  Redo2,
  Type,
  Bold,
  Italic,
  List,
  ListTodo,
  Sparkles,
  Cloud,
  FileText,
  Clock,
  Feather
} from "lucide-react";

export function DeviceShowcase() {
  const [activeView, setActiveView] = useState<"desktop" | "mobile">("desktop");
  const [activeTab, setActiveTab] = useState<"editor" | "scripture" | "properties">("editor");
  const [isRecordingSim, setIsRecordingSim] = useState(false);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-primary-dim)] border border-[var(--accent-primary-border)] text-xs font-semibold text-[var(--accent-primary)] mb-4">
            <Sparkles size={14} />
            <span>Dual Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Crafted for Big Screens & Mobile Sanctuary
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Whether preparing a sermon at your desk or taking quick devotional notes on your phone during Sunday service, Vessel delivers a unified, serene experience.
          </p>

          {/* Desktop / Mobile Switcher Pill */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/[0.04] border border-white/10 mt-8 backdrop-blur-lg">
            <button
              onClick={() => setActiveView("desktop")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeView === "desktop"
                  ? "bg-[var(--accent-primary)] text-black shadow-[0_0_20px_var(--accent-primary-glow)]"
                  : "text-white/70 hover:text-white"
              }`}
              style={activeView === "desktop" ? { color: "#000000" } : {}}
            >
              <Monitor size={15} />
              <span>Desktop Workspace</span>
            </button>

            <button
              onClick={() => setActiveView("mobile")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeView === "mobile"
                  ? "bg-[var(--accent-primary)] text-black shadow-[0_0_20px_var(--accent-primary-glow)]"
                  : "text-white/70 hover:text-white"
              }`}
              style={activeView === "mobile" ? { color: "#000000" } : {}}
            >
              <Smartphone size={15} />
              <span>Mobile Sanctuary</span>
            </button>
          </div>
        </div>

        {/* ============================================================
            DESKTOP VIEWPORT MOCKUP (Full 3-Pane Independent Workspace)
            ============================================================ */}
        <AnimatePresence mode="wait">
          {activeView === "desktop" ? (
            <motion.div
              key="desktop-view"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="device-desktop-frame max-w-6xl mx-auto"
            >
              {/* Desktop Window Title Bar */}
              <div className="h-10 bg-[#161a22] border-b border-white/[0.07] px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-medium text-white/40 ml-2">
                    Vessel Desktop — Romans 12:2 Sermon Note
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[var(--accent-primary)] bg-[var(--accent-primary-dim)] px-2.5 py-0.5 rounded-full border border-[var(--accent-primary-border)] font-medium">
                    Cloud Synced
                  </span>
                </div>
              </div>

              {/* 3-Column Layout: Sidebar + Canvas + Note Inspector */}
              <div className="flex flex-col lg:flex-row min-h-[560px] bg-[var(--bg-deep)]">
                
                {/* 1. Left Narrow Icon Sidebar */}
                <div className="hidden sm:flex flex-col items-center justify-between w-14 lg:w-16 py-5 bg-[#13161c] border-r border-white/[0.06] flex-shrink-0">
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-9 h-9 rounded-xl bg-[var(--accent-primary-dim)] border border-[var(--accent-primary-border)] text-[var(--accent-primary)] flex items-center justify-center shadow-[0_0_12px_var(--accent-primary-dim)]">
                      <Feather size={18} />
                    </div>

                    <div className="flex flex-col items-center gap-4 text-white/40">
                      <button className="p-2 rounded-lg bg-white/[0.08] text-[var(--accent-primary)]">
                        <FileText size={18} />
                      </button>
                      <button className="p-2 rounded-lg hover:text-white transition-colors">
                        <Heart size={18} />
                      </button>
                      <button className="p-2 rounded-lg hover:text-white transition-colors">
                        <Calendar size={18} />
                      </button>
                      <button className="p-2 rounded-lg hover:text-white transition-colors">
                        <BookOpen size={18} />
                      </button>
                      <button className="p-2 rounded-lg hover:text-white transition-colors">
                        <Tag size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <button className="p-2 rounded-lg text-white/40 hover:text-white transition-colors">
                      <Settings size={18} />
                    </button>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-[10px] font-bold text-white">
                      J
                    </div>
                  </div>
                </div>

                {/* 2. Central Editor Canvas */}
                <div className="flex-1 flex flex-col p-6 sm:p-8 relative">
                  {/* Top Canvas Bar */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/[0.06] mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-[var(--text-muted)]">Sunday Series</span>
                      <span className="text-xs text-white/20">/</span>
                      <span className="text-xs font-semibold text-white">Romans: Renewed Mind</span>
                    </div>

                    {/* Command Palette Mock Input */}
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-[var(--text-muted)]">
                      <Search size={13} />
                      <span>Search scriptures & notes...</span>
                      <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/70">⌘K</kbd>
                    </div>
                  </div>

                  {/* Sermon Document Content */}
                  <div className="max-w-2xl">
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2 leading-tight">
                      The Power of Transforming Grace
                    </h1>
                    <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-6">
                      <span>Oct 18, 2026</span>
                      <span>•</span>
                      <span>Speaker: Pastor David Miller</span>
                      <span>•</span>
                      <span className="text-[var(--accent-primary)]">3 min read</span>
                    </div>

                    {/* Formatted Text & Scripture Callout */}
                    <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <p>
                        True spiritual transformation begins with a shift in perspective. Paul emphasizes that the world constantly pressures our thought patterns, but renewal comes from God's Word.
                      </p>

                      {/* Embedded Scripture Blockquote */}
                      <div className="p-4 rounded-xl bg-[var(--accent-primary-dim)] border-l-4 border-[var(--accent-primary)] border-white/[0.06] my-4 shadow-sm">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent-primary)] mb-1.5">
                          <BookOpen size={14} />
                          <span>Romans 12:2 (NIV)</span>
                        </div>
                        <p className="font-serif italic text-white/90 text-sm leading-relaxed">
                          "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will."
                        </p>
                      </div>

                      <p>
                        <strong>Three Steps to Renewing the Mind:</strong>
                      </p>

                      <div className="space-y-2 text-xs text-white/80">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 size={15} className="text-[var(--accent-primary)] flex-shrink-0" />
                          <span>Filter inputs against biblical truth</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 size={15} className="text-[var(--accent-primary)] flex-shrink-0" />
                          <span>Daily meditation and scripture repetition</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 size={15} className="text-[var(--accent-primary)] flex-shrink-0" />
                          <span>Accountability through Christian community</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Bottom Dock Pill inside Desktop Editor */}
                  <div className="mt-8 flex justify-center">
                    <div className="mobile-preview-dock">
                      <button className="mobile-preview-dock-btn active">T</button>
                      <button className="mobile-preview-dock-btn">B</button>
                      <button className="mobile-preview-dock-btn">I</button>
                      <div className="w-px h-4 bg-white/15 mx-0.5" />
                      <button className="mobile-preview-dock-btn"><List size={13} /></button>
                      <button className="mobile-preview-dock-btn"><ListTodo size={13} /></button>
                      <div className="w-px h-4 bg-white/15 mx-0.5" />
                      <button className="mobile-preview-dock-btn active text-[var(--accent-primary)]">
                        <BookOpen size={13} />
                      </button>
                      <button
                        onClick={() => setIsRecordingSim(!isRecordingSim)}
                        className={`mobile-preview-dock-btn text-rose-400 ${isRecordingSim ? "animate-pulse scale-110" : ""}`}
                        title="Voice dictation"
                      >
                        <Mic size={13} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3. Right Note Properties Panel */}
                <div className="w-full lg:w-72 bg-[#13161c] border-t lg:border-t-0 lg:border-l border-white/[0.06] p-6 flex flex-col gap-6 flex-shrink-0">
                  <div>
                    <span className="text-[11px] font-semibold text-[var(--text-muted)] tracking-wider uppercase">
                      Note Properties
                    </span>
                    <div className="mt-3 space-y-3">
                      <div>
                        <span className="text-xs text-white/50 block mb-1">Status</span>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>In Progress</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs text-white/50 block mb-1">Primary Scripture</span>
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-white">
                          <BookOpen size={13} className="text-[var(--accent-primary)]" />
                          <span>Romans 12:1-2</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs text-white/50 block mb-1.5">AI Auto-Tags</span>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[11px] text-[var(--accent-primary)] border border-[var(--accent-primary-border)] font-medium">
                            #Grace
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[11px] text-purple-400 border border-purple-500/30 font-medium">
                            #MindRenewal
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[11px] text-amber-400 border border-amber-500/30 font-medium">
                            #Devotion
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[11px] font-semibold text-[var(--text-muted)] tracking-wider uppercase">
                      Spiritual Devotion
                    </span>
                    <div className="mt-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart size={15} className="text-rose-400 fill-rose-400" />
                        <span className="text-xs text-white font-medium">Marked Keeper</span>
                      </div>
                      <span className="text-[10px] text-[var(--accent-primary)] font-semibold uppercase">Active</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ) : (
            /* ============================================================
               MOBILE VIEWPORT MOCKUP (Phone Frame with Bottom Dock & Carousel)
               ============================================================ */
            <motion.div
              key="mobile-view"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center"
            >
              <div className="device-mobile-frame">
                {/* Phone Speaker Notch */}
                <div className="h-6 bg-[#161920] flex items-center justify-center">
                  <div className="w-16 h-3.5 bg-black rounded-full" />
                </div>

                {/* Phone Content Screen */}
                <div className="p-5 flex flex-col h-[540px] justify-between relative overflow-y-auto">
                  
                  {/* Top App Header */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.07]">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[var(--accent-primary-dim)] text-[var(--accent-primary)] flex items-center justify-center">
                          <Feather size={15} />
                        </div>
                        <span className="font-serif text-base font-bold text-white">Vessel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] text-white/50">Cloud Synced</span>
                      </div>
                    </div>

                    {/* Mobile Stats Carousel Preview */}
                    <div className="mt-4">
                      <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
                        <div className="min-w-[130px] p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                          <span className="text-[10px] text-[var(--accent-primary)] font-semibold block mb-1">
                            +12 this mo
                          </span>
                          <strong className="text-xl font-bold text-white block">65</strong>
                          <span className="text-[11px] text-white/50">Total Sermons</span>
                        </div>

                        <div className="min-w-[130px] p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                          <span className="text-[10px] text-emerald-400 font-semibold block mb-1">
                            49% library
                          </span>
                          <strong className="text-xl font-bold text-white block">32</strong>
                          <span className="text-[11px] text-white/50">Completed</span>
                        </div>

                        <div className="min-w-[130px] p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                          <span className="text-[10px] text-rose-400 font-semibold block mb-1">
                            Favorites
                          </span>
                          <strong className="text-xl font-bold text-white block">18</strong>
                          <span className="text-[11px] text-white/50">Keepers</span>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Sermon Card */}
                    <div className="mt-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-semibold text-[var(--accent-primary)] uppercase tracking-wider">
                          Sunday Sermon
                        </span>
                        <span className="text-[10px] text-white/40">Today, 10:45 AM</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                        The Power of Transforming Grace
                      </h4>
                      <div className="p-2.5 rounded-lg bg-[var(--accent-primary-dim)] border-l-2 border-[var(--accent-primary)] text-xs text-white/90 italic mb-3">
                        "Do not conform to the pattern of this world..." — Rom 12:2
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-[var(--accent-primary)]">
                          #Grace
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-purple-300">
                          #RenewedMind
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Bottom Dock Pill (Mobile Sanctuary Feature) */}
                  <div className="pt-4 flex justify-center">
                    <div className="mobile-preview-dock shadow-2xl">
                      <button className="mobile-preview-dock-btn active">T</button>
                      <button className="mobile-preview-dock-btn">B</button>
                      <button className="mobile-preview-dock-btn">I</button>
                      <div className="w-px h-3.5 bg-white/20 mx-0.5" />
                      <button className="mobile-preview-dock-btn"><Undo2 size={12} /></button>
                      <button className="mobile-preview-dock-btn"><Redo2 size={12} /></button>
                      <div className="w-px h-3.5 bg-white/20 mx-0.5" />
                      <button className="mobile-preview-dock-btn active text-[var(--accent-primary)]">
                        <BookOpen size={13} />
                      </button>
                      <button className="mobile-preview-dock-btn text-rose-500 hover:text-rose-400">
                        <Mic size={13} />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
