"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor, Smartphone, Globe, ExternalLink, Download, CheckCircle2, ShieldCheck } from "lucide-react";
import { APP_URL } from "../constants";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlatform?: "windows" | "android";
}

export function DownloadModal({ isOpen, onClose, defaultPlatform }: DownloadModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-3xl bg-[#14171d] border border-white/10 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <div className="mb-6">
              <span className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wider block mb-1">
                Unified Access Hub
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Get Vessel Sanctuary
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                Choose how you want to experience Vessel. Launch instantly in your browser or install dedicated native builds.
              </p>
            </div>

            <div className="space-y-4">
              {/* Option 1: Web App (Instant / PWA) */}
              <div className={`p-4 sm:p-5 rounded-2xl bg-white/[0.03] border transition-all ${
                !defaultPlatform ? "border-[var(--accent-primary-border)] bg-[var(--accent-primary-dim)]/20 shadow-lg shadow-black/20" : "border-white/[0.08] hover:border-white/20"
              }`}>
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[var(--accent-primary-dim)] text-[var(--accent-primary)] flex items-center justify-center flex-shrink-0 border border-[var(--accent-primary-border)] shadow-sm">
                    <Globe size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base font-bold text-white">Vessel Web Sanctuary</span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[var(--accent-primary-dim)] text-[var(--accent-primary)] font-semibold border border-[var(--accent-primary-border)]">Instant</span>
                      </div>
                      <span className="text-[11px] text-[var(--text-muted)] font-mono">0 KB (PWA)</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                      Zero installation required. Instant launch in Chrome, Safari, Edge with full offline service worker caching and automatic cloud sync.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-[var(--text-muted)]">Recommended for quick access</span>
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-[var(--accent-primary)] hover:brightness-110 transition-all shadow-[0_0_20px_var(--accent-primary-glow)] hover:scale-105 active:scale-95"
                    style={{ color: "#000000" }}
                  >
                    <span>Launch Web App</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Option 2: Windows Desktop (.exe) */}
              <div className={`p-4 sm:p-5 rounded-2xl bg-white/[0.03] border transition-all ${
                defaultPlatform === "windows" ? "border-purple-500/60 bg-purple-500/[0.06] shadow-lg shadow-purple-950/30" : "border-white/[0.08] hover:border-white/20"
              }`}>
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0 border border-purple-500/20 shadow-sm">
                    <Monitor size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base font-bold text-white">Windows Desktop Edition</span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30">.EXE</span>
                      </div>
                      <span className="text-[11px] text-[var(--text-muted)] font-mono">204 MB</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                      Standalone desktop app for Windows 10 & 11 with keyboard shortcuts (Ctrl+K), distraction-free fullscreen writing, and SQLite local storage.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] text-[var(--text-muted)]">Includes auto-updater</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/Danade-1/Official/releases/download/v1.0.0/vessel-setup.exe"
                      download="vessel-setup.exe"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-all shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:scale-105 active:scale-95"
                    >
                      <Download size={14} />
                      <span>Download .EXE</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Option 3: Android Mobile (.apk) */}
              <div className={`p-4 sm:p-5 rounded-2xl bg-white/[0.03] border transition-all ${
                defaultPlatform === "android" ? "border-orange-500/60 bg-orange-500/[0.06] shadow-lg shadow-orange-950/30" : "border-white/[0.08] hover:border-white/20"
              }`}>
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0 border border-orange-500/20 shadow-sm">
                    <Smartphone size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base font-bold text-white">Android Mobile Edition</span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 font-semibold border border-orange-500/30">.APK</span>
                      </div>
                      <span className="text-[11px] text-[var(--text-muted)] font-mono">5.9 MB</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                      Optimized mobile companion with voice memo dictation, touch bottom dock pill, offline sanctuary reading, and sermon audio recording.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] text-[var(--text-muted)]">Compatible with Android 8.0+</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/Danade-1/Official/releases/download/v1.0.0/vessel.apk"
                      download="vessel.apk"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 transition-all shadow-[0_0_15px_rgba(249,115,22,0.35)] hover:scale-105 active:scale-95"
                    >
                      <Download size={14} />
                      <span>Download .APK</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 text-center border-t border-white/[0.06] flex items-center justify-center gap-2 text-xs text-[var(--text-muted)]">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Safe & direct downloads • Google Cloud Sync • 100% Free & Open Source</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
