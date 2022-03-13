import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      // dev 独有配置
      publicPath: '/',
      plugins: [vue()],
      server: {
        host: 'localhost',
        port: 8888,
        open: true,
        strictPort: false,
        https: false,
        // 反向代理
        // proxy: {
        //   '/admin': {
        //     target: 'http://api.vite-admin.com',
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/admin/, '')
        //   },
        // }    

        //proxy: {
        //   // string shorthand
        //   '/foo': 'http://localhost:4567/foo',
        //   // with options
        //   '/api': {
        //     target: 'http://jsonplaceholder.typicode.com',
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/api/, '')
        //   },
        //   // with RegEx
        //   '^/fallback/.*': {
        //     target: 'http://jsonplaceholder.typicode.com',
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/fallback/, '')
        //   }
        // }
      },
    }
  } else {
    // command === 'build'
    return {
      // build 独有配置
    }
  }
})