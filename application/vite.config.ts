import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: "build",
    sourcemap: true,
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          react: ["react"],
          "react-dom": ["react-dom"],
          lodash: ["lodash"],
        },
      },
    },
  },
});
