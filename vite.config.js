const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");
const path = require("path");
const fs = require("fs");

// Get the absolute root directory
const rootDir = path.resolve(__dirname);
console.log("Root directory:", rootDir);

// Verify directories exist before using them
const clientDir = path.join(rootDir, "client");
const clientSrcDir = path.join(clientDir, "src");
const sharedDir = path.join(rootDir, "shared");
const assetsDir = path.join(rootDir, "attached_assets");

// Log directory existence for debugging
console.log("Client directory exists:", fs.existsSync(clientDir));
console.log("Client src directory exists:", fs.existsSync(clientSrcDir));

// Create a safer path resolver
function safePath(base, ...segments) {
  const fullPath = path.join(base, ...segments);
  return fullPath;
}

module.exports = defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": safePath(rootDir, "client", "src"),
      "@shared": safePath(rootDir, "shared"),
      "@assets": safePath(rootDir, "attached_assets")
    }
  },
  root: clientDir,
  build: {
    outDir: path.join(rootDir, "dist"),
    emptyOutDir: true
  }
});
