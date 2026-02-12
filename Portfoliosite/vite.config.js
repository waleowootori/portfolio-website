import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: ".", // root is the project folder
  build: {
    outDir: "dist", // default is 'dist'
  },
});
