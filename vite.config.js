import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  build: {
    target: "es2017",
    minify: "esbuild",
    cssCodeSplit: true,
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
