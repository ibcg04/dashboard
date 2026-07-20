import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/dashboard/',
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@mui\/system$/,
        replacement: fileURLToPath(new URL('./src/muiSystemViteFix.ts', import.meta.url)),
      },
    ],
  },
})
