import React from "react";

export type DisplayMode = "icon" | "text" | "both";

export interface Reaction {
  id: string;
  label: string;
  icon: React.ReactNode;
  classNames?: {
    menuItem?: string;
    menuIcon?: string;
    tooltip?: string;
  };
  colorAfterReaction?:{
    text:string
    icon:string
  }
  animationConfig?: {
  button?: boolean;
  menu?: boolean;
  items?: boolean;
 }
}


export interface IReactionButton {
  reactions: Reaction[];
  displayMode?: DisplayMode;

  onReactionSelect?: (
    reaction: string,
    utils: { revert: () => void }
  ) => void;

  disabled: boolean;

  currentReactionId: string;
  enableTooltip?: boolean;

  classNames: {
    button: string;
    text: string;
    icon: string;
    menu: string;
    menuWrapperClass: string;
    menuIcon: string;
    menuItem:string;
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
}






