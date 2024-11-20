import { createApp } from 'vue'; // 导入 Vue
import App from './App.vue'; // 导入主组件
import router from './router'; // 导入 Vue Router
import pinia from './store'; // 导入 Pinia
import vuetify from './plugins/vuetify'; // 导入 Vuetify

// 创建 Vue 应用实例
const app = createApp(App);

// 注册插件
app.use(router); // 使用 Vue Router
app.use(pinia); // 使用 Pinia
app.use(vuetify); // 使用 Vuetify

// 挂载应用
app.mount('#app');
