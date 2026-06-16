"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";
import { GlassCard } from "@/components/glass-card";
import { Footer } from "@/components/footer";
import {
  GlobeIcon,
  RobotIcon,
  ZapIcon,
  SearchIcon,
  ChartIcon,
  WifiIcon,
  BrainIcon,
  LayersIcon,
  LockIcon,
} from "@/components/icons";

const commerceFeatures = [
  {
    title: "Unified Commerce Protocol",
    desc: "One protocol fans out to every channel. Shopify, Amazon, Flipkart, TikTok Shop — connected, synced, and observable from a single pane. No more tab-hoarding like it is 2014.",
    icon: GlobeIcon,
  },
  {
    title: "Agent Orchestration",
    desc: "Aris, the master orchestrator, classifies intent, dispatches specialist agents in parallel or sequence, and synthesizes a unified answer. It is like a group project where everyone actually does their part.",
    icon: RobotIcon,
  },
  {
    title: "Durable Workflows",
    desc: "Temporal-backed execution means agent runs survive crashes, retries, and long waits. Human-in-the-loop pauses resume exactly where they stopped. Even if your server has an existential crisis.",
    icon: ZapIcon,
  },
  {
    title: "Vector Product Search",
    desc: "Semantic lookup across your catalogue. Describe a product in plain language and find matches without remembering SKUs. 'That blue thing with the buttons' is now a valid query.",
    icon: SearchIcon,
  },
  {
    title: "Inventory Ledger",
    desc: "Available and reserved quantities are tracked separately, preventing oversells under concurrent orders and high-traffic events. Because nothing kills the vibe like selling something you do not have.",
    icon: ChartIcon,
  },
  {
    title: "Real-Time Agent UI",
    desc: "WebSocket-powered AG-UI streams structured agent intents straight to native React components. No markdown, no guesswork. Just clean, live updates that do not look like a terminal from the 90s.",
    icon: WifiIcon,
  },
];

const techHighlights = [
  {
    title: "Next.js 15 Dashboard",
    desc: "The face of the product. Fast, interactive, and built for real-time agent updates.",
    icon: BrainIcon,
  },
  {
    title: "Go Modular Monolith",
    desc: "ops-api handles commerce, identity, PIM, OMS, inventory, and webhooks in one efficient binary with shared connection pooling.",
    icon: LayersIcon,
  },
  {
    title: "Agent Microservice",
    desc: "agent-server runs Google ADK agents and Temporal workflows. Agents never touch the database directly — they are untrusted clients.",
    icon: RobotIcon,
  },
  {
    title: "Defense in Depth",
    desc: "Firebase JWTs, SPIFFE agent identity, PostgreSQL RLS, sqlc type-safe queries, and full audit logging. Basically, we take security very seriously.",
    icon: LockIcon,
  },
];

export default function FeaturesPage() {
  return (
    <main className="pt-32">
      <section className="px-[6vw] pb-12">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              The Weirdly ODD
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] tracking-[-0.05em] leading-[0.95] mb-6 max-w-[900px]">
              Everything that makes ORYXA{" "}
              <span className="text-gradient-accent">odd</span>.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-lg text-muted leading-[1.7] max-w-[680px] mb-16">
              Under the hood, ORYXA (internal codename Synq) stitches together
              modern commerce primitives with autonomous agents. Here is what
              that looks like — no emojis, no fluff, just the good stuff.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commerceFeatures.map((feature, i) => (
              <SectionReveal key={feature.title} delay={0.2 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <GlassCard className="p-8 h-full">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-white/[0.08] border border-white/10 text-accent">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {feature.desc}
                    </p>
                  </GlassCard>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack section */}
      <section className="px-[6vw] py-24">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
              The Stack
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[-0.04em] leading-[0.95] mb-6 max-w-[800px]">
              Built weird. Built right.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-lg text-muted leading-[1.7] max-w-[680px] mb-12">
              Three moving parts, one clean idea: a dashboard you love, a Go
              backend that does the work, and AI agents that never clock out.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {techHighlights.map((tech, i) => (
              <SectionReveal key={tech.title} delay={0.3 + i * 0.1}>
                <GlassCard className="p-8 hover">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.08] border border-white/10 text-accent shrink-0">
                      <tech.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {tech.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.5}>
            <GlassCard className="p-8 md:p-12" dark>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="font-display text-5xl font-bold text-gradient-accent mb-2">
                    3
                  </p>
                  <p className="text-muted">Core Services</p>
                </div>
                <div>
                  <p className="font-display text-5xl font-bold text-gradient-accent mb-2">
                    24/7
                  </p>
                  <p className="text-muted">Agent Uptime</p>
                </div>
                <div>
                  <p className="font-display text-5xl font-bold text-gradient-accent mb-2">
                    0
                  </p>
                  <p className="text-muted">Excel Sheets Required</p>
                </div>
              </div>
            </GlassCard>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
