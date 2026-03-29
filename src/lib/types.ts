import React from "react";

export type DisplayMode = "icon" | "text" | "both";

export interface SoundConfig {
  enabled?: boolean;
  playOn?: "hover" | "click" | "manual";
  onManualTrigger?: (play: () => void) => void;
}

export interface Reaction {
  id: string;
  label: string;
  icon: React.ReactNode;
  classNames?: {
    menuItem?: string;
    menuIcon?: string;
    tooltip?: string;
  };
  afterReactionClassNames?: {
  text?: string;
  icon?: string;
  button?: string;
};
  animationConfig?: {
  button?: boolean;
  menu?: boolean;
  items?: boolean;
 }
 sound?:string;
}


export interface IReactionButton {
  reactions: Reaction[];
  displayMode?: DisplayMode;

  onReactionSelect?: (
    reaction: string,
    utils: { revert: () => void }
  ) => void;

  disabled?: boolean;

  currentReactionId?: string;
  enableTooltip?: boolean;

  classNames?: {
    button?: string;
    text?: string;
    icon?: string;
    menu?: string;
    menuWrapper?: string;
    menuIcon?: string;
    menuItem?:string;
    tooltip?: string;
  };

  animationConfig?: {
    button?: boolean;
    menu?: boolean;
    items?: boolean;
  };

  scaleConfig?: {
    hoverScale?: number;
    shrinkFactor?: number;
    shouldShrink?: boolean;
    scaleType?: "up" | "down" | "center";
  };

  menuPosition?: {
    side?: "top" | "bottom";
    align?: "start" | "center" | "end";
  };
   soundConfig?: SoundConfig
}


export interface iReactionMenu {
  reactions: Reaction[];
  onSelect: (id: string) => void;

  menuClass?: string;
  menuItemClass?: string;
  menuIconClass?: string;
  enableTooltip?: boolean;

  tooltipClass?: string;

  animationEnabled?: boolean;
  itemsAnimated?: boolean;
  scaleConfig?: {
    hoverScale?: number;
    shrinkFactor?: number;
    shouldShrink?: boolean;
    scaleType?: "up" | "down" | "center";
  };
   soundConfig?: SoundConfig
}




export interface IReactionItem {
  reaction: Reaction;
  onSelect: (id: string) => void;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  animated?: boolean;
   soundConfig?: SoundConfig
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
  enableTooltip:boolean
}



