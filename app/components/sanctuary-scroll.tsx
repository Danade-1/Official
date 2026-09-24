"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, ExternalLink, Feather, ChevronRight, CheckCircle2, Bookmark } from "lucide-react";
import Image from "next/image";
import { APP_URL } from "../constants";

interface ScripturePin {
  id: string;
  reference: string;
  text: string;
  context: string;
  sermonTopic: string;
  tags: string[];
  x: number; // percentage from left
  y: number; // percentage from top
}

const scripturePins: ScripturePin[] = [
  {
    id: "luke",
    reference: "Luke 2:10-11",
    text: "And the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.",
    context: "The Annunciation to the Shepherds in Bethlehem. Classical proclamation of hope, peace, and eternal goodwill.",
    sermonTopic: "The Architecture of Joy in Troubled Times",
    tags: ["Advent", "Joy", "Proclamation"],
    x: 62,
    y: 52
  },
  {
    id: "psalm",
    reference: "Psalm 119:105",
    text: "Thy word is a lamp unto my feet, and a light unto my path.",
    context: "Davidic poetic reflection on divine wisdom guiding each individual step through unfamiliar valleys.",
    sermonTopic: "Walking in Divine Guidance",
    tags: ["Wisdom", "Direction", "Psalms"],
    x: 36,
    y: 58
  },
  {
    id: "romans",
    reference: "Romans 12:2",
    text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
    context: "Pauline theology of active mental and spiritual renewal through immersion in truth.",
    sermonTopic: "The Power of Transforming Grace",
    tags: ["Mind Renewal", "Discipleship", "Epistles"],
    x: 48,
    y: 38
  }
];

export function SanctuaryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPin, setSelectedPin] = useState<ScripturePin>(scripturePins[0]);
  const [isInspectorOpen, setIsInspectorOpen] = useState(true);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.4]);

  return (
    <section
      ref={containerRef}
      id="sanctuary"
      className="py-28 relative overflow-hidden bg-[#07090c]"
    >
      {/* Background Volumetric Light Ray simulation */}
      <motion.div
        style={{ opacity: auraOpacity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-gradient-to-b from-emerald-500/15 via-amber-500/10 to-transparent blur-[120px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400 mb-4 shadow-[0_0_20px_rgba(110,231,183,0.15)]">
            <Bookmark size={14} />
            <span>Living Scripture Experience</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-5 tracking-tight leading-tight">
            Rooted in Sacred Scripture, <br className="hidden sm:inline" />
            Designed for Deep Thought
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Before a sermon becomes notes, it begins with reverence in the Word. Vessel blends centuries of sacred physical heritage with an intuitive, distraction-free modern sanctuary.
          </p>

          <p className="text-xs sm:text-sm text-emerald-400/90 font-medium mt-3 flex items-center justify-center gap-1.5">
            <Sparkles size={14} />
            <span>Scroll & click the glowing scripture pins on the Bible to preview instant integration</span>
          </p>
        </div>

        {/* Cinematic Scrollable Image Experience Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.8)] bg-black">
          
          {/* Top Brass / Chrome Header */}
          <div className="h-11 bg-[#13161c] border-b border-white/[0.08] px-5 flex items-center justify-between z-20 relative">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="text-xs font-serif font-semibold text-white/90 tracking-wide">
                Sanctuary View — Classical Illumination
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-[11px] text-white/50">
                Interactive Biblical Study
              </span>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
              >
                <span>Open in Vessel</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Main Visual Container with Parallax Zoom */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden select-none">
            <motion.div
              style={{ scale: imageScale, y: imageY }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/images/bible-sanctuary.jpg"
                alt="Open antique Holy Bible in a candlelit sanctuary with stained glass light"
                fill
                priority
                className="object-cover object-center filter contrast-[1.04]"
              />

              {/* Ambient Vignette & Emerald Light Wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none" />
            </motion.div>

            {/* Interactive Scripture Pins on the Physical Bible */}
            {scripturePins.map((pin) => {
              const isSelected = selectedPin.id === pin.id;
              return (
                <motion.button
                  key={pin.id}
                  onClick={() => {
                    setSelectedPin(pin);
                    setIsInspectorOpen(true);
                  }}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing Aura Rings */}
                    <span
                      className={`absolute w-9 h-9 rounded-full ${
                        isSelected
                          ? "bg-emerald-400/40 animate-ping"
                          : "bg-amber-400/20 group-hover:bg-emerald-400/30"
                      }`}
                    />
                    <span
                      className={`absolute w-6 h-6 rounded-full blur-[4px] ${
                        isSelected ? "bg-emerald-400/60" : "bg-amber-400/40"
                      }`}
                    />

                    {/* Central Pin Core */}
                    <div
                      className={`relative px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-xl transition-all border ${
                        isSelected
                          ? "bg-emerald-400 text-black border-emerald-300 shadow-[0_0_20px_#34d399]"
                          : "bg-[#14171d]/90 text-white/95 border-white/25 hover:border-emerald-400 hover:text-emerald-300 backdrop-blur-md"
                      }`}
                    >
                      <BookOpen size={12} className={isSelected ? "text-black" : "text-emerald-400"} />
                      <span>{pin.reference}</span>
                    </div>
                  </div>
                </motion.button>
              );
            })}

            {/* Interactive Floating Vessel Scripture Inspector Card */}
            <AnimatePresence>
              {isInspectorOpen && selectedPin && (
                <motion.div
                  initial={{ opacity: 0, y: 25, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md z-40"
                >
                  <div className="rounded-2xl bg-[#14171d]/95 border border-emerald-500/30 p-5 shadow-2xl backdrop-blur-xl text-left">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <Feather size={13} />
                        </div>
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          Vessel Scripture Link
                        </span>
                      </div>

                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {selectedPin.reference}
                      </span>
                    </div>

                    <p className="font-serif italic text-white/90 text-sm leading-relaxed mb-3">
                      "{selectedPin.text}"
                    </p>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3.5">
                      {selectedPin.context}
                    </p>

                    {/* Integrated Sermon Topic Draft */}
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-4">
                      <span className="text-[10px] text-[var(--text-muted)] font-medium block uppercase tracking-wider mb-1">
                        Attached Sermon Outline
                      </span>
                      <h4 className="text-xs font-semibold text-white mb-2">
                        {selectedPin.sermonTopic}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedPin.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Action Button */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-white/50 flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-emerald-400" />
                        <span>Indexed in Vessel Studio</span>
                      </span>

                      <a
                        href={APP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-all shadow-[0_0_15px_rgba(110,231,183,0.3)]"
                      >
                        <span>Study in App</span>
                        <ChevronRight size={13} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Bottom Feature Pill Bar */}
          <div className="bg-[#101318] p-4 sm:p-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-6 text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-white/80 font-medium">Bilingual & Classical Translations (KJV, NIV, ESV)</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-white/80 font-medium">Instant One-Click Scripture Insertion</span>
              </div>
            </div>

            <span className="text-[11px] text-white/40">
              Zero distractions • 100% offline accessible
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
