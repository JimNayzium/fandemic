import vercel from '@sveltejs/adapter-vercel';
import node from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-static';

const dockerBuild = process.env.DOCKER_BUILD

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // onwarn: (warning, handler) => {
  //   if (warning.code === 'a11y-click-events-have-key-events') return
  //   handler(warning)
  // },
  onwarn: (warning, handler) => {
    if (warning.code.startsWith('a11y-')) return
    handler(warning)
  },

  kit: {
    // * use this for vercel deployments.
    adapter: dockerBuild ? node() : vercel(),

    //* use node adapter if we want to use server side rendering
    // adapter: node(),


    //* adaptor is for fully static site using all client side javascript rendering.
    //* however all routes need to be full staticalable generatedd no database calls!
    // adapter: adapter(),

  },

  // preprocess: preprocess({
  //   scss: {
  //     // Specify the path to your main SCSS file
  //     prependData: `@import 'src/theme/dark/_smui-theme.scss';`
  //   },
  // }),

};

export default config;
