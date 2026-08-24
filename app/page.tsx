"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Monitor, Smartphone, BookOpen, Feather, Sparkles, CheckCircle2, Cloud, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const rotatingWords = ["sermon notes", "prayer journals", "Bible studies", "reflections"];

export default function LandingPage() {
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 50], ["rgba(15, 17, 20, 0)", "rgba(15, 17, 20, 0.8)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]);
  const navBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-deep)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-sage)] selection:text-white flex flex-col overflow-x-hidden">
      
      {/* Navigation */}
      <motion.nav 
        style={{ backgroundColor: navBg, borderColor: navBorder, backdropFilter: navBlur, WebkitBackdropFilter: navBlur }}
        className="w-full fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
      >
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
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
        </div>
      </motion.nav>

      <main className="flex-1 flex flex-col items-center pt-32 pb-32 relative">
        {/* Parallax Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-[1000px] overflow-hidden -z-10 pointer-events-none">
          <motion.div 
            style={{ y: useTransform(scrollY, [0, 1000], [0, 300]) }}
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--accent-sage)] rounded-full mix-blend-screen filter blur-[150px] opacity-15"
          />
          <motion.div 
            style={{ y: useTransform(scrollY, [0, 1000], [0, 500]) }}
            className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[var(--accent-lavender)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"
          />
        </div>

        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-5xl mx-auto px-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)] mb-8 shadow-sm">
            <Sparkles size={16} className="text-[var(--accent-gold)]" />
            <span>Now available for Desktop & Mobile</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.1] min-h-[140px] md:min-h-[160px]">
            A quiet space for your <br className="hidden md:block" />
            <span className="inline-block relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 right-0 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-sage)] to-[var(--accent-lavender)]"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
              {/* Invisible placeholder to maintain layout width */}
              <span className="opacity-0 pointer-events-none">prayer journals</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Vessel is a beautiful, local-first workspace designed specifically for gathering, organizing, and reflecting on your spiritual insights.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://sermon-note-manager-ddaw-i8r8do9e3-danny-077a.vercel.app"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--text-primary)] text-[var(--bg-deep)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            >
              <BookOpen size={20} />
              Open Web App
            </a>
            
            <a 
              href="#download"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface)] transition-all"
            >
              <Monitor size={20} className="text-[var(--text-secondary)]" />
              Windows
            </a>

            <a 
              href="#download"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface)] transition-all"
            >
              <Smartphone size={20} className="text-[var(--text-secondary)]" />
              Android
            </a>
          </div>
        </motion.div>

        {/* Floating App Mockup */}
        <motion.div 
          className="mt-20 w-full max-w-5xl mx-auto px-6 animate-float"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative rounded-2xl md:rounded-3xl border border-[var(--border)] bg-[var(--bg-glass)] backdrop-blur-xl p-2 md:p-4 shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center">
             {/* Replace with an actual Image tag using the artifacts if available, fallback to a beautiful gradient UI */}
             <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
             <div className="relative z-10 w-full h-full rounded-xl md:rounded-2xl overflow-hidden bg-[var(--bg-deep)] border border-[var(--border)] shadow-inner">
               <Image 
                 src="/mockup1.jpg" 
                 alt="Vessel App Mockup" 
                 fill 
                 className="object-cover opacity-90 transition-opacity hover:opacity-100"
               />
             </div>
          </div>
        </motion.div>

        {/* Infinite Marquee Section */}
        <div className="w-full mt-32 overflow-hidden bg-[var(--bg-surface)] border-y border-[var(--border)] py-6 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-deep)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-deep)] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-[200%] animate-marquee">
            {/* Double the content for seamless looping */}
            <div className="flex w-1/2 justify-around items-center px-4">
              <span className="text-[var(--text-secondary)] font-medium text-lg flex items-center gap-2"><Shield size={20} className="text-[var(--accent-sage)]"/> End-to-End Encryption</span>
              <span className="text-[var(--text-secondary)] font-medium text-lg flex items-center gap-2"><Zap size={20} className="text-[var(--accent-gold)]"/> Blazing Fast Local-First</span>
              <span className="text-[var(--text-secondary)] font-medium text-lg flex items-center gap-2"><Sparkles size={20} className="text-[var(--accent-lavender)]"/> AI Auto-Tagging</span>
              <span className="text-[var(--text-secondary)] font-medium text-lg flex items-center gap-2"><Cloud size={20} className="text-blue-400"/> Cross-Platform Sync</span>
            </div>
            <div className="flex w-1/2 justify-around items-center px-4">
              <span className="text-[var(--text-secondary)] font-medium text-lg flex items-center gap-2"><Shield size={20} className="text-[var(--accent-sage)]"/> End-to-End Encryption</span>
              <span className="text-[var(--text-secondary)] font-medium text-lg flex items-center gap-2"><Zap size={20} className="text-[var(--accent-gold)]"/> Blazing Fast Local-First</span>
              <span className="text-[var(--text-secondary)] font-medium text-lg flex items-center gap-2"><Sparkles size={20} className="text-[var(--accent-lavender)]"/> AI Auto-Tagging</span>
              <span className="text-[var(--text-secondary)] font-medium text-lg flex items-center gap-2"><Cloud size={20} className="text-blue-400"/> Cross-Platform Sync</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-32 w-full max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Crafted for Clarity</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Everything you need to capture inspiration, without the clutter of traditional note-taking apps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-[var(--bg-surface)] border border-[var(--border)] p-8 rounded-2xl relative overflow-hidden group hover:border-[var(--accent-sage)] transition-colors hover:shadow-[0_0_30px_rgba(110,231,183,0.05)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-sage)] opacity-0 blur-[50px] group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 duration-500">
                <CheckCircle2 size={24} className="text-[var(--accent-sage)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Distraction-Free</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed relative z-10">
                A minimalist, typography-focused editor designed to keep you focused on the message, not the interface.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[var(--bg-surface)] border border-[var(--border)] p-8 rounded-2xl relative overflow-hidden group hover:border-[var(--accent-lavender)] transition-colors hover:shadow-[0_0_30px_rgba(167,139,250,0.05)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-lavender)] opacity-0 blur-[50px] group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 duration-500">
                <Sparkles size={24} className="text-[var(--accent-lavender)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">AI Auto-Tagging</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed relative z-10">
                Vessel automatically generates relevant tags and extracts key themes from your notes using advanced AI.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[var(--bg-surface)] border border-[var(--border)] p-8 rounded-2xl relative overflow-hidden group hover:border-blue-400 transition-colors hover:shadow-[0_0_30px_rgba(96,165,250,0.05)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 opacity-0 blur-[50px] group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 duration-500">
                <Cloud size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Seamless Sync</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed relative z-10">
                Sign in with Google to automatically backup and sync your library across Web, Windows, and Android.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)] py-12 px-6 text-center text-[var(--text-secondary)] mt-24">
        <p>© {new Date().getFullYear()} Vessel. Built for spiritual reflection.</p>
      </footer>
    </div>
  );
}
