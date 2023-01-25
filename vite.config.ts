import { defineConfig } from 'vite';
import { dirname, resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { fileURLToPath } from 'url';
import { nodeResolve } from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [nodeResolve(), vue(), cssInjectedByJsPlugin()],
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
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
