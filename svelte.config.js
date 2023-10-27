import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
  },
  paths: {
    base: '/IE104-Project-Personal-Blog',
    assets: '/IE104-Project-Personal-Blog'
  },
  preprocess: [vitePreprocess({})]
}

// config.paths = { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH }

export default config;