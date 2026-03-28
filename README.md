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

## 📦 Examples (Demo Presets Only)

> These reaction groups are **for demonstration purposes only**.
> They are included to showcase different styles and use cases.
> You can use them as inspiration or starting points, but they are **not meant as production constraints**.

You can either:

* Import them directly from `tap-react`
* Or explore them in the `data/reactions.ts` file in the repository

---

### 1. Social Reactions (UI inspiration only)

LinkedIn/Facebook-style interaction set for social feeds.

```tsx
import { reactionGroups } from "tap-react";

<ReactionButton reactions={reactionGroups.socialReactions} />
```

Includes: Like, Love, Clap, Funny, Celebrate

---

### 2. Insight Reactions (UI inspiration only)

Medium/Dev.to-style reactions for content and articles.

```tsx
<ReactionButton reactions={reactionGroups.insightReactions} />
```

Includes: Star, Fire, Insightful, Rocket, Bold

---

### 3. Feedback Reactions (UI inspiration only)

Forum/community moderation-style reactions.

```tsx
<ReactionButton reactions={reactionGroups.feedbackReactions} />
```

Includes: Agree, Disagree, Important, Question, Flag

---

### 4. Vibe Reactions (UI inspiration only)

Casual/Discord-style expressive reactions.

```tsx
<ReactionButton reactions={reactionGroups.vibeReactions} />
```

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

// ✅ You must provide all necessary styles for each className
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

MenuIcon style will also be overiddden by that from single reaction


```

### Per-Reaction Override Behavior

The same override principle applies to individual reaction styling:

```tsx
const reactions = [
  {
    id: "like",
    label: "Like",
    icon: <HiOutlineHandThumbUp />,
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

Make reactions even more engaging with audio feedback. Tap React supports three different sound trigger modes:

#### 🎵 Sound Trigger Modes

| Mode | Description | When Sound Plays |
|------|-------------|------------------|
| **`"click"`** | Automatic on reaction selection | Plays immediately when user clicks a reaction |
| **`"hover"`** | Automatic on menu item hover | Plays when user hovers over reaction options |
| **`"manual"`** | Full control over playback | You control when to play via the `playSound` callback |

---

#### Example 1: Click Mode (Automatic)

Simplest setup - sound plays automatically when a reaction is selected:

```tsx
import likeSound from "./assets/sounds/like.mp3";
import loveSound from "./assets/sounds/love.mp3";

const reactions = [
  { 
    id: "like", 
    label: "Like", 
    icon: <HiOutlineHandThumbUp />,
    sound: likeSound  // Plays automatically on click
  },
  { 
    id: "love", 
    label: "Love", 
    icon: <HiHeart />,
    sound: loveSound  // Different sound per reaction
  },
];

<ReactionButton
  reactions={reactions}
  soundConfig={{
    enabled: true,
    playOn: "click"  // Auto-play on click
  }}
  onReactionSelect={(id, { revert }) => {
    // Sound plays automatically before this callback
    updateReaction(id).catch(() => revert());
  }}
/>
```

---

#### Example 2: Hover Mode (Automatic)

Great for preview feedback - sounds play when users explore options:

```tsx
const reactions = [
  { 
    id: "like", 
    label: "Like", 
    icon: <HiOutlineHandThumbUp />,
    sound: "/sounds/hover-like.mp3"  // Plays on hover
  },
  { 
    id: "love", 
    label: "Love", 
    icon: <HiHeart />,
    sound: "/sounds/hover-love.mp3"
  },
];

<ReactionButton
  reactions={reactions}
  soundConfig={{
    enabled: true,
    playOn: "hover"  // Auto-play when hovering menu items
  }}
/>
```

---

#### Example 3: Manual Mode (Full Control)
```tsx
import { useRef } from "react";
import likeSound from "./assets/sounds/like.mp3";

const reactions = [
  { 
    id: "like", 
    label: "Like", 
    icon: <HiOutlineHandThumbUp />,
    sound: likeSound,
  },
];

const PostCard = ({ post, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const playSoundRef = useRef<(() => void) | null>(null);

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
      
      // ✅ Only play sound AFTER successful API call
      playSoundRef.current?.();
      
    } catch (err) {
      // ❌ Don't play sound on failure
      console.error("Failed to update reaction:", err);
      revert();
    } finally {
      setLoading(false);
    }
  };

  return (
    <ReactionButton
      reactions={reactions}
      soundConfig={{
        enabled: true,
        playOn: "manual",  // Manual mode - you control playback
        onManualTrigger: (playSound) => {
          // Store the playSound function in ref
          playSoundRef.current = playSound;
        }
      }}
      onReactionSelect={handleReaction}
    />
  );
};
```

---

#### Why Use Manual Mode?

Manual mode gives you complete control over when sounds play:

```tsx
// ✅ Play only on successful API response
const handleReaction = async (id, { revert }) => {
  try {
    await saveReaction(id);
    playSoundRef.current?.();  // Success sound
  } catch {
    revert();  // No sound on error
  }
};

// ✅ Play with custom volume or effects
const handleReaction = (id, { revert }) => {
  if (userPreferences.soundEnabled) {
    playSoundRef.current?.();  // Respect user preferences
  }
  updateReaction(id).catch(revert);
};

```

---

#### Sound Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enabled` | `boolean` | `false` | Master switch for all sounds |
| `playOn` | `"click" \| "hover" \| "manual"` | `"click"` | When to trigger sounds |
| `onManualTrigger` | `(playSound) => void` | `undefined` | **Required when `playOn="manual"`** - Receives the play function |

**Important Notes:**
- `onManualTrigger` is **only called when `playOn="manual"`**
- In manual mode, you must store the `playSound` callback and call it manually
- Each reaction can have its own sound file via the `sound` property
- Sounds won't play if `enabled: false` regardless of mode


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

### ⚠️ **IMPORTANT: Animation Config Note**

**When any animation configuration is enabled, avoid adding custom CSS transitions to the elements being animated.** Adding CSS transitions alongside Framer Motion animations can lead to unexpected behavior, including:

- Conflicting animation timings
- Jittery or doubled animations
- Performance issues
- Layout shifts during animation

```tsx
// ❌ AVOID - CSS transitions with animationConfig enabled
<ReactionButton
  animationConfig={{ button: true, menu: true, items: true }}
  classNames={{
    button: "transition-all duration-300",  // This will conflict!
    menuIcon: "transition-transform"       // This will conflict!
  }}
/>

// ✅ CORRECT - Let Framer Motion handle animations
<ReactionButton
  animationConfig={{ button: true, menu: true, items: true }}
  classNames={{
    button: "",  // No transition CSS
    menuIcon: "" // No transition CSS
  }}
/>

// ✅ ALTERNATIVE - Disable animation config if you want CSS transitions
<ReactionButton
  animationConfig={{ button: false, menu: false, items: false }}
  classNames={{
    button: "transition-all duration-300",  // Now CSS transitions work
    menuIcon: "transition-transform"       // Now CSS transitions work
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
    button: "inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 shadow-sm",
    text: "text-sm font-medium text-gray-700",
    icon: "text-xl",
    menu: "flex bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 min-w-[280px] ",
    menuWrapperClass: "z-[50] bg-white",
    menuIcon: "flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100",
    tooltip: "absolute -top-8 bg-red-500 rounded-md p-1 text-white "
  }}
/>
```


### Example 2: Gradient Button with Animation

```tsx
<ReactionButton
  reactions={reactionGroups.socialReactions}
  displayMode="both"
  classNames={{
    button: "relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl overflow-hidden",
    text: "text-base font-medium",
    icon: "text-2xl",
    menu: "bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-3 min-w-[200px] z-50",
    menuWrapperClass: "relative z-[50]",
    menuIcon: "flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 hover:scale-110",
    tooltip: "absolute -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
  }}
/>
```

### Example 5: Minimalist Outline Design

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


### Animation & Transition Conflicts

**Critical:** When using Framer Motion animations, CSS transitions will conflict:

```tsx
// ❌ Problem: CSS transition + Framer Motion = jitter
<ReactionButton
  animationConfig={{ button: true }}
  classNames={{
    button: "transition-all duration-300"  // Remove this!
  }}
/>

// ✅ Solution: Remove CSS transitions
<ReactionButton
  animationConfig={{ button: true }}
  classNames={{
    button: ""  // No transition CSS
  }}
/>

// ✅ Alternative: Use CSS transitions only
<ReactionButton
  animationConfig={{ button: false, menu: false, items: false }}
  classNames={{
    button: "transition-all duration-300",  // Now this works
    menuIcon: "transition-transform duration-200"
  }}
/>
```

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


## 🤝 Contributing

We believe great tools are built together. Here's how you can contribute:

1. **Fork the repo** and create your feature branch
2. **Write code** that makes people smile 😊
3. **Add tests** for new features
4. **Update documentation** to help others
5. **Submit a pull request** with clear description


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

---

**Made with ❤️ by Isaac Anasonye**

*Transform your interactions. One reaction at a time.*
```
