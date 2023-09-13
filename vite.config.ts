import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname) },
      { find: 'public', replacement: path.resolve(__dirname, 'public') },
      { find: 'src', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
