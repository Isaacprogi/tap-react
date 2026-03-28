import { motion, AnimatePresence } from "framer-motion";
import type { IReactionItem } from "../lib/types";
import { useMemo } from "react";
import { useSound } from "../hooks/useSound";
import styles from "../styles/ReactionItem.module.css";
import { useRef } from "react";

const Y_MAP = {
  up: -6,
  down: 6,
  center: 0,
} as const;

type ScaleType = keyof typeof Y_MAP;

export default function ReactionItem({
  reaction,
  onSelect,
  hoveredId,
  setHoveredId,
  enableTooltip = true,
  animated = true,
  scaleConfig,
  classNames = {},
  soundConfig
}: IReactionItem) {
  const isHovered = hoveredId === reaction.id;
   const timeoutRef = useRef<number | null>(null);

  const { play: playSound } = useSound(reaction.sound, soundConfig?.enabled);

  const config = useMemo(
    () => ({
      hoverScale: scaleConfig?.hoverScale ?? 1.25,
      shrinkFactor: scaleConfig?.shrinkFactor ?? 0.7,
      shouldShrink: scaleConfig?.shouldShrink ?? true,
      scaleType: (scaleConfig?.scaleType ?? "center") as ScaleType,
    }),
    [scaleConfig],
  );

  const shouldShrinkItem =
    config.shouldShrink && hoveredId !== null && !isHovered;

  const y = isHovered ? Y_MAP[config.scaleType] : 0;
  const scale = isHovered
    ? config.hoverScale
    : shouldShrinkItem
      ? config.shrinkFactor
      : 1;

  const customTooltip = reaction.classNames?.tooltip ?? classNames.tooltip;
  const customMenuItem = reaction.classNames?.menuItem ?? classNames.menuItem;
  const customMenuIcon = reaction.classNames?.menuIcon ?? classNames.menuIcon;

  const handleMouseEnter = () => {
    setHoveredId(reaction.id)
  if (timeoutRef.current) window.clearTimeout(timeoutRef.current);

  if (soundConfig?.enabled && soundConfig.playOn === "hover") {
    playSound();
  }
};

  const handlePlaySound = () => {
  if (!soundConfig?.enabled) return;

  if (soundConfig.playOn === "click") {
    playSound();
  }
};

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {enableTooltip && isHovered && (
          <motion.div
            initial={animated ? { opacity: 0, y: 10, scale: 0.9 } : undefined}
            animate={animated ? { opacity: 1, y: 0, scale: 1 } : undefined}
            exit={animated ? { opacity: 0, y: 10, scale: 0.9 } : undefined}
            className={customTooltip || styles.tooltip}
          >
            {reaction.label ?? reaction.id}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHoveredId(null)}
        onClick={() => {
          onSelect(reaction.id);
          handlePlaySound()
        }}
        className={customMenuItem || styles.menuItem}
        animate={animated ? { scale, y } : undefined}
        whileTap={animated ? { scale: 1.1 } : undefined}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <motion.span
          className={customMenuIcon || styles.menuIcon}
          layout
        >
          {reaction.icon}
        </motion.span>
      </motion.button>
    </div>
  );
}
