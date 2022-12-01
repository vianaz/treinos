import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@themes': '/src/styles/themes/index.ts',
      '@components': '/src/components/index.ts',
      '@atoms': '/src/components/Atoms/index.ts',
      '@molecules': '/src/components/Molecules/index.ts',
      '@organisms': '/src/components/Organisms/index.ts',
      '@templates': '/src/components/Templates/index.ts'
    }
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['vitest-setup'],

    watch: false
  }
});
