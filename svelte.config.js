import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.svx'],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
