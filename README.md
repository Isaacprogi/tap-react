# 🎭 Tap React

**Tap, React, Engage.** A beautifully animated reaction system that transforms static interactions into delightful moments.

[![npm version](https://badge.fury.io/js/tap-react.svg)](https://www.npmjs.com/package/tap-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ The Story

Imagine building a social feed where every reaction feels alive—where users don't just click buttons, but experience joy. That's what Tap React delivers. Whether it's a heartfelt ❤️ on a friend's photo, a thoughtful 💡 on a technical article, or a celebratory 🎉 on a milestone, Tap React makes every interaction memorable.

Built with **React**, **TypeScript**, and **Framer Motion**, this component brings the polish of Facebook, LinkedIn, and Medium reactions to your application with zero compromise on customization.

---

## 🚀 Quick Start

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

## 🌟 Features

| Feature | Description |
|---------|-------------|
| 🎯 **Smart State Management** | Controlled + uncontrolled modes with optimistic updates |
| ⚡ **Buttery Animations** | Spring-powered micro-interactions that feel natural |
| 🎨 **Pixel-Perfect Customization** | Style every element—button, menu, icons, tooltips |
| 📍 **Smart Positioning** | Menu appears exactly where users expect (top/bottom, start/center/end) |
| 🎭 **Per-Reaction Personality** | Individual styles, colors, and tooltips for each reaction |
| 🔊 **Sound Feedback** | Optional audio cues for hover and click interactions |
| 📱 **Responsive by Design** | Works beautifully on any screen size |
| 🔄 **Revert on Failure** | Built-in optimistic UI with automatic rollback |
| 💪 **Type-Safe** | Full TypeScript support with intelligent autocomplete |
| 🎨 **Zero Runtime CSS** | Bring your own styles or use our defaults |

---

## 📦 Pre-Built Reaction Groups

Tap React comes with 4 curated reaction packs, each designed for specific contexts:

### 1. Social Reactions (LinkedIn/Facebook style)
Perfect for personal content, social feeds, and community engagement.

```tsx
import { reactionGroups } from 'tap-react';

<ReactionButton reactions={reactionGroups.socialReactions} />
```

**Includes:** Like, Love, Clap, Funny, Celebrate

### 2. Insight Reactions (Medium/Dev.to style)
Ideal for blogs, technical content, and knowledge sharing.

```tsx
<ReactionButton reactions={reactionGroups.insightReactions} />
```

**Includes:** Star, Fire, Insightful, Rocket, Bold

### 3. Feedback Reactions (Forum/Community style)
Great for moderation, Q&A, and community feedback.

```tsx
<ReactionButton reactions={reactionGroups.feedbackReactions} />
```

**Includes:** Agree, Disagree, Important, Question, Flag

### 4. Vibe Reactions (Discord/Casual style)
Perfect for casual chat, mood tracking, and fun interactions.

```tsx
<ReactionButton reactions={reactionGroups.vibeReactions} />
```

**Includes:** Sparkle, Music, Global, Sun, Moon

---

## 🎨 Styling Guide

### ⚠️ **IMPORTANT: ClassName Override Behavior**

**When you provide any `className` prop, it COMPLETELY OVERRIDES the default styling**—it doesn't merge or extend. This gives you full control but also means you must provide all necessary styles (layout, spacing, colors, etc.) yourself.

```tsx
// ❌ This will lose all default button styling (padding, background, etc.)
<ReactionButton
  classNames={{
    button: "my-custom-class"  // Only "my-custom-class" applies, no default styles
  }}
/>

// ✅ You must provide all required styles
<ReactionButton
  classNames={{
    button: "inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
    text: "text-sm font-medium text-gray-700",
    icon: "text-xl",
    menu: "absolute bg-white rounded-xl shadow-lg border border-gray-200 p-2 min-w-[200px] z-50",
    menuWrapperClass: "relative",
    menuIcon: "flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-all",
    tooltip: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
  }}
/>
```

### Understanding the Override Hierarchy

```tsx
// Level 1: No custom classes → uses package defaults
<ReactionButton reactions={reactions} />

// Level 2: Custom button class → button uses ONLY your styles
// Other elements (menu, icons) still use package defaults
<ReactionButton 
  reactions={reactions}
  classNames={{ button: "my-button-style" }}
/>

// Level 3: Multiple custom classes → each overrides its respective element
// You must style each overridden element completely
<ReactionButton 
  reactions={reactions}
  classNames={{
    button: "my-button-style",      // Button loses all defaults
    menu: "my-menu-style",          // Menu loses all defaults
    menuIcon: "my-icon-style",      // Icons lose all defaults
    tooltip: "my-tooltip-style"     // Tooltips lose all defaults
  }}
/>
```

### Per-Reaction Override Behavior

The same override principle applies to individual reaction styling:

```tsx
const reactions = [
  {
    id: "like",
    label: "Like",
    icon: <HiOutlineHandThumbUp />,
    // These override default menu item styling for THIS reaction only
    classNames: {
      menuItem: "custom-menu-item",  // Loses all default menu item styles
      menuIcon: "custom-icon",       // Loses all default icon styles
      tooltip: "custom-tooltip"      // Loses all default tooltip styles
    }
  }
];
```

### Essential Styles Checklist

When overriding classes, ensure your custom styles include:

| Element | Required Styles |
|---------|-----------------|
| **button** | `display`, `position` (if needed), `padding`, `cursor`, `background`, `border`, `border-radius` |
| **text** | `font-size`, `font-weight`, `color`, `line-height` |
| **icon** | `font-size` or `width/height`, `display` (inline-flex for icons) |
| **menu** | `position: absolute`, `z-index`, `background`, `border-radius`, `box-shadow`, `min-width` |
| **menuWrapperClass** | `position: relative` (if menu positioning is needed) |
| **menuIcon** | `display: flex`, `align-items: center`, `justify-content: center`, `padding`, `border-radius`, `transition` |
| **tooltip** | `position: absolute`, `z-index`, `background`, `color`, `padding`, `border-radius`, `font-size`, `white-space: nowrap` |

---

## 🎬 Real-World Example: Social Feed with JSON Server

Let's build a complete social feed where reactions persist and feel alive.

### Step 1: Set Up JSON Server

```bash
npm install -g json-server
```

Create `db.json`:
```json
{
  "posts": [
    {
      "id": "1",
      "author": "Sarah Johnson",
      "content": "Just launched my new portfolio! 🚀 Check it out at sarah.dev",
      "reactionId": "love"
    },
    {
      "id": "2",
      "author": "Mike Chen",
      "content": "React 19 is out! The new compiler features are game-changing 🔥",
      "reactionId": ""
    },
    {
      "id": "3",
      "author": "Emma Watson",
      "content": "Beautiful sunset today in Barcelona 🌅",
      "reactionId": "like"
    }
  ]
}
```

Start the server:
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
      // Optimistic update - UI updates immediately
      onUpdate(post.id, id);
      
      // Persist to backend
      await fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reactionId: id }),
      });
    } catch (err) {
      // Rollback if API fails
      revert();
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
        scaleConfig={{
          hoverScale: 1.6,
          shrinkFactor: 0.7,
          shouldShrink: true,
          scaleType: "up"
        }}
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

// PostList component with data fetching
const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

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

  if (loading) {
    return <div className="space-y-4">Loading posts...</div>;
  }

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

### Why This Works

- **Optimistic Updates**: Users see instant feedback, making the app feel snappy
- **Automatic Rollback**: If the server fails, reactions revert seamlessly
- **Loading States**: Buttons disable during API calls, preventing double-clicks
- **Persistent State**: Refresh the page and reactions remain

---

## 🎮 Advanced Patterns

### 1. With Sound Effects

Make reactions even more engaging with audio feedback:

```tsx
const reactions = [
  { 
    id: "like", 
    label: "Like", 
    icon: <HiOutlineHandThumbUp />,
    sound: "/sounds/like.mp3"  // Optional: per-reaction sound
  },
  // ... more reactions
];

<ReactionButton
  reactions={reactions}
  soundConfig={{
    enabled: true,
    playOn: "click",  // or "hover" for hover sounds
    onManualTrigger: (playSound) => {
      // Custom sound handling logic
      if (userPreferences.soundEnabled) {
        playSound();
      }
    }
  }}
/>
```

### 2. With Analytics Tracking

Track user engagement:

```tsx
<ReactionButton
  reactions={reactionGroups.socialReactions}
  onReactionSelect={(id, { revert }) => {
    // Track analytics
    analytics.track('reaction', {
      reactionId: id,
      timestamp: Date.now(),
      context: 'post_feed'
    });
    
    // Your API call here
    updateReaction(id).catch(() => revert());
  }}
/>
```

### 3. Conditional Display Modes

Adapt to different contexts:

```tsx
// Mobile: icons only for compact space
<ReactionButton displayMode="icon" />

// Desktop: both for clarity
<ReactionButton displayMode="both" />

// Minimal: text only for accessibility
<ReactionButton displayMode="text" />
```

### 4. Custom Animation Timing

Fine-tune the feel of interactions:

```tsx
<ReactionButton
  scaleConfig={{
    hoverScale: 1.8,      // More dramatic hover
    shrinkFactor: 0.5,    // Non-hovered items shrink more
    shouldShrink: true,
    scaleType: "center"   // Scale from center instead of top
  }}
  animationConfig={{
    button: true,          // Button tap feedback
    menu: true,           // Menu fade-in
    items: true           // Individual item animations
  }}
/>
```

---

## 📚 Complete API Reference

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
| `classNames` | `ClassNames` | **Required** | Custom styling overrides |

### ScaleConfig Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `hoverScale` | `number` | `1.25` | Scale factor when hovering |
| `shrinkFactor` | `number` | `0.7` | Scale factor for non-hovered items |
| `shouldShrink` | `boolean` | `true` | Whether to shrink non-hovered items |
| `scaleType` | `"up" \| "down" \| "center"` | `"up"` | Animation direction |

### AnimationConfig Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `button` | `boolean` | `true` | Enable button tap/hover animations |
| `menu` | `boolean` | `true` | Enable menu entrance animation |
| `items` | `boolean` | `true` | Enable individual reaction animations |

### SoundConfig Object

| Property | Type | Description |
|----------|------|-------------|
| `enabled` | `boolean` | Enable sound effects |
| `playOn` | `"click" \| "hover" \| "manual"` | When to trigger sounds |
| `onManualTrigger` | `(playSound) => void` | Custom sound handling for manual mode |

### ClassNames Object

| Property | Description | Required Styles |
|----------|-------------|-----------------|
| `button` | Main button container | `display`, `padding`, `cursor`, `background` |
| `text` | Reaction text (when visible) | `font-size`, `font-weight`, `color` |
| `icon` | Reaction icon (when visible) | `font-size` or `width/height` |
| `menu` | Menu container | `position: absolute`, `z-index`, `background` |
| `menuWrapperClass` | Menu wrapper for positioning | `position: relative` |
| `menuIcon` | Individual reaction icons in menu | `display: flex`, `padding`, `border-radius` |
| `tooltip` | Tooltip styling | `position: absolute`, `z-index`, `background`, `color` |

### Reaction Type

```ts
type Reaction = {
  id: string;                    // Unique identifier
  label: string;                 // Display text
  icon: React.ReactNode;         // React component (icon)
  sound?: string;                // Optional sound file URL
  
  classNames?: {                 // Optional per-reaction styling
    menuItem?: string;           // Styles for the menu item
    menuIcon?: string;           // Styles for the icon in menu
    tooltip?: string;            // Styles for the tooltip
  };
  
  afterReactionClassNames?: {    // Styles when reaction is active
    button?: string;             // Active button styles
    text?: string;               // Active text styles
    icon?: string;               // Active icon styles
  };
};
```

---

## 🎨 Complete Styling Examples

### Example 1: Modern Social Media Style

```tsx
<ReactionButton
  reactions={reactionGroups.socialReactions}
  displayMode="both"
  classNames={{
    button: "inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm",
    text: "text-sm font-medium text-gray-700",
    icon: "text-xl",
    menu: "absolute bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 min-w-[280px] z-50",
    menuWrapperClass: "relative",
    menuIcon: "flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110",
    tooltip: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap"
  }}
/>
```

### Example 2: Dark Mode Compatible

```tsx
<ReactionButton
  reactions={reactionGroups.insightReactions}
  displayMode="icon"
  classNames={{
    button: "p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
    menu: "absolute bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-2 z-50",
    menuIcon: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300",
    tooltip: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
  }}
/>
```

### Example 3: Compact Mobile-First Design

```tsx
<ReactionButton
  reactions={reactionGroups.vibeReactions}
  displayMode="icon"
  classNames={{
    button: "p-2 rounded-full bg-gray-100 active:bg-gray-200 touch-manipulation",
    menu: "absolute bottom-full mb-2 bg-white rounded-xl shadow-lg p-1.5 z-50",
    menuIcon: "p-2.5 rounded-lg hover:bg-gray-100 transition-colors",
    tooltip: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
  }}
  menuPosition={{ side: "top", align: "center" }}
/>
```

### Example 4: Gradient Button with Animation

```tsx
<ReactionButton
  reactions={reactionGroups.socialReactions}
  displayMode="both"
  classNames={{
    button: "relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 overflow-hidden",
    text: "text-base font-medium",
    icon: "text-2xl",
    menu: "absolute bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-3 min-w-[200px] z-50",
    menuWrapperClass: "relative",
    menuIcon: "flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110",
    tooltip: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
  }}
/>
```

### Example 5: Minimalist Outline Design

```tsx
<ReactionButton
  reactions={reactionGroups.feedbackReactions}
  displayMode="both"
  classNames={{
    button: "border-2 border-gray-300 hover:border-gray-400 rounded-lg px-4 py-2 bg-transparent transition-all",
    text: "text-gray-600 text-sm",
    icon: "text-xl",
    menu: "border border-gray-200 shadow-md bg-white rounded-lg p-2",
    menuIcon: "p-2 rounded hover:bg-gray-50 transition-colors"
  }}
/>
```

---

## 💡 Pro Tips

### 1. Start Simple, Iterate Fast
Begin with minimal overrides and gradually add styles:

```tsx
// Step 1: Basic button style
classNames={{ button: "rounded-full px-4 py-2 bg-blue-500 text-white" }}

// Step 2: Add hover effects
classNames={{ button: "rounded-full px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition" }}

// Step 3: Style the menu
classNames={{
  button: "rounded-full px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition",
  menu: "bg-white rounded-xl shadow-lg p-2"
}}
```

### 2. Use CSS Variables for Theming

```css
.tap-root {
  --tap-button-bg: #f3f4f6;
  --tap-button-hover-bg: #e5e7eb;
  --tap-button-radius: 0.5rem;
  --tap-menu-bg: white;
  --tap-menu-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --tap-icon-size: 1.5rem;
}
```

```tsx
classNames={{
  button: "bg-[var(--tap-button-bg)] hover:bg-[var(--tap-button-hover-bg)] rounded-[var(--tap-button-radius)]",
  icon: "text-[var(--tap-icon-size)]",
  menu: "bg-[var(--tap-menu-bg)] shadow-[var(--tap-menu-shadow)]"
}}
```

### 3. Create Reusable Style Presets

```tsx
const buttonPresets = {
  social: {
    button: "rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition",
    menu: "bg-white rounded-xl shadow-lg border p-2"
  },
  minimal: {
    button: "border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50",
    menu: "bg-white border rounded-lg shadow-sm"
  },
  colorful: {
    button: "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-6 py-3 shadow-lg hover:shadow-xl",
    menu: "bg-white rounded-xl shadow-2xl p-3"
  },
  dark: {
    button: "bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-700",
    menu: "bg-gray-900 border-gray-700 rounded-lg shadow-xl p-2",
    menuIcon: "text-gray-300 hover:bg-gray-800",
    tooltip: "bg-gray-700 text-white"
  }
};

// Usage
<ReactionButton 
  reactions={reactions}
  classNames={buttonPresets.social}
/>
```

### 4. Responsive Design Patterns

```tsx
// Mobile-first, then desktop enhancements
classNames={{
  button: "p-2 sm:px-4 sm:py-2 rounded-full sm:rounded-lg",
  text: "hidden sm:inline-block",
  icon: "text-lg sm:text-xl",
  menu: "fixed sm:absolute bottom-0 sm:bottom-auto left-0 sm:left-auto w-full sm:w-auto"
}}
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| **Button loses all styling** | You overrode `button` class—add all required styles (padding, background, etc.) |
| **Menu appears in wrong position** | Ensure `menuWrapperClass` has `position: relative` |
| **Icons are too small/large** | Set `font-size` or explicit `width/height` on `icon` or `menuIcon` |
| **Tooltips not showing** | Tooltips need `position: absolute`, `z-index`, and proper positioning |
| **Hover effects missing** | Add `transition` property and hover states to your classes |
| **Menu has no background** | Add `background-color` and `box-shadow` to menu class |
| **Animations not working** | Ensure `framer-motion` is installed and version 12+ |
| **TypeScript errors** | Make sure you have React 18+ types installed |
| **Sound not playing** | Check browser autoplay policies and ensure sound files are accessible |
| **Menu not closing** | Check for CSS `pointer-events` or `z-index` conflicts |

### Installation Troubleshooting

```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check framer-motion version
npm list framer-motion
```

---

## 📦 Package Structure

```
tap-react/
├── dist/                    # Compiled output
│   ├── index.cjs.js        # CommonJS build
│   ├── index.es.js         # ES Module build
│   ├── index.d.ts          # TypeScript definitions
│   └── style.css           # Default styles (if needed)
├── src/
│   ├── components/         # React components
│   │   ├── ReactionButton.tsx
│   │   ├── ReactionMenu.tsx
│   │   └── ReactionItem.tsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useReaction.ts
│   │   └── useSound.ts
│   ├── lib/                # Utilities and types
│   │   ├── types.ts
│   │   └── utils.ts
│   └── styles/             # CSS modules
│       ├── ReactionButton.module.css
│       ├── ReactionMenu.module.css
│       └── ReactionItem.module.css
├── index.css               # Global styles
└── package.json
```

---

## 🎯 Use Cases

### Social Media Feed
Perfect for posts, comments, and user interactions

```tsx
<ReactionButton 
  reactions={socialReactions} 
  displayMode="both"
  menuPosition={{ side: "top", align: "start" }}
/>
```

### Blog Comments
Encourage thoughtful engagement with insightful reactions

```tsx
<ReactionButton 
  reactions={insightReactions} 
  displayMode="icon"
  enableTooltip={true}
/>
```

### Product Reviews
Let users express nuanced feedback

```tsx
<ReactionButton 
  reactions={feedbackReactions} 
  displayMode="text"
  scaleConfig={{ hoverScale: 1.3 }}
/>
```

### Live Chat
Quick mood expressions in conversations

```tsx
<ReactionButton 
  reactions={vibeReactions} 
  displayMode="icon"
  menuPosition={{ side: "top", align: "center" }}
/>
```

### E-commerce Ratings
Rate products with expressive icons

```tsx
<ReactionButton 
  reactions={ratingReactions}
  displayMode="both"
  onReactionSelect={(id) => submitRating(id)}
/>
```

---

## 🧪 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| iOS Safari | 14+ |
| Android Chrome | 90+ |

---

## 🤝 Contributing

We believe great tools are built together. Here's how you can contribute:

1. **Fork the repo** and create your feature branch
2. **Write code** that makes people smile 😊
3. **Add tests** for new features
4. **Update documentation** to help others
5. **Submit a pull request** with clear description

### Development Setup

```bash
git clone https://github.com/Isaacprogi/tap-react.git
cd tap-react
npm install
npm run dev
```

### Project Structure for Contributors

```
tap-react/
├── src/                    # Source code
├── example/                # Example app for testing
├── tests/                  # Unit tests
└── docs/                   # Documentation
```

---

## 📄 License

MIT © Isaac Anasonye

---

## 🙌 Acknowledgments

- Inspired by the delightful reaction systems on Facebook, LinkedIn, and Medium
- Powered by the incredible [Framer Motion](https://www.framer.com/motion/) library
- Built with love for the React community

---

## 💬 Support & Community

- **Issues**: [GitHub Issues](https://github.com/Isaacprogi/tap-react/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Isaacprogi/tap-react/discussions)
- **Documentation**: [tap-react.dev](https://tap-react.dev) *(coming soon)*
- **Twitter**: [@tap_react](https://twitter.com/tap_react) *(coming soon)*

---

## 📊 Package Metrics

- **Bundle Size**: ~8KB (minified + gzipped)
- **Tree Shakable**: Yes
- **Dependencies**: framer-motion, clsx
- **Peer Dependencies**: react, react-dom
- **TypeScript**: Native support

---

## 🚀 Roadmap

- [ ] Accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Additional animation presets
- [ ] Server-side rendering support
- [ ] More pre-built reaction groups
- [ ] Custom animation timelines
- [ ] Gesture support (drag, swipe)
- [ ] Analytics plugin
- [ ] Theme builder tool

---

**Made with ❤️ by Isaac Anasonye**

*Transform your interactions. One reaction at a time.*
