import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    
  return {
    assetsInclude: ['**/*.PNG', '**/*.png'],
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});