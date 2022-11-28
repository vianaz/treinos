import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@themes': '/src/styles/themes/index.ts',
      '@components': '/src/components/index.ts',
      '@atoms': '/src/components/Atoms/index.ts'
    }
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['vitest-setup'],

    watch: false
  }
});
