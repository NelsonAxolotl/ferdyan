import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "vite-plugin-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // Ouvre automatiquement l'analyseur après la construction
  ],
});
