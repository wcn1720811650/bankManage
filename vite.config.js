import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  devServer: {
    proxy: {
      "/api": {
        "target": 'http://127.0.0.1',
        "secure": false,
        "changeOrigin": true,
        "pathRewrite": {
          '^/api': ''
        }
      }
    }
  },
})
