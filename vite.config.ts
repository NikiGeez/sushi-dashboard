import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import istanbul from 'rollup-plugin-istanbul'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => ({
  plugins: [
    tsconfigPaths(),
    react(),
    eslintPlugin(),
    mode === 'test' &&
      istanbul({
        include: ['src/**/*.tsx']
      })
  ]
}))
