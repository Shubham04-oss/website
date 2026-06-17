"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useBackground,
  type BackgroundLayer,
} from "@/components/background-context";

const layers: { id: BackgroundLayer; src: string }[] = [
  { id: "night", src: "/night.svg" },
  { id: "dawn", src: "/dawn.svg" },
  { id: "morning", src: "/morning.svg" },
  { id: "afternoon", src: "/afternoon.svg" },
];

const layerMap = new Map(layers.map((l) => [l.id, l]));

export function AmbientBackground() {
  const { activeLayer, setActiveLayer } = useBackground();
  const [prevLayer, setPrevLayer] = useState<BackgroundLayer | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      let next: BackgroundLayer = "night";
      if (progress >= 0.75) next = "afternoon";
      else if (progress >= 0.5) next = "morning";
      else if (progress >= 0.25) next = "dawn";

      if (next !== activeLayer) {
        setPrevLayer(activeLayer);
        setActiveLayer(next);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLayer, setActiveLayer]);

  // Only keep active + previous in DOM (crossfade), then drop previous after transition
  const [showPrev, setShowPrev] = useState(true);
  useEffect(() => {
    if (prevLayer) {
      setShowPrev(true);
      const t = setTimeout(() => {
        setPrevLayer(null);
        setShowPrev(false);
      }, 1800);
      return () => clearTimeout(t);
    }
  }, [prevLayer]);

  const activeSrc = layerMap.get(activeLayer)?.src;
  const prevSrc = prevLayer ? layerMap.get(prevLayer)?.src : null;

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-void">
      {/* Active SVG */}
      {activeSrc && (
        <img
          key={activeLayer}
          src={activeSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      )}

      {/* Fading-out previous SVG (only during crossfade) */}
      {showPrev && prevSrc && (
        <img
          key={prevLayer}
          src={prevSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover animate-[fadeOut_1.6s_ease-in-out_forwards]"
          draggable={false}
        />
      )}

      {/* Screen blend — lightens dark areas with color */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-[0.12]"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(185,255,44,1), transparent 60%), radial-gradient(circle at 70% 80%, rgba(255,78,205,1), transparent 60%)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 25% 20%, rgba(185,255,44,0.08), transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,78,205,0.06), transparent 50%)",
        }}
      />

      {/* Orbs — smaller blur for perf */}
      <div
        className="absolute -top-[10vh] -right-[12vw] w-[40vw] h-[40vw] rounded-full animate-float opacity-30 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(185,255,44,0.22), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[8vh] -left-[10vw] w-[35vw] h-[35vw] rounded-full animate-float opacity-25 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,78,205,0.2), transparent 70%)",
          animationDelay: "-6s",
        }}
      />

      {/* Light vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, transparent 25%, rgba(5,5,7,0.35) 60%, rgba(5,5,7,0.7) 100%)",
        }}
      />

      {/* Faint grain */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
