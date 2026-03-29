import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    dts({
      insertTypesEntry: true,
    }),
    libInjectCss(),
  ],

  resolve: {
    dedupe: ["react", "react-dom"],
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "tap-react",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },

    cssCodeSplit: false,

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "react-router-dom",
        "framer-motion",
      ],

      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
        },
        assetFileNames: "style.css",
      },
    },

    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: false,
      },
      format: {
        comments: false,
      },
    },
  },
    css: {
    postcss: './postcss.config.js', 
  },

});