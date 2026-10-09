import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const allowedHosts = [".e2b.app", "localhost", "127.0.0.1"];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const base = process.env.VITE_BASE_PATH ?? env.VITE_BASE_PATH ?? "/";

  return {
    // A base pode ser / em desenvolvimento ou /Plug/ no GitHub Pages.
    base,
    plugins: [react(), tailwindcss()],
    server: {
      host: "0.0.0.0",
      allowedHosts,
    },
    preview: {
      host: "0.0.0.0",
      allowedHosts,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    test: {
      environment: "jsdom",
      globals: true,
      pool: "threads",
      setupFiles: ["./src/test/setup.ts"],
      include: ["src/**/*.{test,spec}.{ts,tsx}"],
      coverage: {
        provider: "v8",
        reporter: ["text", "html"],
        include: ["src/**/*.{ts,tsx}"],
        exclude: ["src/test/**", "src/**/*.test.*", "src/main.tsx"],
      },
    },
  };
});
