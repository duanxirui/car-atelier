import { defineConfig } from 'vite';

export default defineConfig({
  // Keep local development and ordinary root-domain deployments unchanged.
  // GitHub Pages serves this project at /car-atelier/.
  base: process.env.GITHUB_PAGES === 'true' ? '/car-atelier/' : '/',
  build: {
    rollupOptions: {
      output: {
        // Keep the heavy Three.js engine separate from the small application
        // UI, and allow the browser to cache core code across future updates.
        manualChunks(id) {
          const path = id.replaceAll('\\', '/');
          if (path.includes('/node_modules/three/examples/jsm/loaders/GLTFLoader.js')) {
            return 'three-gltf';
          }
          if (path.includes('/node_modules/three/examples/jsm/')) {
            return 'three-addons';
          }
          if (path.includes('/node_modules/three/')) {
            return 'three-core';
          }
          return undefined;
        },
      },
    },
  },
});
