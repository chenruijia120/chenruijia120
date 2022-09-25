import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router"
import './theme/index.css'
import "@/assets/text/text.css";
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
