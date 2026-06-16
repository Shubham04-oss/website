"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionReveal } from "@/components/section-reveal";
import { GlassCard } from "@/components/glass-card";
import { Footer } from "@/components/footer";
import { BrainIcon, GearIcon, EyeIcon, SparkleIcon } from "@/components/icons";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative px-[6vw]">
        <div className="max-w-7xl mx-auto w-full">
          <SectionReveal>
            <div className="max-w-[920px]">
              <p className="text-accent text-sm md:text-base uppercase tracking-[0.2em] font-semibold mb-4">
                The Weirdly ODD
              </p>
              <h1 className="font-display text-[clamp(4rem,13vw,11rem)] font-bold tracking-[-0.07em] leading-[0.85] mb-6">
                <span className="text-gradient">ORYXA</span>
                <span className="text-gradient-accent inline-block italic -rotate-2">
                  .
                </span>
              </h1>
              <p className="text-[clamp(1.25rem,2.4vw,1.85rem)] text-muted max-w-[680px] leading-[1.45] mb-10">
                A 24/7 proactive multi-agent workspace for commerce operations.
                Your team gets AI. The work gets done while you sleep. You just
                take the credit.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/beta"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold bg-text text-void hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Join the Beta
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold glass hover:bg-white/10 transition-all"
                >
                  See how it works
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs uppercase tracking-[0.1em]"
        >
          <span className="w-6 h-10 border border-white/20 rounded-full relative">
            <motion.span
              animate={{ top: ["0.4rem", "1.2rem"], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/2 -translate-x-1/2 w-1 h-1.5 bg-text rounded-full"
            />
          </span>
          Scroll
        </motion.div>
      </section>

      {/* Workspace */}
      <section className="min-h-screen flex items-center px-[6vw] py-24">
        <div className="max-w-7xl mx-auto w-full">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
              The Workspace
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-[-0.04em] leading-[0.95] mb-6 max-w-[900px]">
              AI beside your people. AI doing the work.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-lg text-muted leading-[1.7] max-w-[680px] mb-12">
              ORYXA is not another chatbot that answers &ldquo;have you tried
              restarting it?&rdquo;. It is a living operations layer where agents
              observe, decide, and execute across your commerce stack —
              inventory, orders, support, pricing, fulfillment — while your
              humans steer the things that actually matter.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <SectionReveal delay={0.3}>
              <GlassCard className="p-10 min-h-[340px] flex flex-col justify-between hover">
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-white/[0.08] border border-white/10 text-accent">
                    <BrainIcon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-3">
                    AI for your employees
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Every teammate gets context-aware assistance. Summaries,
                    next-best actions, anomalies, forecasts — surfaced before
                    anyone asks. Like Clippy, but actually useful and not
                    annoying.
                  </p>
                </div>
              </GlassCard>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <GlassCard className="p-10 min-h-[340px] flex flex-col justify-between hover">
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-white/[0.08] border border-white/10 text-accent-2">
                    <GearIcon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-3">
                    AI that does the work
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Autonomous agents run the repetitive, time-sensitive,
                    always-on parts of commerce. They never sleep, never miss a
                    pattern, never forget a rule. They also do not ask for a
                    raise.
                  </p>
                </div>
              </GlassCard>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="min-h-screen flex items-center px-[6vw] py-24">
        <div className="max-w-7xl mx-auto w-full">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
              Capabilities
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-[-0.04em] leading-[0.95] mb-6 max-w-[900px]">
              Weirdly odd. Fiercely reliable.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-lg text-muted leading-[1.7] max-w-[680px] mb-12">
              Odd is how we think commerce should feel: surprising, adaptive,
              alive. Reliable is how it must run: precise, secure, and always
              on. No cap.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Always Awake",
                desc: "Multi-agent coordination runs round the clock. Handoffs, retries, escalations — managed automatically across time zones. While you are in bed. Probably doomscrolling.",
                icon: EyeIcon,
              },
              {
                num: "02",
                title: "Proactive Decisions",
                desc: "Agents do not wait for tickets. They detect drift, forecast demand, adjust pricing, and surface risks before they become problems. Basically, they are the friend who tells you about the typo before you post.",
                icon: SparkleIcon,
              },
              {
                num: "03",
                title: "Commerce Native",
                desc: "Built for the messy middle of operations: orders, inventory, fulfillment, support, finance — connected, not siloed. Because your data deserves better than living in 17 different spreadsheets.",
                icon: GearIcon,
              },
            ].map((cap, i) => (
              <SectionReveal key={cap.num} delay={0.3 + i * 0.1}>
                <GlassCard className="p-8 min-h-[360px] hover">
                  <div className="flex items-center justify-between mb-6">
                    <div className="font-display text-6xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] leading-none">
                      {cap.num}
                    </div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.08] border border-white/10 text-accent">
                      <cap.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-[0.95rem]">
                    {cap.desc}
                  </p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="min-h-screen flex items-center justify-center px-[6vw] py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
              Currently Building
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-[-0.04em] leading-[0.95] mb-6">
              ORYXA is in private beta.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-lg text-muted leading-[1.7] mb-10">
              We are onboarding a small group of operations-heavy commerce
              teams. If you want AI that actually does the work — odd,
              opinionated, and relentless — request access. Be an early adopter.
              It looks good on LinkedIn.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-text text-void hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Request Early Access
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
