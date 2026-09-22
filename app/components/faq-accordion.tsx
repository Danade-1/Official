"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is Vessel free to use?",
    answer: "Yes, Vessel is completely free to use. There are no subscriptions, ads, or locked features. We believe spiritual reflection should be accessible to everyone."
  },
  {
    question: "Does Vessel work offline without internet?",
    answer: "Yes! Vessel is built using a local-first architecture. All your sermons, notes, and scriptures are stored locally on your device first. If your church sanctuary has spotty Wi-Fi, you can take notes with zero lag, and your notes will sync automatically once reconnected."
  },
  {
    question: "How does cloud sync and backup work?",
    answer: "You can sign in using your Google account to automatically backup and sync your notes across devices. If you prefer to stay offline or private, Vessel also supports a complete local mode where no data ever leaves your device."
  },
  {
    question: "What Bible translations can I reference in my notes?",
    answer: "Vessel supports major Bible translations including NIV, ESV, KJV, CSB, and NASB. You can search any scripture in the side panel or embed rich scripture quotes directly into your notes."
  },
  {
    question: "How does AI Auto-Tagging organize my sermon library?",
    answer: "Vessel analyzes the biblical text and notes you enter to identify core scriptural themes, topics, and cross-references (such as #Grace, #Romans, #Faith, #Discipleship), allowing you to search and group your library without manual tagging."
  },
  {
    question: "Can I install Vessel as an app on my phone or computer?",
    answer: "Yes! Vessel is a Progressive Web App (PWA) that installs as a native application on Windows, Mac, iOS, and Android. You can also download dedicated builds for Windows desktop and Android devices."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[var(--bg-deep)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[var(--accent-primary)] mb-3">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Common Questions About Vessel
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            Everything you need to know about privacy, offline access, and spiritual reflection.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="vessel-glass-card border border-white/[0.07] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:text-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white/90">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[var(--accent-primary-dim)] text-[var(--accent-primary)]" : "text-white/60"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
