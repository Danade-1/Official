"use client";

import { Shield, Zap, Sparkles, Cloud, BookOpen, Feather, Smartphone, Lock } from "lucide-react";

export function MarqueeTicker() {
  const items = [
    { icon: <Shield size={17} className="text-[var(--accent-primary)]" />, text: "End-to-End Privacy & Local Storage" },
    { icon: <Zap size={17} className="text-[var(--accent-amber)]" />, text: "Instant Offline Speed" },
    { icon: <Sparkles size={17} className="text-[var(--accent-lavender)]" />, text: "AI Topic & Theme Auto-Tagging" },
    { icon: <Cloud size={17} className="text-blue-400" />, text: "Google Cloud Cross-Device Sync" },
    { icon: <BookOpen size={17} className="text-[var(--accent-primary)]" />, text: "Instant Scripture Book & Chapter Insertion" },
    { icon: <Smartphone size={17} className="text-rose-400" />, text: "PWA Mobile & Desktop Native Experience" },
    { icon: <Lock size={17} className="text-emerald-400" />, text: "Zero Subscriptions or Paywalls" },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#111419] border-y border-white/[0.08] py-4 relative select-none">
      {/* Left/Right Fading Vignettes */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[var(--bg-deep)] to-transparent z-10 pointer-events-none" />

      {/* Continuously Scrolling Track */}
      <div className="flex w-max marquee-track">
        {/* Set 1 */}
        <div className="flex shrink-0 items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
          {items.map((item, idx) => (
            <div
              key={`set1-${idx}`}
              className="flex items-center gap-3 shrink-0 whitespace-nowrap text-xs sm:text-sm font-medium text-[var(--text-secondary)]"
            >
              <span className="shrink-0">{item.icon}</span>
              <span className="text-white/85 tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Set 2 (Identical Track for Seamless Infinite Loop) */}
        <div aria-hidden="true" className="flex shrink-0 items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
          {items.map((item, idx) => (
            <div
              key={`set2-${idx}`}
              className="flex items-center gap-3 shrink-0 whitespace-nowrap text-xs sm:text-sm font-medium text-[var(--text-secondary)]"
            >
              <span className="shrink-0">{item.icon}</span>
              <span className="text-white/85 tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
