import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
const app = createApp(App)
// 对vant组件进行统一管理
getVant(app);
app.use(store)
app.use(router).mount('#app')
