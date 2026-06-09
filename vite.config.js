import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Offline-first: no external CDN dependencies. All assets resolved locally.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
