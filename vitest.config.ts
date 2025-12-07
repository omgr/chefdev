import { config } from "./vite.config";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  config,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/test/setup.ts"],
      coverage: {
        reporter: ["text", "json", "html"],
        include: ["src/**/*.{ts,tsx}"],
        exclude: ["node_modules", "dist", "build", "coverage"],
      },
      // testTimeout: 5000,
    },
  }),
);
