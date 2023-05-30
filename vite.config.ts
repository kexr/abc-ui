import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default () => {
    return defineConfig({
        plugins: [
          vue(),
        ],
        css: {
            preprocessorOptions: {
              scss: {
                additionalData: '@import "./src/var.scss";' // 加载全局样式，使用scss特性
              }
            },
        }
    })
}