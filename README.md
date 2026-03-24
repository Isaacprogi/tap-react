Here’s your **updated README with improved clarity, consistency, and corrected API alignment to your actual code (ReactionButton, ReactionMenu, ReactionItem, scaleConfig, menuWrapperClass, etc.)**.

I also cleaned wording, removed ambiguity, and made it more “npm-ready / production library” quality.

---

# 🎭 Tap React

A highly customizable, animated reaction system inspired by platforms like Facebook, LinkedIn, and X.

Built with **React**, **TypeScript**, and **Framer Motion**, it provides a flexible and reusable reaction UI for feeds, posts, comments, and any interactive content.

---

## ✨ Features

* 🎯 Fully customizable reaction system (icons, labels, or both)
* ⚡ Smooth animations powered by Framer Motion
* 🧠 Controlled state support (external `currentReactionId`)
* 🔄 Optimistic updates with built-in `revert()` support
* 🎛️ Configurable menu positioning (top/bottom, align start/center/end)
* 🎨 Deep styling overrides via `classNames`
* 🧩 Reusable across feeds, posts, comments, etc.
* 🪶 Lightweight and dependency-minimal
* 🖱️ Hover-driven interaction system with tooltip support

---

## 📦 Installation

```bash
npm install framer-motion clsx tailwind-merge
```

> Requires React + TypeScript.

---

## 🚀 Quick Start

```tsx
import ReactionButton from "./components/ReactionButton";
import { HiHeart, HiOutlineHandThumbUp } from "react-icons/hi2";

const reactions = [
  {
    id: "like",
    label: "Like",
    icon: <HiOutlineHandThumbUp />
  },
  {
    id: "love",
    label: "Love",
    icon: <HiHeart />
  }
];

export default function App() {
  return (
    <ReactionButton
      reactions={reactions}
      currentReactionId=""
      disabled={false}
      displayMode="both"
      onReactionSelect={(id, { revert }) => {
        console.log("Selected:", id);

        // call revert() if API fails
      }}
      classNames={{
        button: "px-4 py-2 bg-gray-100 rounded-full",
        text: "text-sm font-medium",
        icon: "text-xl",
        menu: "bg-white shadow-lg border rounded-xl p-2",
        menuWrapperClass: "rounded-xl",
        menuIcon: "text-base",
        tooltip: "text-xs bg-black text-white"
      }}
    />
  );
}
```

---

## 🧠 Core Component

## `<ReactionButton />`

### Props

| Prop                | Type                         | Default                                     | Description                                    |
| ------------------- | ---------------------------- | ------------------------------------------- | ---------------------------------------------- |
| `reactions`         | `Reaction[]`                 | required                                    | List of available reactions                    |
| `currentReactionId` | `string`                     | `""`                                        | Currently selected reaction (controlled state) |
| `disabled`          | `boolean`                    | `false`                                     | Disables interaction                           |
| `displayMode`       | `"icon" \| "text" \| "both"` | `"icon"`                                    | How the button displays selected reaction      |
| `onReactionSelect`  | `(id, utils) => void`        | optional                                    | Called on selection with `revert()` support    |
| `enableTooltip`     | `boolean`                    | `true`                                      | Enables hover tooltips                         |
| `classNames`        | object                       | required                                    | UI styling overrides                           |
| `animationConfig`   | object                       | `{ button: true, menu: true, items: true }` | Animation toggles                              |
| `scaleConfig`       | object                       | optional                                    | Controls hover scaling behavior                |
| `menuPosition`      | object                       | optional                                    | Controls menu placement                        |

---

## 🎨 `classNames` API

```ts
{
  button: string;
  text: string;
  icon: string;
  menu: string;
  menuWrapperClass: string;
  menuIcon: string;
  tooltip?: string;
}
```

### What each controls

* `button` → main trigger button
* `text` → label inside button
* `icon` → icon inside button
* `menu` → reaction menu container
* `menuWrapperClass` → wrapper around menu (position/box styling)
* `menuIcon` → icon styling inside menu items
* `tooltip` → tooltip styling

---

## ⚙️ scaleConfig

Controls hover + shrink animation behavior in reaction menu.

```ts
{
  hoverScale?: number;      // default: 1.25
  shrinkFactor?: number;    // default: 0.7
  shouldShrink?: boolean;   // default: true
  scaleType?: "up" | "down" | "center";
}
```

---

## 📍 menuPosition

Controls floating menu placement.

```ts
{
  side?: "top" | "bottom"; // default: "top"
  align?: "start" | "center" | "end"; // default: "start"
}
```

---

## 🎭 Reaction Type

```ts
type Reaction = {
  id: string;
  label: string;
  icon: React.ReactNode;

  classNames?: {
    menuItem?: string;
    menuIcon?: string;
    tooltip?: string;
  };

  colorAfterReaction?: {
    text?: string;
    icon?: string;
  };
};
```

---

## 🔁 Optimistic Updates

Tap React supports optimistic UI updates with rollback.

```ts
const handleReaction = async (id: string, { revert }) => {
  try {
    await api.patch("/posts/1", { reactionId: id });
  } catch (err) {
    revert(); // restores previous state
  }
};
```

---

## 🧩 Internal Architecture

* `ReactionButton` → state + interaction controller
* `ReactionMenu` → floating reaction container
* `ReactionItem` → individual reaction option
* `useReaction` → shared state hook

---

## 🎬 Real Example (Feed / Post UI)

```tsx
<ReactionButton
  reactions={reactions}
  currentReactionId={post.reactionId}
  disabled={loading}
  displayMode="both"
  scaleConfig={{
    hoverScale: 1.6,
    shrinkFactor: 0.7,
    shouldShrink: true,
    scaleType: "center"
  }}
  menuPosition={{
    side: "top",
    align: "start"
  }}
  onReactionSelect={handleReaction}
/>
```

---

## 🎨 Styling System

Full control over UI via `classNames`:

```ts
classNames={{
  button: "bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl",
  text: "text-sm font-medium",
  icon: "text-xl",
  menu: "bg-white border shadow-lg rounded-xl p-2",
  menuWrapperClass: "bg-white rounded-xl",
  menuIcon: "text-base",
  tooltip: "text-xs bg-black text-white"
}}
```

---

## ⚙️ Animation Controls

```ts
animationConfig={{
  button: true,
  menu: true,
  items: true
}}
```

You can independently control:

* Button tap animation
* Menu entrance animation
* Reaction item animations

---

## 🪄 Interaction Flow

* Hover button → menu opens
* Hover reaction → tooltip + scale animation
* Click reaction → instantly updates UI
* Click active reaction → removes reaction
* Hover again → change selection
* Supports rollback via `revert()`

---

## 🛠 Tech Stack

* React
* TypeScript
* Framer Motion
* clsx
* tailwind-merge

---

## 📌 Design Goals

* Social-media-level interaction UX
* Fully reusable reaction system
* Highly customizable styling layer
* Smooth micro-interactions
* Production-ready architecture

---

## 📄 License

MIT — free to use and modify.

---

## 🙌 Author

Built by a frontend engineer focused on interactive UI systems, animation-driven components, and scalable design systems.

---

If you want next step, I can upgrade this into:

* 📦 **npm landing page README (viral style like Radix UI)**
* 🎥 animated GIF demo section
* 🧪 Storybook docs
* 🌐 live demo (Next.js playground)
* 🚀 or prepare it for **first npm publish launch strategy**
