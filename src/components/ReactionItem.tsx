import { motion, AnimatePresence } from "framer-motion";
import type { Reaction } from "../lib/types";
import { mergeClass } from "../lib/utils";

interface Props {
  reaction: Reaction;
  onSelect: (id: string) => void;

  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;

  animated?: boolean;
  enableTooltip?: boolean;

  classNames?: {
    menuItem?: string;
    menuIcon?: string;
    tooltip?: string;
  };

  scaleConfig?: {
    hoverScale?: number;
    shrinkFactor?: number;
    shouldShrink?: boolean;
    scaleType?: "up" | "down" | "center";
  };
}

export default function ReactionItem({
  reaction,
  onSelect,
  hoveredId,
  setHoveredId,
  enableTooltip = true,
  animated = true,
  scaleConfig,
  classNames = {},
}: Props) {
  const isHovered = hoveredId === reaction.id;

  const {
    hoverScale = 1.25,
    shrinkFactor = 0.7,
    shouldShrink = true,
    scaleType = "up",
  } = scaleConfig || {};

  const shouldShrinkItem =
    shouldShrink && hoveredId !== null && !isHovered;

  const hoverText = reaction.label ?? reaction.id;

  const itemClass = mergeClass(
    reaction.classNames?.menuItem,
    classNames.menuItem,
  );

  const iconClass = mergeClass(
    classNames.menuIcon,
    reaction.classNames?.menuIcon
  );

  const tooltipClass = mergeClass(
    classNames.tooltip,
    reaction.classNames?.tooltip
  );

  const yMap = {
    up: -6,
    down: 6,
    center: 0,
  } as const;

  const y = isHovered ? (yMap[scaleType] ?? 0) : 0;

  const scale = isHovered
    ? hoverScale
    : shouldShrinkItem
    ? shrinkFactor
    : 1;

  return (
    <div className="relative flex items-center justify-center shrink-0">
      <AnimatePresence>
        {enableTooltip && isHovered && (
          <motion.div
            initial={
              animated ? { opacity: 0, y: 10, scale: 0.9 } : undefined
            }
            animate={
              animated ? { opacity: 1, y: 0, scale: 1 } : undefined
            }
            exit={
              animated ? { opacity: 0, y: 10, scale: 0.9 } : undefined
            }
            transition={
              animated
                ? { type: "spring", stiffness: 500, damping: 30 }
                : undefined
            }
            className={mergeClass(
              `absolute -top-10 z-50
               px-2 py-1 text-xs text-white bg-gray-800
               rounded-md whitespace-nowrap shadow-lg
               pointer-events-none`,
              tooltipClass
            )}
          >
            {hoverText}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={() => setHoveredId(reaction.id)}
        onMouseLeave={() => setHoveredId(null)}
        onClick={() => onSelect(reaction.id)}
        className={mergeClass(
          "text-5xl flex items-center justify-center bg-transparent border-none outline-none cursor-pointer",
          itemClass
        )}
        animate={
          animated
            ? {
                scale,
                y,
              }
            : undefined
        }
        whileTap={animated ? { scale: 1.1 } : undefined}
        transition={
          animated
            ? { type: "spring", stiffness: 500, damping: 28 }
            : undefined
        }
      >
        <motion.span className={mergeClass(iconClass)} layout>
          {reaction.icon}
        </motion.span>
      </motion.button>
    </div>
  );
}