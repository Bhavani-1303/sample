import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // Optional: if you plan to import SVGs as React components

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr() // Optional: if you plan to import SVGs as React components
  ],
});
