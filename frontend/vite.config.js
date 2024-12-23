import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for docker
    strictPort: true,
    port: 5173,
  },
});
