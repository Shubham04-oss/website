"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 px-[6vw] py-12 text-center text-muted text-sm border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          <strong className="text-text font-display">ORYXA</strong> — The
          Weirdly ODD Commerce OS.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/features" className="hover:text-text transition-colors">
            Features
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-text transition-colors"
          >
            Dashboard
          </Link>
          <Link href="/beta" className="hover:text-text transition-colors">
            Beta
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} ORYXA. Built odd.</p>
      </div>
    </footer>
  );
}
