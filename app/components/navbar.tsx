"use client";

import { useState, useEffect } from "react";
import { Feather, Menu, X, ExternalLink, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { APP_URL } from "../constants";

interface NavbarProps {
  onOpenDownload?: () => void;
}

export function Navbar({ onOpenDownload }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Scripture Tool", href: "#scripture" },
    { label: "Platforms", href: "#platforms" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(11,13,16,0.85)] backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] py-3.5 shadow-lg shadow-black/30"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[var(--accent-primary-dim)] border border-[var(--accent-primary-border)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-105 transition-transform shadow-[0_0_15px_var(--accent-primary-dim)]">
            <Feather size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-[var(--accent-primary)] transition-colors">
              Vessel
            </span>
            <span className="text-[10px] tracking-wider uppercase text-[var(--text-muted)] -mt-1 font-medium">
              Sermon Sanctuary
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[var(--accent-primary)] hover:text-white font-semibold transition-colors duration-200"
          >
            <span>Test Web App</span>
            <ExternalLink size={13} />
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDownload}
            className="px-4 py-2 rounded-full text-xs font-semibold text-[var(--text-secondary)] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all"
          >
            Downloads
          </button>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-[var(--accent-primary)] hover:brightness-110 transition-all shadow-[0_0_20px_var(--accent-primary-glow)] hover:scale-105 active:scale-95"
            style={{ color: "#000000" }}
          >
            <span>Launch App</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[rgba(14,17,22,0.98)] border-b border-white/10 px-6 py-6 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDownload?.();
                  }}
                  className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white bg-white/5 border border-white/10"
                >
                  Download Options (Windows & Android)
                </button>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-center text-sm font-semibold text-black bg-[var(--accent-primary)] shadow-[0_0_20px_var(--accent-primary-glow)]"
                  style={{ color: "#000000" }}
                >
                  Launch Vessel Web App
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
