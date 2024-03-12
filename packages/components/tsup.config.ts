import { defineConfig } from "tsup"

export default defineConfig({
  format: ["cjs", "esm"],
  target: "es2019",
  sourcemap: false,
  splitting: false,
  banner: {
    js: "'use client'",
  },
})
