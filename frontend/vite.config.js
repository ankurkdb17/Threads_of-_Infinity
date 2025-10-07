// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react' // 👈 Add this import

export default defineConfig({
  plugins: [
    react(), // 👈 Add this plugin
    tailwindcss(),
  ],
})
