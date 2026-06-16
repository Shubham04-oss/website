"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
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

export function AmbientBackground() {
  const { activeLayer, setActiveLayer } = useBackground();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      if (progress < 0.25) setActiveLayer("night");
      else if (progress < 0.5) setActiveLayer("dawn");
      else if (progress < 0.75) setActiveLayer("morning");
      else setActiveLayer("afternoon");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveLayer]);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
      {/* SVG layers */}
      {layers.map((layer) => (
        <motion.div
          key={layer.id}
          initial={false}
          animate={{
            opacity: activeLayer === layer.id ? 1 : 0,
            scale: activeLayer === layer.id ? 1 : 1.05,
          }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-[-2%] w-[104%] h-[104%]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={layer.src}
            alt=""
            className="w-full h-full object-cover saturate-[1.08]"
          />
        </motion.div>
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, transparent 0%, rgba(5,5,7,0.55) 70%, rgba(5,5,7,0.92) 100%), linear-gradient(180deg, rgba(5,5,7,0.4) 0%, rgba(5,5,7,0.1) 40%, rgba(5,5,7,0.5) 100%)",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute -top-[10vh] -right-[12vw] w-[45vw] h-[45vw] rounded-full animate-float opacity-45 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(185,255,44,0.35), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[8vh] -left-[10vw] w-[38vw] h-[38vw] rounded-full animate-float opacity-45 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,78,205,0.32), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute top-[45vh] left-[35vw] w-[28vw] h-[28vw] rounded-full animate-float opacity-45 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(120,180,255,0.25), transparent 70%)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}
