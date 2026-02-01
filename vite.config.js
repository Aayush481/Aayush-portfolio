// filepath: c:\Users\aayus\OneDrive\Desktop\portfolio\my-portfolio\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import process from 'process';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  },
});