"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, Smartphone, ArrowRight, BookOpen, Feather, Sparkles, CheckCircle2, Cloud } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-deep)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-sage)] selection:text-white flex flex-col overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="w-full flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-2 text-[var(--accent-sage)]">
          <Feather size={28} />
          <span className="font-serif text-2xl font-bold tracking-tight text-white">Vessel</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://sermon-note-manager-ddaw-i8r8do9e3-danny-077a.vercel.app" className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm font-medium hidden sm:block">
            Open Web App
          </a>
          <a 
            href="https://sermon-note-manager-ddaw-i8r8do9e3-danny-077a.vercel.app"
            className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center pt-24 pb-32 px-6 relative">
        {/* Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-[600px] overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--accent-sage)] rounded-full mix-blend-screen filter blur-[150px] opacity-15"></div>
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[var(--accent-lavender)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        </div>

        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)] mb-8 shadow-sm">
            <Sparkles size={16} className="text-[var(--accent-gold)]" />
            <span>Now available for Desktop & Mobile</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.1]">
            A quiet space for your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-sage)] to-[var(--accent-lavender)]">
              sermon notes
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Vessel is a beautiful, local-first workspace designed specifically for gathering, organizing, and reflecting on your spiritual insights.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://sermon-note-manager-ddaw-i8r8do9e3-danny-077a.vercel.app"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--text-primary)] text-[var(--bg-deep)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <BookOpen size={20} />
              Open Web App
            </a>
            
            <a 
              href="#download"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface)] transition-all"
            >
              <Monitor size={20} className="text-[var(--text-secondary)]" />
              Download for Windows
            </a>

            <a 
              href="#download"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface)] transition-all"
            >
              <Smartphone size={20} className="text-[var(--text-secondary)]" />
              Download for Android
            </a>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <div className="bg-[var(--bg-surface)] border border-[var(--border)] p-8 rounded-2xl relative overflow-hidden group hover:border-[var(--accent-sage)] transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-sage)] opacity-5 blur-[50px] group-hover:opacity-10 transition-opacity"></div>
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <CheckCircle2 size={24} className="text-[var(--accent-sage)]" />
            </div>
            <h3 className="text-xl font-bold mb-3 relative z-10">Distraction-Free</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed relative z-10">
              A minimalist, typography-focused editor designed to keep you focused on the message, not the interface.
            </p>
          </div>

          <div className="bg-[var(--bg-surface)] border border-[var(--border)] p-8 rounded-2xl relative overflow-hidden group hover:border-[var(--accent-lavender)] transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-lavender)] opacity-5 blur-[50px] group-hover:opacity-10 transition-opacity"></div>
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Sparkles size={24} className="text-[var(--accent-lavender)]" />
            </div>
            <h3 className="text-xl font-bold mb-3 relative z-10">AI Auto-Tagging</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed relative z-10">
              Vessel automatically generates relevant tags and extracts key themes from your notes using advanced AI.
            </p>
          </div>

          <div className="bg-[var(--bg-surface)] border border-[var(--border)] p-8 rounded-2xl relative overflow-hidden group hover:border-blue-400 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 opacity-5 blur-[50px] group-hover:opacity-10 transition-opacity"></div>
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Cloud size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 relative z-10">Seamless Sync</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed relative z-10">
              Sign in with Google to automatically backup and sync your library across Web, Windows, and Android.
            </p>
          </div>
        </motion.div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)] py-12 px-6 text-center text-[var(--text-secondary)]">
        <p>© {new Date().getFullYear()} Vessel. Built for spiritual reflection.</p>
      </footer>
    </div>
  );
}
