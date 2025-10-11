import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteImagemin } from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 85 },
      webp: { quality: 85 },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: false }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'pdf-vendor': ['react-pdf', 'pdfjs-dist']
        }
      }
    }
  },
  assetsInclude: ['**/*.pdf'],
  optimizeDeps: {
    include: ['pdfjs-dist']
  }
});
