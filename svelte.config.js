import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
      assets: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
    },
    
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html',
      precompress: false,
      strict: true,
    }),
  },
  paths: {
    base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
    assets: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
  },
  preprocess: [vitePreprocess({})]
}

// config.paths = { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH }

export default config;