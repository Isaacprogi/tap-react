import { useEffect, useRef, useCallback } from "react";

export function useSound(soundUrl?: string, enabled: boolean = true) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (soundUrl) {
      const audio = new Audio(soundUrl);
      audio.preload = "auto";
      audio.volume = 0.5;
      audioRef.current = audio;
    }

    return () => {
      audioRef.current = null;
    };
  }, [soundUrl]);

  const play = useCallback(async () => {
    if (!enabled || !audioRef.current) return;

    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch (error) {
      console.log(error)
    }
  }, [enabled]);

  return { play };
}