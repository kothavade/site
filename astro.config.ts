import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import mdx from '@astrojs/mdx'
import solidJs from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'
import unocss from 'unocss/astro'
import vesper from './src/lib/vesper.json'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kothavade.com',
  integrations: [mdx(), sitemap(), solidJs(), unocss({
    injectReset: true,
  }), vue()],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  markdown: {
    shikiConfig: {
    // @ts-expect-error
      theme: vesper,
      wrap: true,
    },
  },
})
