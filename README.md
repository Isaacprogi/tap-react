# Tap React

**Tap, React, Engage.** A beautifully animated reaction system that transforms static interactions into delightful moments.

[![npm version](https://badge.fury.io/js/tap-react.svg)](https://www.npmjs.com/package/tap-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


> 📦 **Reactions Source:**  
> See `src/samples/reactions.tsx` and `src/samples/sounds/` for full reaction and sound examples used for reference and testing.
---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Styling](#styling)
  - [className Override Behavior](#️-important-classname-override-behavior)
  - [Style Priority](#style-priority)
  - [Syncing classNames and afterReactionClassNames](#️-critical-syncing-classnames-and-afterreactionclassnames)
- [Real-World Example: Social Feed with JSON Server](#real-world-example-social-feed-with-json-server)
- [Sound Effects](#sound-effects)
- [Advanced Patterns](#advanced-patterns)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

Tap React brings the polish of Facebook, LinkedIn, and Medium reactions to your application — built with **React**, **TypeScript**, and **Framer Motion**. Whether it's a heartfelt ❤️ on a friend's photo, a thoughtful 💡 on an article, or a celebratory 🎉 on a milestone, every interaction feels alive.

---

## Features

| Feature | Description |
|---------|-------------|
| 🎯 **Smart State Management** | Controlled and uncontrolled modes with optimistic updates |
| ⚡ **Buttery Animations** | Spring-powered micro-interactions that feel natural |
| 🎨 **Pixel-Perfect Customization** | Style every element — button, menu, icons, tooltips |
| 📍 **Smart Positioning** | Menu appears exactly where users expect (top/bottom, start/center/end) |
| 🎭 **Per-Reaction Personality** | Individual styles, colors, and tooltips for each reaction |
| 🔊 **Sound Feedback** | Optional audio cues for hover and click interactions |
| 📱 **Responsive by Design** | Works beautifully on any screen size |
| 🔄 **Revert on Failure** | Built-in optimistic UI with automatic rollback |
| 💪 **Type-Safe** | Full TypeScript support with intelligent autocomplete |
| 🎨 **Zero Runtime CSS** | Bring your own styles or use the defaults |

---

## Quick Start

```bash
npm install framer-motion tap-react
```


```tsx
import { ReactionButton } from 'tap-react'
import { ThumbsUp, Heart } from "lucide-react";

const reactions = [
  { id: "like", label: "Like", icon: <ThumbsUp /> },
  { id: "love", label: "Love", icon: <Heart /> },
];

function App() {
  return (
    <ReactionButton
      reactions={reactions}
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
     classNames={{
    button: "flex items-center  gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg",
    text: "text-sm font-medium text-gray-700",
    icon: "text-xl",
    menu: "flex gap-4 bg-white rounded-xl shadow-lg border p-2 min-w-[200px] z-50",
    menuWrapper: "relative bg-white",
    menuItem: "flex items-center gap-2 rounded-lg hover:bg-gray-50",
    menuIcon: "flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100",
    tooltip: "absolute -top-10  -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
  }}
```

### Style Priority

Styles cascade from most specific to most general:

```
afterReactionClassNames → Per-Reaction classNames → Main Config classNames → Defaults
     (highest priority)                                                  (lowest priority)
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
    icon: <Heart />,
    classNames: {
      menuIcon: "bg-red-100 text-red-500", // Overrides main config for this reaction's menu icon
    },
    afterReactionClassNames: {
      button: "px-4 py-2 rounded-lg bg-blue-100 text-blue-600 font-semibold", // Active state for button
      icon: "text-blue-500",   // Active state for icon
      text: "text-blue-600",   // Active state for text
    }
  },
];

<ReactionButton reactions={reactions} classNames={mainClassNames} />
```


### Style Notes

Ensure the `menuWrapper` always has a background if overidden or equivalent background, as this improves animation stability and prevents visual glitches during transitions.

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
    icon: <Heart />,
    afterReactionClassNames: {
      button: "text-blue-600 font-semibold", // Missing layout styles!
    }
  }
];

<ReactionButton
  reactions={reactions}
  classNames={{
    button: "flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100",
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
    icon: <Heart />,
    afterReactionClassNames: {
      button: " items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold",
      //       ^^^ same layout as classNames.button ^^^              ^^^ only this part changed ^^^
      icon: "text-xl text-blue-500",
      text: "text-sm font-semibold text-blue-600",
    }
  }
];

<ReactionButton
  reactions={reactions}
  classNames={{
    button: "flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100",
    icon: "text-xl text-gray-500",
    text: "text-sm font-medium text-gray-700",
  }}
/>
```

> **Rule of thumb:** Start by copying your `classNames` values into `afterReactionClassNames`, then only change what should look different in the active/selected state.

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
import { ReactionButton } from 'tap-react';
import { ThumbsUp, Heart, Gift, Sparkles, Flame } from "lucide-react";

const reactions = [
  { id: "like", label: "Like", icon: <ThumbsUp /> },
  { id: "love", label: "Love", icon: <Heart /> },
  { id: "celebrate", label: "Celebrate", icon: <Gift /> },
  { id: "insightful", label: "Insightful", icon: <Sparkles /> },
  { id: "fire", label: "Fire", icon: <Flame /> },
];

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
        reactions={reactions}
        onReactionSelect={handleReaction}
        menuPosition={{ side: "top", align: "start" }}
        scaleConfig={{ hoverScale: 1.6, shrinkFactor: 0.7, shouldShrink: true, scaleType: "center" }}
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
import { ThumbsUp, Heart } from "lucide-react";

const reactions = [
  { id: "like", label: "Like", icon: <ThumbsUp />, sound: likeSound },
  { id: "love", label: "Love", icon: <Heart />, sound: loveSound },
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
import { ThumbsUp, Heart } from "lucide-react";

const reactions = [
  { id: "like", label: "Like", icon: <ThumbsUp /> },
  { id: "love", label: "Love", icon: <Heart /> },
];

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
import { ThumbsUp, Heart } from "lucide-react";

const reactions = [
  { id: "like", label: "Like", icon: <ThumbsUp /> },
  { id: "love", label: "Love", icon: <Heart /> },
];

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

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `boolean` | `false` | Enable sound effects |
| `playOn` | `"click" \| "hover" \| "manual"` | `undefined` | When to trigger sounds |
| `onManualTrigger` | `(playSound) => void` | `undefined` | Required when `playOn="manual"` — receives the play function |

### ClassNames

| Property | Description |
|----------|-------------|
| `button` | Main button container |
| `text` | Main button text |
| `icon` | Main button icon |
| `menu` | Menu container |
| `menuWrapper` | Wrapper element for positioning context |
| `menuItem` | Individual reaction row in the menu |
| `menuIcon` | Icon inside each menu item |
| `tooltip` | Tooltip element |

### Reaction Type

```ts
type Reaction = {
  id: string;            // Unique identifier
  label: string;         // Display text
  icon: React.ReactNode; // React icon component (e.g., from lucide-react)
  sound?: string;        // Optional sound file URL

  classNames?: {         // Per-reaction style overrides
    menuItem?: string;
    menuIcon?: string;
    tooltip?: string;
  };

  afterReactionClassNames?: { // Styles applied when this reaction is active (selected state)
    button?: string; // ⚠️ Replaces classNames.button entirely — carry over shared base styles
    icon?: string;   // ⚠️ Replaces classNames.icon entirely — carry over shared base styles
    text?: string;   // ⚠️ Replaces classNames.text entirely — carry over shared base styles
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

This project is licensed under the MIT License.

See the [LICENSE](./LICENSE) file for details.

MIT © Isaac Anasonye (https://github.com/Isaacprogi)

---

## Acknowledgments

Inspired by the reaction systems on Facebook, LinkedIn, and Medium. Powered by [Framer Motion](https://www.framer.com/motion/). Icons by [Lucide React](https://lucide.dev/).

---

**Issues & Discussions:** [GitHub](https://github.com/Isaacprogi/tap-react/issues)
```
