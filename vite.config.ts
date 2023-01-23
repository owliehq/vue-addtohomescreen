import { defineConfig } from 'vite';
import { dirname, resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/*'),
    }),
    cssInjectedByJsPlugin(),
  ],
  root: 'src',
  build: {
    outDir: '../dist',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue-addtohomescreen',
      // the proper extensions will be added
      fileName: 'vue-addtohomescreen',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        manualChunks: undefined,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
