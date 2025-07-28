// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'; // If using React

export default defineConfig({
  plugins: [
    react(), // Include if using React
    tailwindcss(),
  ],
});
