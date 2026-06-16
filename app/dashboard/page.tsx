"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";
import { GlassCard } from "@/components/glass-card";
import { Footer } from "@/components/footer";

const metrics = [
  { label: "Revenue", value: "$48,291", change: "+12.4%", positive: true },
  { label: "Orders", value: "1,204", change: "+8.1%", positive: true },
  { label: "Conversion", value: "3.8%", change: "-0.4%", positive: false },
  { label: "AOV", value: "$40.12", change: "+2.3%", positive: true },
];

const channels = [
  { name: "Shopify", share: 42, color: "bg-accent" },
  { name: "Amazon", share: 28, color: "bg-accent-2" },
  { name: "Flipkart", share: 18, color: "bg-blue-400" },
  { name: "TikTok Shop", share: 12, color: "bg-purple-400" },
];

const alerts = [
  "Wireless Headphones — 23 left in Mumbai",
  "2 campaigns ready for review",
  "Estimated profit today: $8,420",
  "Agent restocked SKU-8841 automatically",
];

export default function DashboardPage() {
  return (
    <main className="pt-32">
      <section className="px-[6vw] pb-24">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              The Weirdly ODD
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] tracking-[-0.05em] leading-[0.95] mb-6 max-w-[900px]">
              Your commerce brain, in one view.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-lg text-muted leading-[1.7] max-w-[680px] mb-16">
              This is what you see when you open ORYXA: live numbers, channel
              health, and a feed of agent activity keeping things moving. It is
              like a command center, but without the stress sweat.
            </p>
          </SectionReveal>

          {/* Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metrics.map((m, i) => (
              <SectionReveal key={m.label} delay={0.3 + i * 0.08}>
                <GlassCard className="p-6 hover">
                  <p className="text-sm text-muted mb-1">{m.label}</p>
                  <p className="font-display text-4xl font-bold mb-2">
                    {m.value}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      m.positive ? "text-accent" : "text-accent-2"
                    }`}
                  >
                    {m.change}
                  </p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>

          {/* Main dashboard grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            <SectionReveal delay={0.5} className="lg:col-span-2">
              <GlassCard className="p-8 h-full">
                <h3 className="font-display text-2xl font-bold mb-6">
                  Revenue This Week
                </h3>
                <div className="flex items-end justify-between gap-2 h-64">
                  {[35, 52, 44, 61, 58, 74, 68].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.08, duration: 0.8 }}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-accent/40 to-accent"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-sm text-muted">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (d) => (
                      <span key={d}>{d}</span>
                    )
                  )}
                </div>
              </GlassCard>
            </SectionReveal>

            <SectionReveal delay={0.6}>
              <GlassCard className="p-8 h-full">
                <h3 className="font-display text-2xl font-bold mb-6">
                  Sales by Channel
                </h3>
                <div className="space-y-5">
                  {channels.map((c) => (
                    <div key={c.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{c.name}</span>
                        <span className="text-muted">{c.share}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${c.share}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.7 }}
                          className={`h-full ${c.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </SectionReveal>
          </div>

          {/* Alerts */}
          <SectionReveal delay={0.7}>
            <GlassCard className="p-8 mt-6" dark>
              <h3 className="font-display text-2xl font-bold mb-6">
                Live Agent Feed
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {alerts.map((alert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm">{alert}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
