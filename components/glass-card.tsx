"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { useBackground } from "@/components/background-context";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  dark = false,
  hover = false,
}: GlassCardProps) {
  const { activeLayer } = useBackground();
  const isBright = activeLayer === "morning" || activeLayer === "afternoon";

  // On bright backgrounds, automatically use a darker, heavier glass unless explicitly overridden
  const useDarkGlass = dark || isBright;

  return (
    <div
      className={cn(
        "rounded-3xl transition-all duration-700",
        useDarkGlass ? "glass-dark" : "glass",
        hover && "hover:-translate-y-1 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
