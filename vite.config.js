import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Bu yerda hech qanday @tailwindcss/vite kerak emas!
export default defineConfig({
  plugins: [react()],
})
