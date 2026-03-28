import {
  HiOutlineHandThumbUp,
  HiHeart,
  HiHandRaised,
  HiFaceSmile,
  HiCake,
  HiStar,
  HiFire,
  HiLightBulb,
  HiRocketLaunch,
  HiBolt,
  HiHandThumbDown,
  HiExclamationCircle,
  HiChatBubbleLeftEllipsis,
  HiFlag,
  HiSparkles,
  HiMusicalNote,
  HiGlobeAlt,
  HiSun,
  HiMoon,
} from "react-icons/hi2";

// ─── Group 1: Social (LinkedIn-style) ───────────────────────────────────────
export const socialReactions = [
  {
    id: "like",
    label: "Like",
    icon: <HiOutlineHandThumbUp />,
    classNames: {
      menuItem: "hover:bg-blue-50 px-3 py-1.5 rounded-md",
      menuIcon: "bg-blue-100 text-blue-600 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-blue-500 text-white text-xs px-2 py-1 rounded-md",
    },
    colorAfterReaction: { text: "text-blue-600", icon: "text-blue-600" },
  },
  {
    id: "love",
    label: "Love",
    icon: <HiHeart />,
    classNames: {
      menuItem: "hover:bg-red-50 px-3 py-1.5 rounded-md",
      menuIcon: "bg-red-100 text-red-500 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-pink-500 text-white text-xs px-2 py-1 rounded-md",
    },
    colorAfterReaction: { text: "text-red-500", icon: "text-red-500" },
  },
  {
    id: "clap",
    label: "Clap",
    icon: <HiHandRaised />,
    classNames: {
      menuItem: "hover:bg-yellow-50 px-3 py-1.5 rounded-md",
      menuIcon: "bg-yellow-100 text-yellow-500 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-yellow-500 text-white text-xs px-2 py-1 rounded-md",
    },
    colorAfterReaction: { text: "text-yellow-500", icon: "text-yellow-500" },
  },
  {
    id: "funny",
    label: "Funny",
    icon: <HiFaceSmile />,
    classNames: {
      menuItem: "hover:bg-green-50 px-3 py-1.5 rounded-md",
      menuIcon: "bg-green-100 text-green-500 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-green-500 text-white text-xs px-2 py-1 rounded-md",
    },
    colorAfterReaction: { text: "text-green-500", icon: "text-green-500" },
  },
  {
    id: "celebrate",
    label: "Celebrate",
    icon: <HiCake />,
    classNames: {
      menuItem: "hover:bg-purple-50 px-3 py-1.5 rounded-md",
      menuIcon: "bg-purple-100 text-purple-500 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-purple-500 text-white text-xs px-2 py-1 rounded-md",
    },
    colorAfterReaction: { text: "text-purple-500", icon: "text-purple-500" },
  },
];

// ─── Group 2: Insight / Knowledge (Medium / Dev.to-style) ────────────────────
// Left exactly as requested
export const insightReactions = [
  {
    id: "star",
    label: "Star",
    icon: <HiStar />,
    classNames: {
      menuItem: "hover:bg-amber-50 p-2 rounded-full",
      menuIcon: "bg-amber-100 text-3xl text-amber-500 rounded-full shrink-0 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-amber-500 text-white text-xs px-2 py-1 rounded-md",
    },
    colorAfterReaction: { text: "text-amber-500", icon: "text-amber-500" },
  },
  {
    id: "fire",
    label: "Fire",
    icon: <HiFire />,
    classNames: {
      menuItem: "hover:bg-orange-50 p-2 rounded-full",
      menuIcon: "bg-orange-100 text-3xl text-orange-500 rounded-full flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-orange-500 text-white text-xs px-2 py-1 rounded-md",
    },
    colorAfterReaction: { text: "text-orange-500", icon: "text-orange-500" },
  },
  {
    id: "insightful",
    label: "Insightful",
    icon: <HiLightBulb />,
    classNames: {
      menuItem: "hover:bg-yellow-50 p-2 rounded-full",
      menuIcon: "bg-yellow-100 text-3xl text-yellow-600 rounded-full flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-yellow-600 text-white text-xs px-2 py-1 rounded-md",
    },
    colorAfterReaction: { text: "text-yellow-600", icon: "text-yellow-600" },
  },
  {
    id: "rocket",
    label: "Rocket",
    icon: <HiRocketLaunch />,
    classNames: {
      menuItem: "hover:bg-indigo-50 p-2 rounded-full",
      menuIcon: "bg-indigo-100 text-3xl text-indigo-500 rounded-full flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-indigo-500 text-white text-xs px-2 py-1 rounded-md",
    },
    colorAfterReaction: { text: "text-indigo-500", icon: "text-indigo-500" },
  },
  {
    id: "bolt",
    label: "Bold",
    icon: <HiBolt />,
    classNames: {
      menuItem: "hover:bg-cyan-50 p-2 rounded-full",
      menuIcon: "bg-cyan-100 text-3xl text-cyan-600 rounded-full flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-cyan-600 text-white text-xs px-2 py-1 rounded-md",
    },
    colorAfterReaction: { text: "text-cyan-600", icon: "text-cyan-600" },
  },
];

// ─── Group 3: Feedback / Moderation (Forum-style) ───────────────────────────
export const feedbackReactions = [
  {
    id: "agree",
    label: "Agree",
    icon: <HiOutlineHandThumbUp />,
    classNames: {
      menuItem: "hover:bg-teal-50 px-2 py-1 rounded-sm",
      menuIcon: "bg-teal-100 text-teal-600 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-teal-600 text-white text-xs px-2 py-1 rounded-sm",
    },
    colorAfterReaction: { text: "text-teal-600", icon: "text-teal-600" },
  },
  {
    id: "disagree",
    label: "Disagree",
    icon: <HiHandThumbDown />,
    classNames: {
      menuItem: "hover:bg-rose-50 px-2 py-1 rounded-sm",
      menuIcon: "bg-rose-100 text-rose-500 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-rose-500 text-white text-xs px-2 py-1 rounded-sm",
    },
    colorAfterReaction: { text: "text-rose-500", icon: "text-rose-500" },
  },
  {
    id: "important",
    label: "Important",
    icon: <HiExclamationCircle />,
    classNames: {
      menuItem: "hover:bg-red-50 px-2 py-1 rounded-sm",
      menuIcon: "bg-red-100 text-red-600 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-red-600 text-white text-xs px-2 py-1 rounded-sm",
    },
    colorAfterReaction: { text: "text-red-600", icon: "text-red-600" },
  },
  {
    id: "question",
    label: "Question",
    icon: <HiChatBubbleLeftEllipsis />,
    classNames: {
      menuItem: "hover:bg-sky-50 px-2 py-1 rounded-sm",
      menuIcon: "bg-sky-100 text-sky-500 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-sky-500 text-white text-xs px-2 py-1 rounded-sm",
    },
    colorAfterReaction: { text: "text-sky-500", icon: "text-sky-500" },
  },
  {
    id: "flag",
    label: "Flag",
    icon: <HiFlag />,
    classNames: {
      menuItem: "hover:bg-slate-50 px-2 py-1 rounded-sm",
      menuIcon: "bg-slate-100 text-slate-500 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-slate-500 text-white text-xs px-2 py-1 rounded-sm",
    },
    colorAfterReaction: { text: "text-slate-500", icon: "text-slate-500" },
  },
];

// ─── Group 4: Vibe / Mood (Discord-style) ───────────────────────────────────
export const vibeReactions = [
  {
    id: "sparkle",
    label: "Sparkle",
    icon: <HiSparkles />,
    classNames: {
      menuItem: "hover:bg-fuchsia-50 px-3 py-2 rounded-lg",
      menuIcon: "bg-fuchsia-100 text-fuchsia-500 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-fuchsia-500 text-white text-xs px-2 py-1 rounded-lg",
    },
    colorAfterReaction: { text: "text-fuchsia-500", icon: "text-fuchsia-500" },
  },
  {
    id: "music",
    label: "Music",
    icon: <HiMusicalNote />,
    classNames: {
      menuItem: "hover:bg-violet-50 px-3 py-2 rounded-lg",
      menuIcon: "bg-violet-100 text-violet-500 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-violet-500 text-white text-xs px-2 py-1 rounded-lg",
    },
    colorAfterReaction: { text: "text-violet-500", icon: "text-violet-500" },
  },
  {
    id: "global",
    label: "Global",
    icon: <HiGlobeAlt />,
    classNames: {
      menuItem: "hover:bg-blue-50 px-3 py-2 rounded-lg",
      menuIcon: "bg-blue-100 text-blue-500 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-blue-500 text-white text-xs px-2 py-1 rounded-lg",
    },
    colorAfterReaction: { text: "text-blue-500", icon: "text-blue-500" },
  },
  {
    id: "sun",
    label: "Sun",
    icon: <HiSun />,
    classNames: {
      menuItem: "hover:bg-orange-50 px-3 py-2 rounded-lg",
      menuIcon: "bg-orange-100 text-orange-400 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-orange-400 text-white text-xs px-2 py-1 rounded-lg",
    },
    colorAfterReaction: { text: "text-orange-400", icon: "text-orange-400" },
  },
  {
    id: "moon",
    label: "Moon",
    icon: <HiMoon />,
    classNames: {
      menuItem: "hover:bg-indigo-50 px-3 py-2 rounded-lg",
      menuIcon: "bg-indigo-100 text-indigo-400 rounded-full p-2 flex items-center justify-center",
      tooltip: "absolute top-[-2.4rem] z-20 bg-indigo-400 text-white text-xs px-2 py-1 rounded-lg",
    },
    colorAfterReaction: { text: "text-indigo-400", icon: "text-indigo-400" },
  },
];

// ─── Registry ───────────────────────────────────────────────────────────────
export const reactionGroups = {
  socialReactions,
  insightReactions,
  feedbackReactions,
  vibeReactions,
};