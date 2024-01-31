/**
 * @description
 * @author 阿怪
 * @date 2024/1/31 17:01
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { createApp } from 'vue';
import App from './src/App.vue';
import { createMUI } from 'shuimo-ui';
import './src/assets/index.css';
import 'shuimo-ui/dist/style.css';

createApp(App)
  .use(createMUI())
  .mount('#app');
