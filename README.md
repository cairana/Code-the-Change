# Code Like a Boss 🔥

An interactive React playground for learning and experimenting with Tailwind CSS components. Perfect for beginners who want to see their code come to life instantly!

## Features

- 🎨 **Live Preview** - See your changes instantly
- 🌈 **Multiple Themes** - Light, Dark, and Pastel modes
- 🔤 **Font Variety** - 10 different font options
- 📱 **Mobile Responsive** - Works great on all devices
- ⚡ **Interactive Elements** - onClick functionality with notifications
- 🎯 **Component Types** - Buttons and Cards to start with

## Getting Started

1. Choose your preferred theme and font from the sidebar
2. Select what you want to build (Button or Card)
3. Edit the code in the code editor
4. Watch your changes appear in the Live Preview
5. Click your button to see interactive notifications!

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS for styling
- Modern ESLint configuration

## Installation

```bash
npm install
npm run dev
```

## Tailwind CSS Classes Reference

Use these Tailwind classes to style your components:

### Background Colors

```
bg-red-500, bg-blue-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-pink-500
bg-gray-500, bg-slate-500, bg-zinc-500, bg-neutral-500, bg-stone-500
bg-orange-500, bg-amber-500, bg-lime-500, bg-emerald-500, bg-teal-500
bg-cyan-500, bg-sky-500, bg-indigo-500, bg-violet-500, bg-fuchsia-500, bg-rose-500
bg-white, bg-black, bg-transparent
```

### Text Colors

```
text-red-500, text-blue-500, text-green-500, text-yellow-500, text-purple-500
text-gray-500, text-slate-500, text-white, text-black
text-orange-500, text-pink-500, text-indigo-500, text-emerald-500
```

### Text Sizes

```
text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl
```

### Padding

```
p-1, p-2, p-3, p-4, p-5, p-6, p-8, p-10, p-12
px-1, px-2, px-3, px-4, px-5, px-6, px-8, px-10
py-1, py-2, py-3, py-4, py-5, py-6, py-8, py-10
```

### Rounded Corners

```
rounded-none, rounded-sm, rounded, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-3xl, rounded-full
```

### Shadows

```
shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl, shadow-none
```

### Hover Effects

```
hover:bg-blue-600, hover:bg-red-600, hover:bg-green-600
hover:text-white, hover:text-black
hover:scale-105, hover:scale-110
hover:shadow-lg, hover:shadow-xl
```

### Mobile Touch Effects (Active States)

```
active:scale-95, active:scale-90
active:bg-blue-700, active:bg-red-700
```

### Focus States (Accessibility)

```
focus:outline-none, focus:ring-2, focus:ring-blue-300, focus:ring-red-300
focus:bg-blue-600, focus:text-white
```

### Transform & Transitions

```
transform, transition-all, transition-colors, transition-transform
duration-200, duration-300, duration-500
scale-95, scale-105, scale-110
```

## Example Combinations

### Buttons

```jsx
<button className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white px-6 py-3 rounded-lg">
  Click me!
</button>

<button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-lg">
  Success Button
</button>

<button className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-8 py-4 rounded-full">
  Rounded Button
</button>
```

### Cards

```jsx
<div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
  <h3 className="text-xl font-medium mb-2 text-slate-800">Card Title</h3>
  <p className="text-slate-600">Card description goes here</p>
</div>

<div className="bg-slate-100 rounded-xl shadow-lg p-8 border">
  <h3 className="text-2xl font-bold mb-4">Featured Card</h3>
  <p className="text-gray-700">This is a featured card with more padding</p>
</div>

<div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6">
  <h3 className="text-xl font-semibold mb-2">Gradient Card</h3>
  <p className="opacity-90">Beautiful gradient background</p>
</div>
```

## Interactive Features

Add onClick functionality to your buttons:

```jsx
<button onClick={console.log("Hello world!")} className="bg-blue-500 text-white p-4">
  Log Message
</button>

<button onClick={console.error("Show notification")} className="bg-pink-500 text-white p-4">
  Show Notification
</button>

<button onClick={alert("Alert message")} className="bg-green-500 text-white p-4">
  Show Alert
</button>
```

## Pro Tips

- **Combine classes**: Use spaces to combine multiple classes: `"bg-blue-500 text-white px-4 py-2"`
- **Mobile-first**: Include `active:` states for better mobile experience
- **Accessibility**: Always add `focus:` states for keyboard navigation
- **Gradients**: Use `bg-gradient-to-r from-blue-500 to-purple-500` for beautiful gradients
- **Responsive**: Add `lg:` prefixes for desktop-specific styles

## Color Families

Organize your colors by families for better design consistency:

**Blues**: `bg-blue-400`, `bg-blue-500`, `bg-blue-600`, `bg-sky-500`, `bg-cyan-500`
**Reds**: `bg-red-400`, `bg-red-500`, `bg-red-600`, `bg-rose-500`, `bg-pink-500`
**Greens**: `bg-green-400`, `bg-green-500`, `bg-green-600`, `bg-emerald-500`, `bg-lime-500`
**Purples**: `bg-purple-400`, `bg-purple-500`, `bg-purple-600`, `bg-violet-500`, `bg-fuchsia-500`

## Development

This project uses:

- **Vite** for fast development and building
- **TypeScript** for type safety
- **ESLint** for code quality
- **Tailwind CSS** for styling

### ESLint Configuration

For production applications, you can enhance the ESLint configuration with type-aware rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

Happy coding! 🎉
