import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import rehypeBase from './src/lib/rehype-base.mjs';

const base = `/${(process.env.BASE_PATH ?? '').replace(/^\/+|\/+$/g, '')}`;

export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base,
  output: 'static',
  trailingSlash: 'always',
  markdown: { processor: unified({ rehypePlugins: [[rehypeBase, { base }]] }) },
  devToolbar: { enabled: false },
});
