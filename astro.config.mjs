import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://master--pxxl24-blog-03032024.netlify.app",
  integrations: [preact()]
});