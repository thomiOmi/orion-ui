import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/eslint.config.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
})
