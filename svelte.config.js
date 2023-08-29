import vercel from '@sveltejs/adapter-vercel';
import node from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

const dockerBuild = process.env.DOCKER_BUILD

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    // adapter: dockerBuild ? node() : vercel(),
    adapter: node(),
  },
  // preprocess: preprocess({
  //   scss: {
  //     // Specify the path to your main SCSS file
  //     prependData: `@import 'src/theme/dark/_smui-theme.scss';`
  //   },
  // }),

};




export default config;
