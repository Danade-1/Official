"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Check, Copy, Sparkles, ArrowRight } from "lucide-react";

interface ScripturePreset {
  reference: string;
  translation: string;
  text: string;
  theme: string;
}

const PRESETS: ScripturePreset[] = [
  {
    reference: "Romans 12:2",
    translation: "NIV",
    text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.",
    theme: "Transformation & Renewed Mind"
  },
  {
    reference: "Psalm 23:1-3",
    translation: "ESV",
    text: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.",
    theme: "Peace & Rest in God"
  },
  {
    reference: "Philippians 4:6-7",
    translation: "NIV",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds.",
    theme: "Prayer & Freedom from Anxiety"
  },
  {
    reference: "Hebrews 11:1",
    translation: "ESV",
    text: "Now faith is the assurance of things hoped for, the conviction of things not seen.",
    theme: "Unshakable Faith"
  },
  {
    reference: "Proverbs 3:5-6",
    translation: "CSB",
    text: "Trust in the Lord with all your heart, and do not rely on your own understanding; in all your ways know him, and he will make your paths straight.",
    theme: "Trust & Divine Guidance"
  }
];

export function ScriptureDemo() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeScripture = PRESETS[selectedIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${activeScripture.text}" — ${activeScripture.reference} (${activeScripture.translation})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="scripture" className="py-24 relative overflow-hidden bg-[#0c0e12]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-primary-dim)] border border-[var(--accent-primary-border)] text-xs font-semibold text-[var(--accent-primary)] mb-3">
            <BookOpen size={14} />
            <span>Interactive Verse Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Scripture Embedded in Your Reflections
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Never toggle between Bible tabs again. In Vessel, lookup passages in the side panel and insert formatted scripture quotes with a single keystroke.
          </p>
        </div>

        {/* Interactive Workspace Widget */}
        <div className="vessel-glass-card p-6 sm:p-10 border border-white/10 shadow-2xl relative">
          
          {/* Quick Verse Pills Bar */}
          <div className="mb-8">
            <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider block mb-3">
              Select a Passage to Preview Citation:
            </span>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((preset, idx) => (
                <button
                  key={preset.reference}
                  onClick={() => setSelectedIdx(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    selectedIdx === idx
                      ? "bg-[var(--accent-primary)] text-black shadow-[0_0_15px_var(--accent-primary-glow)]"
                      : "bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/[0.08] border border-white/5"
                  }`}
                  style={selectedIdx === idx ? { color: "#000000" } : {}}
                >
                  <BookOpen size={13} />
                  <span>{preset.reference}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Formatted Scripture Note Rendering */}
          <div className="rounded-2xl bg-[#0f1217] border border-white/[0.08] p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)]" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  Sermon Note Citation Block
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-[var(--accent-primary)] bg-[var(--accent-primary-dim)] px-2.5 py-0.5 rounded-full border border-[var(--accent-primary-border)] font-medium hidden sm:inline-block">
                  {activeScripture.theme}
                </span>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80 hover:text-white transition-colors"
                  title="Copy formatted verse"
                >
                  {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copied ? "Copied" : "Copy Quote"}</span>
                </button>
              </div>
            </div>

            {/* Animated Scripture Blockquote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScripture.reference}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-xl bg-[var(--accent-primary-dim)] border-l-4 border-[var(--accent-primary)] my-2"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent-primary)] mb-2 uppercase tracking-wider">
                  <BookOpen size={15} />
                  <span>{activeScripture.reference} ({activeScripture.translation})</span>
                </div>
                <p className="font-serif italic text-lg sm:text-xl text-white/95 leading-relaxed">
                  "{activeScripture.text}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Note Context Simulation */}
            <div className="mt-6 pt-4 text-xs text-[var(--text-secondary)] flex items-center justify-between border-t border-white/[0.04]">
              <span>Inserted into sermon: <em>Renewed in Christ (Pastor Miller)</em></span>
              <span className="text-[var(--accent-primary)] font-medium">Ready for study</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
