import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB
    minify: 'terser', // Minify JavaScript
    sourcemap: true, // Generate source maps
  },
})
