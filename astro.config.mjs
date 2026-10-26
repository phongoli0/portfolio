// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://phongtruong.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'always',
  },
});
