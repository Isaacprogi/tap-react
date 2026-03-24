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
    classNames.menuItem,
    reaction.classNames?.menuItem
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
    <div className="ipr-relative ipr-flex ipr-items-center ipr-justify-center ipr-shrink-0">
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
              `ipr-absolute ipr--top-10 ipr-z-50
               ipr-px-2 ipr-py-1 ipr-text-xs ipr-text-white ipr-bg-gray-800
               ipr-rounded-md ipr-whitespace-nowrap ipr-shadow-lg
               ipr-pointer-events-none`,
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
          "ipr-text-5xl ipr-flex ipr-items-center ipr-justify-center ipr-bg-transparent ipr-border-none ipr-outline-none ipr-cursor-pointer",
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