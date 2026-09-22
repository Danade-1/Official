"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor, Smartphone, Globe, ExternalLink, Download, CheckCircle2 } from "lucide-react";

const APP_URL = "https://sermon-note-manager-ddaw-i8r8do9e3-danny-077a.vercel.app";

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
            className="relative w-full max-w-lg rounded-3xl bg-[#14171d] border border-white/10 p-6 sm:p-8 shadow-2xl z-10"
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
                Install & Access
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Get Vessel for Your Device
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Choose the best way to run Vessel across your desktop and mobile devices.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Option 1: Web App (Instant / PWA) */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[var(--accent-primary-border)] transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary-dim)] text-[var(--accent-primary)] flex items-center justify-center flex-shrink-0">
                      <Globe size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">Vessel Web Sanctuary</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-primary-dim)] text-[var(--accent-primary)] font-semibold">Recommended</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">
                        Runs instantly in any browser. Click "Install" in Chrome or Edge to pin to your desktop or mobile home screen as a standalone app.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.05] flex justify-end">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-[var(--accent-primary)] hover:brightness-110 transition-all shadow-[0_0_15px_var(--accent-primary-glow)]"
                    style={{ color: "#000000" }}
                  >
                    <span>Launch Web App</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Option 2: Windows Desktop */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Monitor size={20} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">Windows Desktop Edition</span>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      Local-first desktop build for Windows 10 & 11 with native keyboard shortcuts and offline SQLite/IndexedDB caching.
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-[11px] text-white/50">Install via Web App PWA or Direct Link</span>
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-white bg-white/10 hover:bg-white/20 transition-all"
                  >
                    <span>Open in Desktop</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Option 3: Android Mobile */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">Android Mobile Edition</span>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      Add to home screen directly from Chrome on Android for a full-screen native mobile sanctuary with touch bottom dock.
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-[11px] text-white/50">Install via Add to Home Screen</span>
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-white bg-white/10 hover:bg-white/20 transition-all"
                  >
                    <span>Open on Android</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 text-center border-t border-white/[0.06]">
              <span className="text-xs text-[var(--text-muted)]">
                All platforms include Google Cloud Sync & local-first storage.
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
