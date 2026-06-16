"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type BackgroundLayer = "night" | "dawn" | "morning" | "afternoon";

interface BackgroundContextValue {
  activeLayer: BackgroundLayer;
  setActiveLayer: Dispatch<SetStateAction<BackgroundLayer>>;
}

const BackgroundContext = createContext<BackgroundContextValue | undefined>(
  undefined
);

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [activeLayer, setActiveLayer] = useState<BackgroundLayer>("night");

  return (
    <BackgroundContext.Provider value={{ activeLayer, setActiveLayer }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const ctx = useContext(BackgroundContext);
  if (!ctx) {
    throw new Error("useBackground must be used within BackgroundProvider");
  }
  return ctx;
}
