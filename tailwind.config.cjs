/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gold: "#fdd835",
        lime: "#daf141",
        camo: "#4c4a3d",
        sand: "#9F9B91",
        clay: "#7D7B74",
        coal: "#1b1b19",
        rust: "#f38f3d",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
