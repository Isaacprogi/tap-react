import { clsx, type ClassValue } from "clsx";
import type { Reaction } from "./types";
import { useSound } from "../hooks/useSound";
import { useMemo } from "react";

export const mergeClass = (...inputs: ClassValue[]) => {
  return clsx(inputs);
};

export function defineReactionsConfig(config: Reaction[]) {
  return config;
}

export function useSoundMap(reactions:Reaction[], enabled:boolean | undefined) {
  const sounds = reactions.map((r) => useSound(r.sound, enabled));
  return useMemo(() => {
    const map: Record<string, () => void> = {};
    reactions.forEach((r, i) => {
      map[r.id] = sounds[i].play;
    });
    return map;
  }, [reactions, sounds]);
}