import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  build: {
    target: "es2018",
    minify: "esbuild",
    cssCodeSplit: true,
    polyfillDynamicImport: false, // option si tu ne souhaites pas le polyfill de dynamic import
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          fontawesome: [
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/react-fontawesome",
          ],
        },
      },
    },
  },
});
