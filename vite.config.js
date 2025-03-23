import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbitePlugin from 'flowbite/plugin'

// https://vite.dev/config/
export default defineConfig({
  
  content: ['./src/**/*.{js,jsx,tsx}', './node_modules/flowbite-react/**/*.{js,jsx}' ],
  plugins: [
    react(),
    tailwindcss(),
    flowbitePlugin
  ],
})
