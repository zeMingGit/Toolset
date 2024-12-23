import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'), // 将 @ 指向 src 目录
    },
  },
})
