import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import unocss from 'unocss/astro';
import vesper from './src/lib/vesper.json';

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kothavade.com',
  integrations: [mdx(), sitemap(), solidJs(), unocss({
    injectReset: true
  }), vue()],
  markdown: {
    shikiConfig: {
      // @ts-expect-error theme is weird
      theme: vesper,
      wrap: true
    }
  },
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  })
});
