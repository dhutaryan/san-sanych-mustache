import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './dist/san-sanych-mustache',
  },
  server: {
    port: 3000,
    open: false,
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    tsconfigPaths(),
    eslint({ cache: false, exclude: ['**/node_modules/**'] }),
  ],
});
