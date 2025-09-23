import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://roomofwires.com",
  
  integrations: [
    tailwind(),
    alpinejs(),
    sitemap({
      filter: (page) =>
        page !== "https://roomofwires.com/4t_thieves/" &&
        page !== "https://roomofwires.com/dasf/" &&
        page !== "https://roomofwires.com/stationzero/",
    }),
  ],
});
