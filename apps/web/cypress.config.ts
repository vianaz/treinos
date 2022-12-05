import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: '**/*.e2e.test.{ts,tsx}',
    supportFile: false,
    video: false,
    videoCompression: false,
    experimentalStudio: true
  }
});
