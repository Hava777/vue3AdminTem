import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetify'  // 引入 Vuetify 配置
import { createRouter } from './router'
import { createStore } from './store'

const app = createApp(App)

// 使用插件
app.use(vuetify)  // 使用 Vuetify 插件
app.use(createRouter())  // 使用 Vue Router
app.use(createStore())  // 使用 Vuex

// 挂载应用
app.mount('#app')




createApp(App).use(router).mount('#app')