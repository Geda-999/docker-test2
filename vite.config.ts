import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // server: {
  //   host: '0.0.0.0', // 允许局域网访问
  //   port: 5173,
  //   open: false,
  //   proxy: {
  //     // 解决跨域问题，将所有以 /api 开头的请求代理到后端服务器
  //     '/api': {
  //       target: 'http://192.168.0.55:8888',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''), // 可选，根据后端接口实际情况调整
  //       // ws: true, // 如果需要支持websocket，取消注释
  //     },
  //     // 你可以根据需要继续添加其他代理
  //   }
  // }
})
