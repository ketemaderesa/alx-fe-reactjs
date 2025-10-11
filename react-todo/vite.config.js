import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,            // makes `expect`, `describe`, `it` available globally
    environment: 'jsdom',     // simulates browser environment
    setupFiles: './src/setupTests.js'  // load jest-dom matchers
  }
});
