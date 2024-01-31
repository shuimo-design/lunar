/**
 * @description
 * @author 阿怪
 * @date 2024/1/31 19:21
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  root:'./website',
  plugins:[vue()]
})
