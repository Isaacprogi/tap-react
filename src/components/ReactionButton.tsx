import { motion, LayoutGroup } from "framer-motion";
import { useReaction } from "../hooks/useReaction";
import ReactionMenu from "./ReactionMenu";
import type { IReactionButton } from "../lib/types";
import { useRef, useId, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const ReactionButton = ({
  reactions,
  currentReactionId,
  displayMode = "icon",
  onReactionSelect,
  enableTooltip = true,
  disabled,
  classNames,
  scaleConfig,
  animationConfig = {
    button: true,
    menu: true,
    items: true,
  },
  menuPosition,
}: IReactionButton) => {
  const {
    button: shouldButtonAnimate,
    menu: shouldMenuAnimate,
    items: shouldItemsAnimate,
  } = animationConfig;

  const { side = "top", align = "start" } = menuPosition ?? {};

  const { selected, setSelected, open, setOpen } = useReaction();

  const instanceId = useId();
  const timeoutRef = useRef<number | null>(null);

  const initialReaction =
    reactions.find((r) => r.id === currentReactionId) ?? reactions[0];

  const selectedReaction = reactions.find((r) => r.id === selected);

  useEffect(() => {
    if (currentReactionId) {
      setSelected(currentReactionId);
    }
  }, [currentReactionId, setSelected]);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = window.setTimeout(() => setOpen(false), 160);
  }

  function createRevert(prev: string) {
    return () => setSelected(prev);
  }

  function handleClick() {
    if (!initialReaction) return;

    const prev = selected || currentReactionId;

    if (selectedReaction) {
      setSelected("");
      onReactionSelect?.("", {
        revert: createRevert(prev),
      });
    } else {
      setSelected(reactions[0].id);
      onReactionSelect?.(reactions[0].id, {
        revert: createRevert(prev),
      });
      setOpen(false);
    }
  }

  function renderContent() {
    if (!initialReaction) return null;

    const displayReaction = selectedReaction || initialReaction;

    const textColorClass =
      selectedReaction?.colorAfterReaction?.text || "text-gray-500";

    const iconColorClass =
      selectedReaction?.colorAfterReaction?.icon || "text-gray-500";

    switch (displayMode) {
      case "icon":
        return (
          <motion.span
            layoutId={`reaction-${instanceId}-${displayReaction.id}`}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={clsx("text-2xl", iconColorClass, classNames.icon)}
          >
            {displayReaction.icon}
          </motion.span>
        );

      case "text":
        return (
          <motion.span
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={clsx(
              "font-medium",
              textColorClass,
              classNames.text
            )}
          >
            {displayReaction.label}
          </motion.span>
        );

      case "both":
        return (
          <span className="flex items-center gap-2">
            <motion.span
              layoutId={`reaction-${instanceId}-${displayReaction.id}`}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={clsx("text-2xl", iconColorClass, classNames.icon)}
            >
              {displayReaction.icon}
            </motion.span>

            <motion.span
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={clsx(
                "font-medium",
                textColorClass,
                classNames.text
              )}
            >
              {displayReaction.label}
            </motion.span>
          </span>
        );

      default:
        return (
          <span className={clsx(iconColorClass, classNames.icon)}>
            {displayReaction.icon}
          </span>
        );
    }
  }

  const menuAlignClasses =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : align === "end"
      ? "right-0"
      : "left-0";

  const menuSideClasses =
    side === "bottom"
      ? "absolute top-full mt-3"
      : "absolute bottom-full mb-3";

  const menuPositionClasses = clsx(
    "z-20",
    menuSideClasses,
    menuAlignClasses
  );

  const menuWrapperClass = twMerge(
    "bg-white z-20",
    classNames.menuWrapperClass
  );

  return (
    <LayoutGroup>
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.button
          disabled={disabled}
          onClick={handleClick}
          whileTap={shouldButtonAnimate ? { scale: 0.95 } : undefined}
          className={clsx(
            "flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 bg-gray-100 text-gray-800 font-medium text-base transition-all duration-200 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50",
            classNames.button
          )}
        >
          {renderContent()}
        </motion.button>

        {open && (
          <div
            className={menuPositionClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={menuWrapperClass}>
              <ReactionMenu
                reactions={reactions}
                onSelect={(id) => {
                  const prev = selected || currentReactionId;

                  setSelected(id);
                  setOpen(false);

                  onReactionSelect?.(id, {
                    revert: createRevert(prev),
                  });
                }}
                enableTooltip={enableTooltip}
                menuClass={classNames.menu}
                menuIconClass={classNames.menuIcon}
                menuItemClass={classNames.menuItem}
                tooltipClass={classNames.tooltip}
                animationEnabled={shouldMenuAnimate}
                itemsAnimated={shouldItemsAnimate}
                scaleConfig={scaleConfig}
              />
            </div>
          </div>
        )}
      </div>
    </LayoutGroup>
  );
};