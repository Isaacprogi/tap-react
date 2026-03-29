import { ThumbsUp, Heart, Gift, Sparkles, Flame } from "lucide-react";

import likeSound from "../assets/sounds/like.mp3";
import heartSound from "../assets/sounds/love.mp3";
import celebrateSound from "../assets/sounds/celebrate.mp3";
import wowSound from "../assets/sounds/wow.mp3";
import fireSound from "../assets/sounds/fire.mp3";

import { defineReactionsConfig } from "../lib/utils";

export const reactions = defineReactionsConfig([
  {
    id: "like",
    label: "Like",
    icon: <ThumbsUp />,
    classNames: {
      menuIcon:
        "p-2 rounded-full text-gray-600 border hover:text-blue-500 hover:bg-blue-50",
      tooltip:
        "absolute -top-10  -translate-x-1/2 px-2 py-1 rounded bg-blue-500 text-white text-xs whitespace-nowrap",
    },
    afterReactionClassNames: {
      text: "text-blue-500",
      icon: "text-blue-500",
    },
    sound: likeSound,
  },
  {
    id: "love",
    label: "Love",
    icon: <Heart />,
    classNames: {
      menuIcon:
        "p-2 rounded-full text-gray-600 border hover:text-red-500 hover:bg-red-50",
      tooltip:
        "absolute -top-10  -translate-x-1/2 px-2 py-1 rounded bg-red-500 text-white text-xs whitespace-nowrap",
    },
    afterReactionClassNames: {
      text: "text-red-500",
      icon: "text-red-500",
    },
    sound: heartSound,
  },
  {
    id: "celebrate",
    label: "Celebrate",
    icon: <Gift />,
    classNames: {
      menuIcon:
        "p-2 rounded-full text-gray-600 border hover:text-purple-500 hover:bg-purple-50",
      tooltip:
        "absolute -top-10  -translate-x-1/2 px-2 py-1 rounded bg-purple-500 text-white text-xs whitespace-nowrap",
    },
    afterReactionClassNames: {
      text: "text-purple-500",
      icon: "text-purple-500",
    },
    sound: celebrateSound,
  },
  {
    id: "wow",
    label: "Wow",
    icon: <Sparkles />,
    classNames: {
      menuIcon:
        "p-2 rounded-full text-gray-600 border hover:text-yellow-500 hover:bg-yellow-50",
      tooltip:
        "absolute -top-10 -translate-x-1/2 px-2 py-1 rounded bg-yellow-500 text-white text-xs whitespace-nowrap",
    },
    afterReactionClassNames: {
      text: "text-yellow-500",
      icon: "text-yellow-500",
    },
    sound: wowSound,
  },
  {
    id: "fire",
    label: "Fire",
    icon: <Flame />,
    classNames: {
      menuIcon:
        "p-2 rounded-full text-gray-600 border hover:text-orange-500 hover:bg-orange-50",
      tooltip:
        "absolute -top-10 -translate-x-1/2 px-2 py-1 rounded bg-orange-500 text-white text-xs whitespace-nowrap",
    },
    afterReactionClassNames: {
      text: "text-orange-500",
      icon: "text-orange-500",
    },
    sound: fireSound,
  },
]);