import { motion, LayoutGroup } from "framer-motion";
import { useReaction } from "../hooks/useReaction";
import ReactionMenu from "./ReactionMenu";
import type { IReactionButton } from "../lib/types";
import { useRef, useId, useEffect } from "react";
import { mergeClass } from "../lib/utils";
import { useSound } from "../hooks/useSound";
import styles from "../styles/ReactionButton.module.css";
import { useSoundMap } from "../lib/utils";
import clsx from "clsx";
import { useAnimation } from "framer-motion";

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
  soundConfig,
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

  const controls = useAnimation();

  const handleTap = async () => {
  if (!shouldButtonAnimate) return;

  controls.stop();

  await controls.start({
    scale: [1, 0.3, 1.05, 1],
    transition: {
      duration: 0.3,
      times: [0, 0.4, 0.7, 1],
      ease: "easeOut",
    },
  });
};

  const soundMap = useSoundMap(reactions, soundConfig?.enabled);

  const initialReaction =
    reactions.find((r) => r.id === currentReactionId) ?? reactions[0];
  const selectedReaction = reactions.find((r) => r.id === selected);

  useEffect(() => {
    if (currentReactionId) setSelected(currentReactionId);
  }, [currentReactionId, setSelected]);

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => setOpen(false), 160);
  };

  const createRevert = (prev: any) => () => setSelected(prev);

  const { play: playSound } = useSound(
    reactions[0].sound,
    soundConfig?.enabled,
  );

  const handleMouseEnter = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setOpen(true);

    if (soundConfig?.enabled && soundConfig.playOn === "hover") {
      playSound();
    }
  };

  const handleClick = () => {
    if (!initialReaction) return;
    const prev = selected || currentReactionId;

    if (selectedReaction) {
      setSelected("");
      onReactionSelect?.("", { revert: createRevert(prev) });
    } else {
      if (soundConfig?.enabled && soundConfig.playOn === "click") {
        soundMap[reactions[0].id]?.();
      }

      if (soundConfig?.playOn === "manual") {
        soundConfig?.onManualTrigger?.(soundMap[reactions[0].id]);
      }

      setSelected(reactions[0].id);
      onReactionSelect?.(reactions[0].id, { revert: createRevert(prev) });
      setOpen(false);
    }
  };

  let afterButton = "";

  if (selectedReaction) {
    afterButton =
      selectedReaction.afterReactionClassNames?.button || styles.buttonActive;
  }

  function renderContent() {
    if (!initialReaction) return null;
    const displayReaction = selectedReaction || initialReaction;

    const textClass =
      selectedReaction?.afterReactionClassNames?.text ||
      (selectedReaction
        ? styles.textActive
        : classNames?.text
          ? classNames.text
          : styles.textDefault);

    const iconClass =
      selectedReaction?.afterReactionClassNames?.icon ||
      (selectedReaction
        ? styles.textActive
        : classNames?.icon
          ? classNames.icon
          : styles.textDefault);

    switch (displayMode) {
      case "icon":
        return (
          <motion.span
            layoutId={`reaction-${instanceId}-${displayReaction.id}`}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={mergeClass(iconClass)}
          >
            {displayReaction.icon}
          </motion.span>
        );

      case "text":
        return (
          <motion.span
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={mergeClass(textClass)}
          >
            {displayReaction.label}
          </motion.span>
        );

      case "both":
        return (
          <>
            <motion.span
              layoutId={`reaction-${instanceId}-${displayReaction.id}`}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={mergeClass(iconClass)}
            >
              {displayReaction.icon}
            </motion.span>
            <motion.span
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={mergeClass(textClass)}
            >
              {displayReaction.label}
            </motion.span>
          </>
        );

      default:
        return (
          <span className={mergeClass(iconClass)}>{displayReaction.icon}</span>
        );
    }
  }

  const menuPositionClasses = mergeClass(
    styles.menuContainer,
    side === "bottom" ? styles.sideBottom : styles.sideTop,
    align === "center"
      ? styles.alignCenter
      : align === "end"
        ? styles.alignEnd
        : styles.alignStart,
  );

  return (
    <LayoutGroup>
      <div
        className={clsx(styles.container, "tap-root")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.button
          disabled={disabled}
          onMouseEnter={handleMouseEnter}
          onClick={() => {
            handleClick();
            if (shouldButtonAnimate) {
              handleTap();
            }
          }}
          initial={{ scale: 1 }}  
          animate={controls}
          className={mergeClass(
            shouldButtonAnimate && styles.buttonBaseTransition,
            selectedReaction &&
              selectedReaction?.afterReactionClassNames?.button
              ? afterButton
              : classNames?.button
                ? classNames.button
                : styles.buttonBase,
          )}
          
        >
          {renderContent()}
        </motion.button>

        {open && !disabled && (
          <div
            className={menuPositionClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={classNames?.menuWrapper || styles.menuWrapper}>
              <ReactionMenu
                reactions={reactions}
                onSelect={(id) => {
                  const prev = selected || currentReactionId;
                  setSelected(id);

                  if (soundConfig?.playOn === "manual") {
                    soundConfig.onManualTrigger?.(soundMap[id]);
                  }
                  setOpen(false);
                  onReactionSelect?.(id, { revert: createRevert(prev) });
                }}
                enableTooltip={enableTooltip}
                menuClass={classNames?.menu}
                menuIconClass={classNames?.menuIcon}
                menuItemClass={classNames?.menuItem}
                tooltipClass={classNames?.tooltip}
                animationEnabled={shouldMenuAnimate}
                itemsAnimated={shouldItemsAnimate}
                scaleConfig={scaleConfig}
                soundConfig={soundConfig}
              />
            </div>
          </div>
        )}
      </div>
    </LayoutGroup>
  );
};
