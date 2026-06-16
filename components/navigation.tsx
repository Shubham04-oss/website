"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/beta", label: "Beta" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] px-[4vw] py-5 flex items-center justify-between"
      style={{
        background: "linear-gradient(180deg, rgba(5,5,7,0.75), transparent)",
      }}
    >
      <Link
        href="/"
        className="font-display text-2xl md:text-3xl font-bold tracking-[-0.07em] hover:opacity-80 transition-opacity"
      >
        ORYXA
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm text-muted">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-text transition-colors relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/beta"
          className="hidden sm:inline-flex px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.08em] text-accent glass hover:bg-white/10 transition-colors"
        >
          Private Beta
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-text block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-text block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-text block"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={
          isOpen
            ? { opacity: 1, pointerEvents: "auto" as const }
            : { opacity: 0, pointerEvents: "none" as const }
        }
        className="fixed inset-0 top-16 z-50 bg-void/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-4xl font-bold hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
