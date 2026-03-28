# Tap React

**Tap, React, Engage.** A beautifully animated reaction system that transforms static interactions into delightful moments.

[![npm version](https://badge.fury.io/js/tap-react.svg)](https://www.npmjs.com/package/tap-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Overview

Tap React brings the polish of Facebook, LinkedIn, and Medium reactions to your application — built with **React**, **TypeScript**, and **Framer Motion**. Whether it's a heartfelt ❤️ on a friend's photo, a thoughtful 💡 on an article, or a celebratory 🎉 on a milestone, every interaction feels alive.

---

## Features

| Feature | Description |
|---------|-------------|
| 🎯 Smart State Management | Controlled and uncontrolled modes with optimistic updates |
| ⚡ Buttery Animations | Spring-powered micro-interactions that feel natural |
| 🎨 Pixel-Perfect Customization | Style every element — button, menu, icons, tooltips |
| 📍 Smart Positioning | Menu appears exactly where users expect (top/bottom, start/center/end) |
| 🎭 Per-Reaction Personality | Individual styles, colors, and tooltips for each reaction |
| 🔊 Sound Feedback | Optional audio cues for hover and click interactions |
| 📱 Responsive by Design | Works beautifully on any screen size |
| 🔄 Revert on Failure | Built-in optimistic UI with automatic rollback |
| 💪 Type-Safe | Full TypeScript support with intelligent autocomplete |
| 🎨 Zero Runtime CSS | Bring your own styles or use the defaults |

---

## Quick Start

```bash
npm install framer-motion tap-react
```

```tsx
import { ReactionButton } from 'tap-react'
import { HiHeart, HiOutlineHandThumbUp } from "react-icons/hi2";

const reactions = [
  { id: "like", label: "Like", icon: <HiOutlineHandThumbUp /> },
  { id: "love", label: "Love", icon: <HiHeart /> },
];

function App() {
  return (
    <ReactionButton
      reactions={reactions}
      currentReactionId=""
      displayMode="both"
      onReactionSelect={(id, { revert }) => {
        console.log("User reacted with:", id);
        // Call revert() if your API call fails
      }}
    />
  );
}
```

---

## Demo Presets

> These reaction groups are **for demonstration purposes only** — they showcase different styles and use cases. Use them as inspiration or import them directly.

### Social Reactions

LinkedIn/Facebook-style interaction set for social feeds. Includes: Like, Love, Clap, Funny, Celebrate.

```tsx
import { reactionGroups } from "tap-react";

<ReactionButton reactions={reactionGroups.socialReactions} />
```

### Insight Reactions

Medium/Dev.to-style reactions for content and articles. Includes: Star, Fire, Insightful, Rocket, Bold.

```tsx
<ReactionButton reactions={reactionGroups.insightReactions} />
```

### Feedback Reactions

Forum/community moderation-style reactions. Includes: Agree, Disagree, Important, Question, Flag.

```tsx
<ReactionButton reactions={reactionGroups.feedbackReactions} />
```

### Vibe Reactions

Casual/Discord-style expressive reactions.

```tsx
<ReactionButton reactions={reactionGroups.vibeReactions} />
```

---

## Styling

### ⚠️ Important: className Override Behavior

**When you provide any `className` prop, it completely replaces the default styling** — it does not merge or extend. You must provide all necessary styles yourself.

```tsx
// ❌ This will lose all default button styling
<ReactionButton
  classNames={{
    button: "my-custom-class"
  }}
/>

// ✅ Provide all necessary styles for each element
<ReactionButton
  classNames={{
    button: "inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg",
    text: "text-sm font-medium text-gray-700",
    icon: "text-xl",
    menu: "absolute bg-white rounded-xl shadow-lg border p-2 min-w-[200px] z-50",
    menuWrapper: "relative",
    menuItem: "flex items-center gap-2 rounded-lg hover:bg-gray-50",
    menuIcon: "flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100",
    tooltip: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
  }}
/>
```

### Style Priority

Styles cascade from most specific to most general:

```
afterReactionClassNames  →  Per-Reaction classNames  →  Main Config classNames  →  Defaults
      (highest)                                                                     (lowest)
```

```tsx
const mainClassNames = {
  button: "px-4 py-2 rounded-lg bg-gray-100",
  menuIcon: "w-10 h-10 rounded-lg bg-gray-100",
  menuItem: "p-2 rounded-md"
};

const reactions = [
  {
    id: "like",
    label: "Like",
    icon: <HiHeart />,
    classNames: {
      menuIcon: "bg-red-100 text-red-500",  // Overrides main config for this reaction's menu icon
    },
    afterReactionClassNames: {
      button: "px-4 py-2 rounded-lg bg-blue-100 text-blue-600 font-semibold", // Active state for button
      icon: "text-blue-500",     // Active state for icon
      text: "text-blue-600",     // Active state for text
    }
  },
];

<ReactionButton reactions={reactions} classNames={mainClassNames} />
```

---

### ⚠️ Critical: Syncing `classNames` and `afterReactionClassNames`

`afterReactionClassNames` **completely replaces** the corresponding `classNames` entry when a reaction is active — it does not extend or merge. This means **any style you set in `classNames` but not in `afterReactionClassNames` will be lost when the reaction is selected**, and vice versa.

**You must deliberately carry over all shared base styles into both.**

```tsx
// ❌ BROKEN — button loses its shape/padding when selected
const reactions = [
  {
    id: "like",
    label: "Like",
    icon: <HiHeart />,
    afterReactionClassNames: {
      button: "text-blue-600 font-semibold", // Missing layout styles!
    }
  }
];

<ReactionButton
  reactions={reactions}
  classNames={{
    button: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100",
  }}
/>
// When "like" is selected, the button becomes "text-blue-600 font-semibold"
// — all the padding, rounding, and layout disappear.
```

```tsx
// ✅ CORRECT — base styles are repeated in afterReactionClassNames, only color differs
const reactions = [
  {
    id: "like",
    label: "Like",
    icon: <HiHeart />,
    afterReactionClassNames: {
      button: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold",
      //       ^^^ same layout as classNames.button ^^^         ^^^ only this part changed ^^^
      icon: "text-xl text-blue-500",
      text: "text-sm font-semibold text-blue-600",
    }
  }
];

<ReactionButton
  reactions={reactions}
  classNames={{
    button: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100",
    icon: "text-xl text-gray-500",
    text: "text-sm font-medium text-gray-700",
  }}
/>
```

**The rule of thumb:** start by copying your `classNames` values into `afterReactionClassNames`, then only change what should look different in the active/selected state.

---


### Styling Examples

**Modern Social Media Style**

```tsx
<ReactionButton
  reactions={reactionGroups.socialReactions}
  displayMode="both"
  classNames={{
    button: "inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 shadow-sm",
    text: "text-sm font-medium text-gray-700",
    icon: "text-xl",
    menu: "flex bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 min-w-[280px]",
    menuWrapper: "z-[50] bg-white",
    menuItem: "flex items-center gap-2 rounded-xl hover:bg-gray-50",
    menuIcon: "flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100",
    tooltip: "absolute -top-8 bg-red-500 rounded-md p-1 text-white"
  }}
/>
```

**Gradient Button**

```tsx
<ReactionButton
  reactions={reactionGroups.socialReactions}
  displayMode="both"
  classNames={{
    button: "relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl overflow-hidden",
    text: "text-base font-medium",
    icon: "text-2xl",
    menu: "bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-3 min-w-[200px] z-50",
    menuWrapper: "relative z-[50]",
    menuItem: "flex items-center gap-2 rounded-xl hover:bg-gray-50",
    menuIcon: "flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 hover:scale-110",
    tooltip: "absolute -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
  }}
/>
```

**Minimalist Outline**

```tsx
<ReactionButton
  reactions={reactionGroups.feedbackReactions}
  displayMode="both"
  classNames={{
    button: "border-2 border-gray-300 hover:border-gray-400 rounded-lg px-4 py-2 bg-transparent",
    text: "text-gray-600 text-sm",
    icon: "text-xl",
    menu: "border border-gray-200 shadow-md bg-white rounded-lg p-2",
    menuIcon: "p-2 rounded hover:bg-gray-50"
  }}
/>
```

---

## Real-World Example: Social Feed with JSON Server

### Step 1: Set Up JSON Server

```bash
npm install -g json-server
```

Create `db.json`:

```json
{
  "posts": [
    { "id": "1", "author": "Sarah Johnson", "content": "Just launched my new portfolio! 🚀", "reactionId": "love" },
    { "id": "2", "author": "Mike Chen", "content": "React 19 is out! 🔥", "reactionId": "" },
    { "id": "3", "author": "Emma Watson", "content": "Beautiful sunset today in Barcelona 🌅", "reactionId": "like" }
  ]
}
```

```bash
json-server --watch db.json --port 3000
```

### Step 2: Build the Feed Component

```tsx
import { useEffect, useState } from "react";
import { ReactionButton, reactionGroups } from 'tap-react';

type Post = {
  id: string;
  author: string;
  content: string;
  reactionId: string;
};

const PostCard = ({ post, onUpdate }: {
  post: Post;
  onUpdate: (id: string, reactionId: string) => void;
}) => {
  const [loading, setLoading] = useState(false);

  const handleReaction = async (id: string, { revert }: { revert: () => void }) => {
    setLoading(true);
    try {
      onUpdate(post.id, id); // Optimistic update

      await fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reactionId: id }),
      });
    } catch (err) {
      revert(); // Rollback on failure
      console.error("Failed to save reaction:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-800">{post.author}</h3>
        <span className="text-xs text-gray-400">Just now</span>
      </div>
      <p className="text-gray-600 mb-3">{post.content}</p>

      <ReactionButton
        displayMode="both"
        currentReactionId={post.reactionId}
        disabled={loading}
        reactions={reactionGroups.socialReactions}
        onReactionSelect={handleReaction}
        menuPosition={{ side: "top", align: "start" }}
        scaleConfig={{ hoverScale: 1.6, shrinkFactor: 0.7, shouldShrink: true, scaleType: "up" }}
        classNames={{
          button: "rounded-xl px-4 py-2 bg-gray-50 hover:bg-gray-100 transition",
          text: "text-sm font-medium",
          icon: "text-xl",
          menu: "bg-white shadow-xl border rounded-xl p-2",
          menuIcon: "hover:scale-110 transition-transform"
        }}
      />
    </div>
  );
};

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchPosts(); }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");
      setPosts(await res.json());
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (id: string, reactionId: string) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, reactionId } : p));
  };

  if (loading) return <div>Loading posts...</div>;

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      {posts.map(post => (
        <PostCard key={post.id} post={post} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default PostList;
```

This pattern gives you **optimistic updates** (instant feedback), **automatic rollback** on failure, **loading state protection** against double-clicks, and **persistent reactions** across page refreshes.

---

## Sound Effects

Tap React supports three sound trigger modes:

| Mode | Description |
|------|-------------|
| `"click"` | Sound plays automatically when a reaction is selected |
| `"hover"` | Sound plays when hovering over reaction options |
| `"manual"` | You control exactly when sound plays via a callback |

### Click Mode

```tsx
const reactions = [
  { id: "like", label: "Like", icon: <HiOutlineHandThumbUp />, sound: likeSound },
  { id: "love", label: "Love", icon: <HiHeart />, sound: loveSound },
];

<ReactionButton
  reactions={reactions}
  soundConfig={{ enabled: true, playOn: "click" }}
  onReactionSelect={(id, { revert }) => {
    updateReaction(id).catch(() => revert());
  }}
/>
```

### Hover Mode

```tsx
<ReactionButton
  reactions={reactions}
  soundConfig={{ enabled: true, playOn: "hover" }}
/>
```

### Manual Mode

Manual mode gives you full control — play sound only after a successful API call, or conditionally based on user preferences.

```tsx
import { useRef } from "react";

const PostCard = ({ post, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const playSoundRef = useRef<(() => void) | null>(null);

  const handleReaction = async (id: string, { revert }: { revert: () => void }) => {
    setLoading(true);
    try {
      onUpdate(post.id, id);

      await fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reactionId: id }),
      });

      playSoundRef.current?.(); // ✅ Only plays on success

    } catch (err) {
      console.error("Failed to update reaction:", err);
      revert(); // ❌ No sound on failure
    } finally {
      setLoading(false);
    }
  };

  return (
    <ReactionButton
      reactions={reactions}
      soundConfig={{
        enabled: true,
        playOn: "manual",
        onManualTrigger: (playSound) => {
          playSoundRef.current = playSound;
        }
      }}
      onReactionSelect={handleReaction}
    />
  );
};
```

---

## Advanced Patterns

### Analytics Tracking

```tsx
<ReactionButton
  reactions={reactionGroups.socialReactions}
  onReactionSelect={(id, { revert }) => {
    analytics.track('reaction', {
      reactionId: id,
      timestamp: Date.now(),
      context: 'post_feed'
    });

    updateReaction(id).catch(() => revert());
  }}
/>
```

### Conditional Display Modes

```tsx
<ReactionButton displayMode="icon" />   // Mobile: compact
<ReactionButton displayMode="both" />   // Desktop: icon + label
<ReactionButton displayMode="text" />   // Accessibility: text only
```

### Custom Animation Timing

```tsx
<ReactionButton
  scaleConfig={{
    hoverScale: 1.8,
    shrinkFactor: 0.5,
    shouldShrink: true,
    scaleType: "center"
  }}
  animationConfig={{
    button: true,
    menu: true,
    items: true
  }}
/>
```

### ⚠️ Animation and CSS Transition Conflicts

When Framer Motion animations are enabled, **do not add CSS transitions to the same elements**. Mixing both causes jitter, doubled animations, and layout shifts.

```tsx
// ❌ Will conflict
<ReactionButton
  animationConfig={{ button: true, menu: true, items: true }}
  classNames={{
    button: "transition-all duration-300",
    menuIcon: "transition-transform"
  }}
/>

// ✅ Let Framer Motion handle everything
<ReactionButton
  animationConfig={{ button: true, menu: true, items: true }}
  classNames={{
    button: "",
    menuIcon: ""
  }}
/>

// ✅ Or disable Framer Motion and use CSS transitions
<ReactionButton
  animationConfig={{ button: false, menu: false, items: false }}
  classNames={{
    button: "transition-all duration-300",
    menuIcon: "transition-transform duration-200"
  }}
/>
```

---

## API Reference

### ReactionButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `reactions` | `Reaction[]` | **Required** | Array of reaction options |
| `currentReactionId` | `string` | `""` | Currently selected reaction ID |
| `disabled` | `boolean` | `false` | Disables all interactions |
| `displayMode` | `"icon" \| "text" \| "both"` | `"icon"` | Button display style |
| `onReactionSelect` | `(id: string, { revert }) => void` | **Required** | Callback when reaction changes |
| `enableTooltip` | `boolean` | `true` | Show tooltips on hover |
| `menuPosition` | `{ side, align }` | `{ side: "top", align: "start" }` | Menu positioning |
| `scaleConfig` | `ScaleConfig` | See below | Animation scale behavior |
| `animationConfig` | `AnimationConfig` | All `true` | Toggle specific animations |
| `soundConfig` | `SoundConfig` | `undefined` | Sound effect configuration |
| `classNames` | `ClassNames` | — | Custom styling overrides |

### ScaleConfig

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `hoverScale` | `number` | `1.25` | Scale factor when hovering |
| `shrinkFactor` | `number` | `0.7` | Scale factor for non-hovered items |
| `shouldShrink` | `boolean` | `true` | Whether to shrink non-hovered items |
| `scaleType` | `"up" \| "down" \| "center"` | `"center"` | Animation direction |

### AnimationConfig

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `button` | `boolean` | `true` | Enable button tap/hover animations |
| `menu` | `boolean` | `true` | Enable menu entrance animation |
| `items` | `boolean` | `true` | Enable individual reaction animations |

### SoundConfig

| Property | Type | Description |
|----------|------|-------------|
| `enabled` | `boolean` | Enable sound effects |
| `playOn` | `"click" \| "hover" \| "manual"` | When to trigger sounds |
| `onManualTrigger` | `(playSound) => void` | Required when `playOn="manual"` — receives the play function |

### ClassNames

| Property | Description |
|----------|-------------|
| `button` | Main button container |
| `text` | Reaction text when visible |
| `icon` | Reaction icon when visible |
| `menu` | Menu container |
| `menuWrapper` | Wrapper element for positioning context |
| `menuItem` | Individual reaction row in the menu |
| `menuIcon` | Icon inside each menu item |
| `tooltip` | Tooltip element |

### Reaction Type

```ts
type Reaction = {
  id: string;                 // Unique identifier
  label: string;              // Display text
  icon: React.ReactNode;      // React icon component
  sound?: string;             // Optional sound file URL

  classNames?: {              // Per-reaction style overrides
    menuItem?: string;
    menuIcon?: string;
    tooltip?: string;
  };

  afterReactionClassNames?: { // Styles applied when this reaction is active (selected state)
    button?: string;          // ⚠️ Replaces classNames.button entirely — carry over shared base styles
    icon?: string;            // ⚠️ Replaces classNames.icon entirely — carry over shared base styles
    text?: string;            // ⚠️ Replaces classNames.text entirely — carry over shared base styles
  };
};
```

> **See the [Style Syncing section](#️-critical-syncing-classnames-and-afterreactionclassnames) above** for the full breakdown of how `afterReactionClassNames` interacts with `classNames` and how to avoid losing styles on selection.

---

## Contributing

1. Fork the repo and create your feature branch
2. Write code and add tests for new features
3. Update documentation where needed
4. Submit a pull request with a clear description

---

## License

MIT © [Isaac Anasonye](https://github.com/Isaacprogi)

---

## Acknowledgments

Inspired by the reaction systems on Facebook, LinkedIn, and Medium. Powered by [Framer Motion](https://www.framer.com/motion/).

---

**Issues & Discussions:** [GitHub](https://github.com/Isaacprogi/tap-react/issues)