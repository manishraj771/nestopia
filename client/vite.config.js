// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/', // Adjust according to your deployment environment
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use './' if you experience issues with assets loading
  build: {
    sourcemap: true, // Enable source maps for better error debugging in production
  },
});
