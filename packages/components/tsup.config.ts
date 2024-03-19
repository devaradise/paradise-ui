import { defineConfig } from "tsup"
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig({
  entry: ["src", "!src/style.scss"],
  esbuildPlugins: [sassPlugin()],
  format: ["cjs", "esm"],
  target: "es2019",
  sourcemap: false,
  splitting: false,
  banner: {
    js: "'use client'",
  },
})
