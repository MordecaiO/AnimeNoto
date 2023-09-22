/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Add this line
    include: "**/*.tsx",
    
  })],
  
  test: {
       environment: 'jsdom',
        setupFiles: ['./src/__tests__/setup.ts'],
       
        globals: true
    }
})