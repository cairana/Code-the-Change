/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        // Fun and crazy fonts
        bungee: ["Bungee", "cursive"], // Bold, funky display font
        creepster: ["Creepster", "cursive"], // Horror/spooky style
        orbitron: ["Orbitron", "monospace"], // Futuristic sci-fi
        fredoka: ["Fredoka One", "cursive"], // Rounded, playful
        bangers: ["Bangers", "cursive"], // Comic book style
        pacifico: ["Pacifico", "cursive"], // Handwritten, casual
        kalam: ["Kalam", "cursive"], // Handwritten marker style
      },
    },
  },
  plugins: [],
  safelist: [
    // Background colors
    {
      pattern:
        /^bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
    // Text colors
    {
      pattern:
        /^text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
    // Border colors
    {
      pattern:
        /^border-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
    // Gradient from colors
    {
      pattern:
        /^from-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
    // Gradient to colors
    {
      pattern:
        /^to-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
    // Gradient via colors
    {
      pattern:
        /^via-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
    // Gradient directions
    {
      pattern: /^bg-gradient-to-(t|tr|r|br|b|bl|l|tl)$/,
    },
    // Text sizes
    {
      pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
    },
    // Padding and margins
    {
      pattern:
        /^(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)$/,
    },
    // Border radius
    {
      pattern: /^rounded(-none|-sm|-md|-lg|-xl|-2xl|-3xl|-full)?$/,
    },
    // Shadows
    {
      pattern: /^shadow(-sm|-md|-lg|-xl|-2xl|-inner|-none)?$/,
    },
    // Width and height
    {
      pattern:
        /^(w|h)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|auto|px|full|screen)$/,
    },
    // Max width
    {
      pattern:
        /^max-w-(none|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full|min|max|fit|prose|screen-sm|screen-md|screen-lg|screen-xl|screen-2xl)$/,
    },
    // Transform and transitions
    {
      pattern:
        /^(transform|transition-all|transition-colors|transition-opacity|transition-shadow|transition-transform|duration-75|duration-100|duration-150|duration-200|duration-300|duration-500|duration-700|duration-1000|ease-linear|ease-in|ease-out|ease-in-out)$/,
    },
    // Scale, rotate, translate
    {
      pattern:
        /^(scale|rotate|translate-x|translate-y|skew-x|skew-y)-(0|1|2|3|6|12|45|90|180)$/,
    },
    // Flexbox and grid
    {
      pattern:
        /^(flex|flex-row|flex-col|flex-wrap|flex-nowrap|flex-1|flex-auto|flex-initial|flex-none|grid|grid-cols-1|grid-cols-2|grid-cols-3|grid-cols-4|grid-cols-5|grid-cols-6|grid-cols-12|items-start|items-end|items-center|items-baseline|items-stretch|justify-start|justify-end|justify-center|justify-between|justify-around|justify-evenly)$/,
    },
    // Position
    {
      pattern: /^(static|fixed|absolute|relative|sticky)$/,
    },
    // Display
    {
      pattern:
        /^(block|inline-block|inline|flex|inline-flex|table|inline-table|grid|inline-grid|contents|list-item|hidden)$/,
    },
    // Font weights
    {
      pattern:
        /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
    },
    // Opacity
    {
      pattern: /^opacity-(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)$/,
    },
    // Z-index
    {
      pattern: /^z-(0|10|20|30|40|50|auto)$/,
    },
    {
      pattern:
        /^font-(poppins|nunito|roboto|bungee|creepster|orbitron|fredoka|bangers|pacifico|kalam)$/,
    },
    // Common utility classes including hover states
    "backdrop-blur-sm",
    "backdrop-blur-md",
    "backdrop-blur-lg",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-pink-500",
    "focus:ring-blue-500",
    "focus:ring-purple-500",
    "focus:border-pink-500",
    "focus:border-blue-500",
    "focus:border-purple-500",
    "resize-none",
    "font-mono",
    "whitespace-pre-wrap",
    "overflow-hidden",
    "overflow-x-auto",
    "cursor-pointer",
    "select-none",
    "user-select-none",
    "hover:scale-105",
    "hover:scale-110",
    "hover:shadow-lg",
    "hover:shadow-xl",
    "bg-clip-text",
    "text-transparent",
    // Add common hover background colors explicitly
    "hover:bg-pink-500",
    "hover:bg-pink-600",
    "hover:bg-pink-700",
    "hover:bg-blue-500",
    "hover:bg-blue-600",
    "hover:bg-blue-700",
    "hover:bg-green-500",
    "hover:bg-green-600",
    "hover:bg-green-700",
    "hover:bg-purple-500",
    "hover:bg-purple-600",
    "hover:bg-purple-700",
    "hover:bg-orange-500",
    "hover:bg-orange-600",
    "hover:bg-orange-700",
    "hover:bg-red-500",
    "hover:bg-red-600",
    "hover:bg-red-700",
    "hover:bg-yellow-500",
    "hover:bg-yellow-600",
    "hover:bg-yellow-700",
    "hover:bg-teal-500",
    "hover:bg-teal-600",
    "hover:bg-teal-700",
    "hover:bg-indigo-500",
    "hover:bg-indigo-600",
    "hover:bg-indigo-700",
    "hover:bg-emerald-500",
    "hover:bg-emerald-600",
    "hover:bg-emerald-700",
    "hover:bg-cyan-500",
    "hover:bg-cyan-600",
    "hover:bg-cyan-700",
    "hover:bg-sky-500",
    "hover:bg-sky-600",
    "hover:bg-sky-700",
    "hover:bg-violet-500",
    "hover:bg-violet-600",
    "hover:bg-violet-700",
    "hover:bg-fuchsia-500",
    "hover:bg-fuchsia-600",
    "hover:bg-fuchsia-700",
    "hover:bg-rose-500",
    "hover:bg-rose-600",
    "hover:bg-rose-700",
    "hover:bg-amber-500",
    "hover:bg-amber-600",
    "hover:bg-amber-700",
    "hover:bg-lime-500",
    "hover:bg-lime-600",
    "hover:bg-lime-700",
  ],
};
