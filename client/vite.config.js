import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,  // Use polling if file changes are not detected
      interval: 1000,    // Poll every 1 second (adjust as needed)
    },
    host: true,          // Enable network access (useful if testing on other devices)
    port: 5174,          // Use a specific port (adjust if needed)
    strictPort: false,   // Fail if port is already in use
    hmr: {
      protocol: 'ws',    // Use WebSocket for HMR
      host: 'localhost',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // changeOrigin: true,  // Change the origin of the host header to the target URL
        secure: false,       // Disable SSL verification (useful for local development)
      },
    },
  },
});
