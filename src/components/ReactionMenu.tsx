import { motion } from "framer-motion";
import ReactionItem from "./ReactionItem";
import type { iReactionMenu } from "../lib/types";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ReactionMenu({
  reactions,
  onSelect,

  menuClass = "",
  menuItemClass = "",
  menuIconClass = "",
  tooltipClass = "",

  enableTooltip = true,

  animationEnabled = true,
  itemsAnimated = true,
  scaleConfig,
}: iReactionMenu) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.div
      initial={animationEnabled ? { opacity: 0, y: 10, scale: 0.95 } : false}
      animate={animationEnabled ? { opacity: 1, y: 0, scale: 1 } : false}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div
        className={twMerge(
          "flex gap-2 rounded-lg bg-white border shadow-lg py-2 px-4",
          menuClass
        )}
      >
        {reactions.map((reaction) => (
          <ReactionItem
            scaleConfig={scaleConfig}
            key={reaction.id}
            reaction={reaction}
            onSelect={onSelect}
            enableTooltip={enableTooltip}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
            animated={itemsAnimated}
            classNames={{
              menuItem: menuItemClass,
              menuIcon: menuIconClass,
              tooltip: tooltipClass,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}