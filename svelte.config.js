import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  
  kit: {
    adapter: adapter(),
    // add fallback aka 200.html or 404.html
    // 		adapter: adapter({
		// 	fallback: '200.html' // may differ from host to host
		// })
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
    }
  }
};

export default config;