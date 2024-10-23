// vite.config.js

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs/promises";
import svgr from "@svgr/rollup";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    resolve: {
      alias: {
        src: resolve(__dirname, "src"),
      },
    },
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: "load-js-files-as-jsx",
            setup(build) {
              build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
                loader: "jsx",
                contents: await fs.readFile(args.path, "utf8"),
              }));
            },
          },
        ],
      },
    },
    plugins: [svgr(), react()],
    define: {
      "process.env": env,
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
    publicDir: "public",
    server: {
      host: "0.0.0.0", // Allow access from local network
      port: process.env.PORT || 5173,
    },
    preview: {
      host: "0.0.0.0", // Allow access from local network
      port: process.env.PORT || 5173,
    },
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
      },
    },
  };
});
