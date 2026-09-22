"use client";

import { Feather, BookOpen, ExternalLink, Heart } from "lucide-react";

const APP_URL = "https://sermon-note-manager-ddaw-i8r8do9e3-danny-077a.vercel.app";

export function Footer() {
  return (
    <footer className="relative bg-[#080a0d] border-t border-white/[0.08] overflow-hidden">
      
      {/* Pre-Footer Call to Action Banner */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-20 pb-16">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#161a22] to-[#101318] border border-white/10 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[var(--accent-primary-dim)] rounded-full blur-[120px] pointer-events-none opacity-50" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-[var(--accent-primary-dim)] border border-[var(--accent-primary-border)] text-[var(--accent-primary)] flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_var(--accent-primary-dim)]">
              <Feather size={24} />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
              Begin Your Spiritual Journey in Vessel
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
              A distraction-free, local-first sanctuary for your sermon notes, Bible studies, and prayer journals. Instant access on Web, Windows, and Android.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base text-black bg-[var(--accent-primary)] hover:brightness-110 transition-all shadow-[0_0_35px_var(--accent-primary-glow)] hover:scale-[1.02] active:scale-[0.98]"
                style={{ color: "#000000" }}
              >
                <BookOpen size={18} />
                <span>Launch Vessel Now — Free</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Copyright */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[var(--text-muted)]">
        
        {/* Brand & Mission */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--accent-primary)]">
            <Feather size={15} />
          </div>
          <span className="font-serif font-bold text-sm text-white">Vessel</span>
          <span>•</span>
          <span>A quiet space for spiritual reflection</span>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex items-center gap-6 font-medium text-white/60">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#experience" className="hover:text-white transition-colors">Desktop & Mobile</a>
          <a href="#scripture" className="hover:text-white transition-colors">Scripture Tool</a>
          <a href="#platforms" className="hover:text-white transition-colors">Platforms</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a
            href="https://github.com/Danade-1/Official"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>

        {/* Copyright */}
        <div>
          <span>© {new Date().getFullYear()} Vessel. Built for spiritual devotion.</span>
        </div>

      </div>

    </footer>
  );
}
