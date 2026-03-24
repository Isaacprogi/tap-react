# 🎭 Tap React

A flexible, animated reaction button system inspired by social media platforms like Facebook and LinkedIn. Built with **React**, **TypeScript**, and **Framer Motion**, it allows users to react to content with emojis, icons, or labels—fully customizable and production-ready.

---

## ✨ Features

- 🎯 Fully customizable reaction system
- 🎨 Supports icons, text, or combined display modes
- ⚡ Smooth animations using Framer Motion
- 🧠 Controlled + uncontrolled state support
- 🔄 Optimistic updates with revert support
- 🎛️ Configurable menu positioning (top/bottom, left/center/right)
- 🎭 Custom styling via class overrides
- 💅 Individual reaction styling with `classNames` per reaction
- 🎨 Color changes when reaction is active
- 🧩 Reusable across posts, comments, feeds, etc.
- 🎯 Tooltip support with custom styling
- 📱 Fully responsive

---

## 📦 Installation

```bash
npm install framer-motion tap-react
```

> Make sure you also have React + TypeScript installed.

---

## 🚀 Basic Usage

```tsx
import { ReactionButton } from 'tap-react'
import { HiHeart, HiOutlineHandThumbUp } from "react-icons/hi2";

const reactions = [
  {
    id: "like",
    label: "Like",
    icon: <HiOutlineHandThumbUp />,
  },
  {
    id: "love",
    label: "Love",
    icon: <HiHeart />,
  },
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
        // revert() if API fails
      }}
      classNames={{
        button: "px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200",
        text: "text-sm font-medium",
        icon: "text-xl",
        menu: "shadow-lg border bg-white p-2 rounded-xl",
        menuWrapperClass: "bg-white rounded-xl",
        menuIcon: "p-2 hover:bg-gray-50 rounded-lg",
        tooltip: "bg-gray-800 text-white text-xs px-2 py-1 rounded",
      }}
    />
  );
}
```

---

## 📚 Pre-built Reaction Groups

Tap React comes with 4 curated reaction groups for different use cases:

### 1. Social Reactions (LinkedIn/Facebook style)
Perfect for social media feeds and personal content.

```tsx
import { reactionGroups } from 'tap-react';

// Use in your component
<ReactionButton
  reactions={reactionGroups.socialReactions}
  // ... other props
/>
```

### 2. Insight Reactions (Medium/Dev.to style)
Ideal for blogs, technical content, and knowledge sharing.

```tsx
<ReactionButton
  reactions={reactionGroups.insightReactions}
  // ... other props
/>
```

### 3. Feedback Reactions (Forum/Community style)
Great for moderation, Q&A, and community feedback.

```tsx
<ReactionButton
  reactions={reactionGroups.feedbackReactions}
  // ... other props
/>
```

### 4. Vibe Reactions (Discord/Casual style)
Perfect for casual chat, mood tracking, and fun interactions.

```tsx
<ReactionButton
  reactions={reactionGroups.vibeReactions}
  // ... other props
/>
```

### Complete Reaction Groups Definition

```tsx
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

export const reactionGroups = {
  // Social / LinkedIn-style reactions
  socialReactions: [
    {
      id: "like",
      label: "Like",
      icon: <HiOutlineHandThumbUp />,
      classNames: {
        menuItem: "hover:bg-blue-50 px-2 py-1 rounded-md",
        menuIcon: "bg-blue-100 text-blue-600 rounded-full p-2",
        tooltip: "bg-blue-500 text-white",
      },
      colorAfterReaction: { text: "text-blue-600", icon: "text-blue-600" },
    },
    {
      id: "love",
      label: "Love",
      icon: <HiHeart />,
      classNames: {
        menuItem: "hover:bg-red-50 px-2 py-1 rounded-md",
        menuIcon: "bg-red-100 text-red-500 rounded-full p-2",
        tooltip: "bg-pink-500 text-white",
      },
      colorAfterReaction: { text: "text-red-500", icon: "text-red-500" },
    },
    {
      id: "clap",
      label: "Clap",
      icon: <HiHandRaised />,
      classNames: {
        menuItem: "hover:bg-yellow-50 px-2 py-1 rounded-md",
        menuIcon: "bg-yellow-100 text-yellow-500 rounded-full p-2",
        tooltip: "bg-yellow-500 text-white",
      },
      colorAfterReaction: { text: "text-yellow-500", icon: "text-yellow-500" },
    },
    {
      id: "funny",
      label: "Funny",
      icon: <HiFaceSmile />,
      classNames: {
        menuItem: "hover:bg-green-50 px-2 py-1 rounded-md",
        menuIcon: "bg-green-100 text-green-500 rounded-full p-2",
        tooltip: "bg-green-500 text-white",
      },
      colorAfterReaction: { text: "text-green-500", icon: "text-green-500" },
    },
    {
      id: "celebrate",
      label: "Celebrate",
      icon: <HiCake />,
      classNames: {
        menuItem: "hover:bg-purple-50 px-2 py-1 rounded-md",
        menuIcon: "bg-purple-100 text-purple-500 rounded-full p-2",
        tooltip: "bg-purple-500 text-white",
      },
      colorAfterReaction: { text: "text-purple-500", icon: "text-purple-500" },
    },
  ],

  // Insight / Knowledge reactions
  insightReactions: [
    {
      id: "star",
      label: "Star",
      icon: <HiStar />,
      classNames: {
        menuItem: "hover:bg-amber-50 px-2 py-1 rounded-md",
        menuIcon: "bg-amber-100 text-amber-500 rounded-full p-2",
        tooltip: "bg-amber-500 text-white",
      },
      colorAfterReaction: { text: "text-amber-500", icon: "text-amber-500" },
    },
    {
      id: "fire",
      label: "Fire",
      icon: <HiFire />,
      classNames: {
        menuItem: "hover:bg-orange-50 px-2 py-1 rounded-md",
        menuIcon: "bg-orange-100 text-orange-500 rounded-full p-2",
        tooltip: "bg-orange-500 text-white",
      },
      colorAfterReaction: { text: "text-orange-500", icon: "text-orange-500" },
    },
    {
      id: "insightful",
      label: "Insightful",
      icon: <HiLightBulb />,
      classNames: {
        menuItem: "hover:bg-yellow-50 px-2 py-1 rounded-md",
        menuIcon: "bg-yellow-100 text-yellow-600 rounded-full p-2",
        tooltip: "bg-yellow-600 text-white",
      },
      colorAfterReaction: { text: "text-yellow-600", icon: "text-yellow-600" },
    },
    {
      id: "rocket",
      label: "Rocket",
      icon: <HiRocketLaunch />,
      classNames: {
        menuItem: "hover:bg-indigo-50 px-2 py-1 rounded-md",
        menuIcon: "bg-indigo-100 text-indigo-500 rounded-full p-2",
        tooltip: "bg-indigo-500 text-white",
      },
      colorAfterReaction: { text: "text-indigo-500", icon: "text-indigo-500" },
    },
    {
      id: "bolt",
      label: "Bold",
      icon: <HiBolt />,
      classNames: {
        menuItem: "hover:bg-cyan-50 px-2 py-1 rounded-md",
        menuIcon: "bg-cyan-100 text-cyan-600 rounded-full p-2",
        tooltip: "bg-cyan-600 text-white",
      },
      colorAfterReaction: { text: "text-cyan-600", icon: "text-cyan-600" },
    },
  ],

  // Feedback / Moderation reactions
  feedbackReactions: [
    {
      id: "agree",
      label: "Agree",
      icon: <HiOutlineHandThumbUp />,
      classNames: {
        menuItem: "hover:bg-teal-50 px-2 py-1 rounded-md",
        menuIcon: "bg-teal-100 text-teal-600 rounded-full p-2",
        tooltip: "bg-teal-600 text-white",
      },
      colorAfterReaction: { text: "text-teal-600", icon: "text-teal-600" },
    },
    {
      id: "disagree",
      label: "Disagree",
      icon: <HiHandThumbDown />,
      classNames: {
        menuItem: "hover:bg-rose-50 px-2 py-1 rounded-md",
        menuIcon: "bg-rose-100 text-rose-500 rounded-full p-2",
        tooltip: "bg-rose-500 text-white",
      },
      colorAfterReaction: { text: "text-rose-500", icon: "text-rose-500" },
    },
    {
      id: "important",
      label: "Important",
      icon: <HiExclamationCircle />,
      classNames: {
        menuItem: "hover:bg-red-50 px-2 py-1 rounded-md",
        menuIcon: "bg-red-100 text-red-600 rounded-full p-2",
        tooltip: "bg-red-600 text-white",
      },
      colorAfterReaction: { text: "text-red-600", icon: "text-red-600" },
    },
    {
      id: "question",
      label: "Question",
      icon: <HiChatBubbleLeftEllipsis />,
      classNames: {
        menuItem: "hover:bg-sky-50 px-2 py-1 rounded-md",
        menuIcon: "bg-sky-100 text-sky-500 rounded-full p-2",
        tooltip: "bg-sky-500 text-white",
      },
      colorAfterReaction: { text: "text-sky-500", icon: "text-sky-500" },
    },
    {
      id: "flag",
      label: "Flag",
      icon: <HiFlag />,
      classNames: {
        menuItem: "hover:bg-slate-50 px-2 py-1 rounded-md",
        menuIcon: "bg-slate-100 text-slate-500 rounded-full p-2",
        tooltip: "bg-slate-500 text-white",
      },
      colorAfterReaction: { text: "text-slate-500", icon: "text-slate-500" },
    },
  ],

  // Vibe / Mood reactions
  vibeReactions: [
    {
      id: "sparkle",
      label: "Sparkle",
      icon: <HiSparkles />,
      classNames: {
        menuItem: "hover:bg-fuchsia-50 px-2 py-1 rounded-md",
        menuIcon: "bg-fuchsia-100 text-fuchsia-500 rounded-full p-2",
        tooltip: "bg-fuchsia-500 text-white",
      },
      colorAfterReaction: { text: "text-fuchsia-500", icon: "text-fuchsia-500" },
    },
    {
      id: "music",
      label: "Music",
      icon: <HiMusicalNote />,
      classNames: {
        menuItem: "hover:bg-violet-50 px-2 py-1 rounded-md",
        menuIcon: "bg-violet-100 text-violet-500 rounded-full p-2",
        tooltip: "bg-violet-500 text-white",
      },
      colorAfterReaction: { text: "text-violet-500", icon: "text-violet-500" },
    },
    {
      id: "global",
      label: "Global",
      icon: <HiGlobeAlt />,
      classNames: {
        menuItem: "hover:bg-blue-50 px-2 py-1 rounded-md",
        menuIcon: "bg-blue-100 text-blue-500 rounded-full p-2",
        tooltip: "bg-blue-500 text-white",
      },
      colorAfterReaction: { text: "text-blue-500", icon: "text-blue-500" },
    },
    {
      id: "sun",
      label: "Sun",
      icon: <HiSun />,
      classNames: {
        menuItem: "hover:bg-orange-50 px-2 py-1 rounded-md",
        menuIcon: "bg-orange-100 text-orange-400 rounded-full p-2",
        tooltip: "bg-orange-400 text-white",
      },
      colorAfterReaction: { text: "text-orange-400", icon: "text-orange-400" },
    },
    {
      id: "moon",
      label: "Moon",
      icon: <HiMoon />,
      classNames: {
        menuItem: "hover:bg-indigo-50 px-2 py-1 rounded-md",
        menuIcon: "bg-indigo-100 text-indigo-400 rounded-full p-2",
        tooltip: "bg-indigo-400 text-white",
      },
      colorAfterReaction: { text: "text-indigo-400", icon: "text-indigo-400" },
    },
  ],
};
```

---

## 📱 Real-World Example: Social Feed with JSON Server

Here's a complete example showing how to integrate `tap-react` into a social feed with persistent reactions using JSON Server.

### Setup JSON Server

First, install JSON Server globally:

```bash
npm install -g json-server
```

Create a `db.json` file in your project root:

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

Start JSON Server:

```bash
json-server --watch db.json --port 3000
```

Your API will be available at `http://localhost:3000/posts`

### Complete Implementation

```tsx
import { useEffect, useState } from "react";
import { ReactionButton, reactionGroups } from 'tap-react';

type Post = {
  id: string;
  author: string;
  content: string;
  reactionId: string;
};

// Post Card Component with Reaction Button
const PostCard = ({ 
  post, 
  onUpdate 
}: { 
  post: Post; 
  onUpdate: (id: string, reactionId: string) => void;
}) => {
  const [reactionLoading, setReactionLoading] = useState(false);

  const handleReaction = async (
    val: string, 
    { revert }: { revert: () => void }
  ) => {
    setReactionLoading(true);

    try {
      // Optimistic update - UI updates immediately
      onUpdate(post.id, val);
      
      // API call to persist the reaction
      await fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reactionId: val }),
      });
    } catch (err) {
      console.error("Failed to update reaction:", err);
      // Revert the optimistic update if API fails
      revert();
    } finally {
      setReactionLoading(false);
    }
  };

  const scaleConfig = {
    hoverScale: 1.6,
    shrinkFactor: 0.7,
    shouldShrink: true,
    scaleType: "center" as const,
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 space-y-3 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">{post.author}</h3>
        <span className="text-xs text-gray-400">Just now</span>
      </div>

      <p className="text-gray-600 text-sm">{post.content}</p>

      <div className="pt-2">
        <ReactionButton
          displayMode="both"
          scaleConfig={scaleConfig}
          menuPosition={{
            side: "top",
            align: "start",
          }}
          enableTooltip={true}
          currentReactionId={post.reactionId}
          disabled={reactionLoading}
          reactions={reactionGroups.socialReactions}
          onReactionSelect={handleReaction}
          animationConfig={{
            button: true,
            menu: true,
            items: true,
          }}
          classNames={{
            button: "rounded-xl px-4 py-2 bg-gray-50 hover:bg-gray-100 shadow-sm transition-all",
            text: "text-sm font-medium ml-1",
            icon: "text-xl",
            menu: "p-2 rounded-xl bg-white shadow-lg border z-50",
            menuWrapperClass: "bg-white rounded-xl",
            menuIcon: "text-base hover:scale-110 transition-transform",
            tooltip: "bg-gray-800 text-white text-xs px-2 py-1 rounded",
          }}
        />
      </div>
    </div>
  );
};

// Post List Component
const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (id: string, reactionId: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, reactionId } : p))
    );
  };

  if (loading) {
    return (
      <div className="space-y-4 w-full max-w-xl">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border p-4 animate-pulse space-y-3"
          >
            <div className="h-4 w-1/3 bg-gray-200 rounded" />
            <div className="h-3 w-full bg-gray-200 rounded" />
            <div className="h-3 w-2/3 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4 w-full max-w-xl">
      {posts.map((post) => (
        <PostCard 
          key={post.id} 
          post={post} 
          onUpdate={handleUpdate} 
        />
      ))}
    </div>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center p-6">
      <div className="w-full">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Social Feed</h1>
          <p className="text-gray-500 mt-2">
            Click the reaction button to react to posts! 💫
          </p>
        </div>
        <PostList />
      </div>
    </div>
  );
}
```

### How It Works

1. **Optimistic Updates**: When a user clicks a reaction, the UI updates immediately for a snappy experience
2. **API Persistence**: The reaction is saved to JSON Server in the background
3. **Error Handling**: If the API call fails, the reaction is automatically reverted
4. **Loading States**: Disabled button shows loading state during API calls
5. **Real-time Sync**: All posts maintain their reaction state across refreshes

---

## 🧠 API Reference

### `<ReactionButton />`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `reactions` | `Reaction[]` | **Required** | List of available reactions |
| `currentReactionId` | `string` | `""` | Currently selected reaction ID |
| `disabled` | `boolean` | `false` | Disables all interactions |
| `displayMode` | `"icon" \| "text" \| "both"` | `"icon"` | How the button displays the reaction |
| `onReactionSelect` | `(id: string, utils: { revert: () => void }) => void` | **Required** | Callback when reaction changes |
| `enableTooltip` | `boolean` | `true` | Show tooltips on reaction items |
| `classNames` | `object` | **Required** | Custom styling overrides (see below) |
| `animationConfig` | `object` | `{ button: true, menu: true, items: true }` | Toggle specific animations |
| `scaleConfig` | `object` | See below | Configuration for scale animations |
| `menuPosition` | `object` | `{ side: "top", align: "start" }` | Menu positioning relative to button |

#### `classNames` Object

| Property | Description |
|----------|-------------|
| `button` | Styles for the main button |
| `text` | Styles for the reaction text |
| `icon` | Styles for the reaction icon |
| `menu` | Styles for the reaction menu container |
| `menuWrapperClass` | Styles for the menu wrapper |
| `menuIcon` | Styles for individual reaction icons in the menu |
| `tooltip` | Styles for tooltips (optional) |

#### `scaleConfig` Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `hoverScale` | `number` | `1.25` | Scale factor when hovering |
| `shrinkFactor` | `number` | `0.7` | Scale factor for non-hovered items |
| `shouldShrink` | `boolean` | `true` | Whether to shrink non-hovered items |
| `scaleType` | `"up" \| "down" \| "center"` | `"up"` | Animation scaling direction |

#### `menuPosition` Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `side` | `"top" \| "bottom"` | `"top"` | Which side the menu appears on |
| `align` | `"start" \| "center" \| "end"` | `"start"` | Horizontal alignment of the menu |

#### `animationConfig` Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `button` | `boolean` | `true` | Enable button tap animation |
| `menu` | `boolean` | `true` | Enable menu appear animation |
| `items` | `boolean` | `true` | Enable individual reaction animations |

---

### Reaction Type

```ts
type Reaction = {
  id: string;                    // Unique identifier
  label: string;                 // Display text
  icon: React.ReactNode;         // React component (icon)
  
  classNames?: {                 // Optional per-reaction styling
    menuItem?: string;           // Styles for the menu item
    menuIcon?: string;           // Styles for the icon in menu
    tooltip?: string;            // Styles for the tooltip
  };
  
  colorAfterReaction?: {         // Colors when reaction is active
    text: string;                // Text color class
    icon: string;                // Icon color class
  };
};
```

---

## 🎨 Styling Examples

### Custom Colors for Active Reactions

```tsx
const reactions = [
  {
    id: "like",
    label: "Like",
    icon: <HiOutlineHandThumbUp />,
    colorAfterReaction: {
      text: "text-blue-600",
      icon: "text-blue-600"
    }
  },
  {
    id: "love",
    label: "Love", 
    icon: <HiHeart />,
    colorAfterReaction: {
      text: "text-red-500",
      icon: "text-red-500"
    }
  }
];
```

### Per-Reaction Styling

```tsx
const reactions = [
  {
    id: "like",
    label: "Like",
    icon: <HiOutlineHandThumbUp />,
    classNames: {
      menuItem: "hover:bg-blue-50 rounded-lg",
      menuIcon: "bg-blue-100 text-blue-600 p-2 rounded-full",
      tooltip: "bg-blue-500 text-white"
    }
  }
];
```

### Complete Styling Example

```tsx
<ReactionButton
  classNames={{
    button: "bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50",
    text: "text-sm font-medium text-gray-700",
    icon: "text-xl",
    menu: "bg-white shadow-xl border rounded-xl p-3",
    menuWrapperClass: "bg-white rounded-xl shadow-lg",
    menuIcon: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
    tooltip: "bg-black text-white text-xs px-2 py-1 rounded shadow-lg"
  }}
/>
```

---

## 🎬 Advanced Use Cases

### Different Display Modes

```tsx
// Icons only
<ReactionButton displayMode="icon" />

// Text only
<ReactionButton displayMode="text" />

// Both icon and text
<ReactionButton displayMode="both" />
```

### Menu Positioning

```tsx
// Menu on top, left-aligned
<ReactionButton 
  menuPosition={{ side: "top", align: "start" }}
/>

// Menu on bottom, centered
<ReactionButton 
  menuPosition={{ side: "bottom", align: "center" }}
/>

// Menu on top, right-aligned
<ReactionButton 
  menuPosition={{ side: "top", align: "end" }}
/>
```

### Custom Animation Configuration

```tsx
// Disable button tap animation
<ReactionButton 
  animationConfig={{
    button: false,
    menu: true,
    items: true
  }}
/>

// Custom scale behavior
<ReactionButton 
  scaleConfig={{
    hoverScale: 1.8,
    shrinkFactor: 0.5,
    shouldShrink: true,
    scaleType: "up"
  }}
/>
```

### With Optimistic Updates

```tsx
const handleReaction = async (id: string, { revert }) => {
  try {
    // UI updates instantly
    setLocalReaction(id);
    
    // API call
    await api.updateReaction(postId, id);
  } catch (err) {
    // Revert if API fails
    revert();
    showErrorToast();
  }
};
```

---

## 🧩 Components

- **`ReactionButton`** – Main trigger button with integrated menu
- **`ReactionMenu`** – Floating reaction selector menu
- **`ReactionItem`** – Individual reaction option with animations

---

## 💡 Design Goals

- Lightweight & reusable
- Social-media-like UX
- Fully customizable UI layer
- Easy integration into feeds, comments, posts
- Smooth micro-interactions
- Type-safe with TypeScript

---

## 🛠 Tech Stack

- **React** – UI library
- **TypeScript** – Type safety
- **Framer Motion** – Animations
- **Tailwind CSS** – Styling (optional)
- **clsx / tailwind-merge** – Class utilities

---

## 📄 License

MIT — free to use and modify.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🙌 Author

Built by a developer focused on interactive UI systems and scalable frontend components.

---



