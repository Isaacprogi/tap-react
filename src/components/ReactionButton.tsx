import { motion, LayoutGroup } from "framer-motion";
import { useReaction } from "../hooks/useReaction";
import ReactionMenu from "./ReactionMenu";
import type {  IReactionButton } from "../lib/types";
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
      selectedReaction?.colorAfterReaction?.text || "ipr-text-gray-500";

    const iconColorClass =
      selectedReaction?.colorAfterReaction?.icon || "ipr-text-gray-500";

    switch (displayMode) {
      case "icon":
        return (
          <motion.span
            layoutId={`reaction-${instanceId}-${displayReaction.id}`}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={clsx("ipr-text-2xl", iconColorClass, classNames.icon)}
          >
            {displayReaction.icon}
          </motion.span>
        );

      case "text":
        return (
          <motion.span
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={clsx(
              "ipr-font-medium",
              textColorClass,
              classNames.text
            )}
          >
            {displayReaction.label}
          </motion.span>
        );

      case "both":
        return (
          <span className="ipr-flex ipr-items-center ipr-gap-2">
            <motion.span
              layoutId={`reaction-${instanceId}-${displayReaction.id}`}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={clsx("ipr-text-2xl", iconColorClass, classNames.icon)}
            >
              {displayReaction.icon}
            </motion.span>

            <motion.span
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={clsx(
                "ipr-font-medium",
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
      ? "ipr-left-1/2 ipr--translate-x-1/2"
      : align === "end"
      ? "ipr-right-0"
      : "ipr-left-0";

  const menuSideClasses =
    side === "bottom"
      ? "ipr-absolute ipr-top-full ipr-mt-3"
      : "ipr-absolute ipr-bottom-full ipr-mb-3";

  const menuPositionClasses = clsx(
    "ipr-z-20",
    menuSideClasses,
    menuAlignClasses
  );

  const menuWrapperClass = twMerge(
    "ipr-bg-white ipr-z-20",
    classNames.menuWrapperClass
  );

  return (
    <LayoutGroup>
      <div
        className="ipr-relative ipr-inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.button
          disabled={disabled}
          onClick={handleClick}
          whileTap={shouldButtonAnimate ? { scale: 0.95 } : undefined}
          className={clsx(
            "ipr-flex ipr-items-center ipr-gap-2 ipr-px-5 ipr-py-3 ipr-rounded-full ipr-border ipr-border-gray-300 ipr-bg-gray-100 ipr-text-gray-800 ipr-font-medium ipr-text-base ipr-transition-all ipr-duration-200 hover:ipr-bg-gray-200 disabled:ipr-cursor-not-allowed disabled:ipr-opacity-50",
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
                menuItemClass={classNames.menuIcon}
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