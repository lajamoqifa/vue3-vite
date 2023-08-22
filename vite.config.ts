import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    autoImport({
      imports: ['vue', '@vueuse/core'], // 需要引入的类型来源
      dts: 'src/types/auto-import.d.ts', // 根据引入来源自动生成的类型声明文件路径
      eslintrc: {
        enabled: true // 使用 eslint 配置
      },
      resolvers: [AntDesignVueResolver()]
    }),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: 'less', resolveIcons: true })]
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always', // 括号内才使用数学计算
        globalVars: {
          // 全局变量
          mainColor: 'red'
        }
      }
    }
  }
})
