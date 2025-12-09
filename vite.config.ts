import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses
    port: 5173,
  },
  preview: {
    host: true, // Listen on all addresses
    port: 3000,
    allowedHosts: [
      'chhilif.com',
      'www.chhilif.com',
      '.chhilif.com', // Allow all subdomains
      'localhost',
    ],
  },
})