import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  define: {
    global: {},
  },
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  base: '/Interactive--games/',
});

// import { defineConfig } from 'vite'
// import { resolve } from 'path'
// import glob from 'glob'
// import injectHTML from 'vite-plugin-html-inject'
// import FullReload from 'vite-plugin-full-reload'

// export default defineConfig({
//   root: 'src',
//   base: '/Interactive--games/',

//   build: {
//     outDir: resolve(__dirname, 'dist'),
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         index: resolve(__dirname, 'src/index.html'),
//       },
//       output: {
//         entryFileNames: 'assets/[name].[hash].js',
//         chunkFileNames: 'assets/[name].[hash].js',
//         assetFileNames: 'assets/[name].[hash][extname]'
//       }
//     }
//   },

//   plugins: [
//     injectHTML(),
//     FullReload(['./src/**/**.html'])
//   ]
// })