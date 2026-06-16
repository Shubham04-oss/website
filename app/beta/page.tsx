"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";
import { GlassCard } from "@/components/glass-card";
import { Footer } from "@/components/footer";

export default function BetaPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-32 min-h-screen flex flex-col">
      <section className="px-[6vw] pb-24 flex-1 flex items-center">
        <div className="max-w-3xl mx-auto w-full text-center">
          <SectionReveal>
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              The Weirdly ODD
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] tracking-[-0.05em] leading-[0.95] mb-6">
              Be odd. Be first.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-lg text-muted leading-[1.7] mb-10">
              ORYXA is currently in private beta. We are onboarding a small
              group of multi-channel commerce teams who want AI agents doing
              real operational work — not just replying &ldquo;I can help with that.&rdquo;
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <GlassCard dark className="p-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <h3 className="font-display text-2xl font-bold mb-2">
                      Request early access
                    </h3>
                    <p className="text-muted mb-8">
                      Join the waitlist. We will reach out shortly.
                    </p>
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-5 py-4 rounded-full bg-black/40 border border-white/10 text-text placeholder:text-muted outline-none focus:border-accent transition-colors"
                      />
                      <button
                        type="submit"
                        className="px-8 py-4 rounded-full font-semibold bg-text text-void hover:shadow-lg hover:-translate-y-0.5 transition-all"
                      >
                        Join Beta
                      </button>
                    </form>
                    <p className="text-sm text-muted mt-5">
                      Limited spots. No spam. Weirdly human support.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-3xl mx-auto mb-6 text-accent">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-8 h-8"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">
                      You are on the list.
                    </h3>
                    <p className="text-muted">
                      We will reach out at {email} when a spot opens up.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
