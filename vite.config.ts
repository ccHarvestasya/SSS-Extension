import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    nodePolyfills({
      include: ['crypto', 'stream', 'vm'],
      protocolImports: true,
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        background_scripts: resolve(
          __dirname,
          'src/background_scripts/index.ts',
        ),
        content_scripts: resolve(__dirname, 'src/content_scripts/index.ts'),
        inject_scripts: resolve(__dirname, 'src/inject_scripts/index.ts'),
        options: resolve(__dirname, 'src/Options/index.tsx'),
        popup: resolve(__dirname, 'src/Popup/index.tsx'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
