import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mysite.com",
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  build: {
    //
  },
  server: {
    port: 3000,
  },
  vite: {
    resolve: {
      alias: {
        "~": "/src",
        $components: "/src/components",
      },
    },
  },
  integrations: [sitemap()],
});
