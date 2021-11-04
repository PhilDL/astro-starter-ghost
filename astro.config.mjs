// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ {
  buildOptions: {
    site: "https://mysite.com", // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true, // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    // port: 3000,         // The port to run the dev server on.
    // tailwindConfig: './tailwind.config.js',
  },
  renderers: ["@astrojs/renderer-svelte"],
  vite: {
    resolve: {
      alias: {
        $: "/src",
        $components: "/src/components",
      },
    },
  },
};
