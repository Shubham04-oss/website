"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const layerOrder = ["night", "dawn", "morning", "afternoon"];

export function BackgroundLoader() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const total = layerOrder.length;
    let timedOut = false;

    // Safety timeout: dismiss loader after 15s even if images haven't loaded
    const timer = setTimeout(() => {
      timedOut = true;
      setLoaded(true);
    }, 15000);

    const advance = () => {
      if (timedOut) return;
      loadedCount += 1;
      setProgress(Math.round((loadedCount / total) * 100));
      if (loadedCount === total) {
        setTimeout(() => setLoaded(true), 400);
      }
    };

    const handlers = layerOrder.map((id) => {
      const img = new Image();
      img.src = `/${id}.svg`;
      const onLoad = () => advance();
      const onError = () => advance();
      img.addEventListener("load", onLoad);
      img.addEventListener("error", onError);
      if (img.complete) onLoad();
      return { img, onLoad, onError };
    });

    return () => {
      clearTimeout(timer);
      handlers.forEach(({ img, onLoad, onError }) => {
        img.removeEventListener("load", onLoad);
        img.removeEventListener("error", onError);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-[-0.06em] mb-8"
          >
            <span className="text-gradient">ORYXA</span>
          </motion.div>

          <div className="w-64 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-accent-2"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <p className="mt-4 text-sm text-muted uppercase tracking-widest">
            Waking the agents… {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
