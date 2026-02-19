import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/task-hub/',
  plugins: [
    vue(),
    tailwindcss(), // 激活 Tailwind v4 引擎
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 vue 相关库打包在一起
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          // 其他第三方库（如以后引入的 axios 或 echarts）
          // 'utils-vendor': ['axios'],
        }
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 配置路径别名
    },
  },
})