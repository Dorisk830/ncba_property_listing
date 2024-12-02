import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
        hmr: true,
      },
    },
    hmr: true,
    watch: {
      usePolling: true, // Use polling if files are not detected
      interval: 100, // Check for changes every 100ms
    },
  },
});
