import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home.vue";

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes : [
    {
      path: '/',
      name: 'Home',
      component: Home,
        meta:{
            title:'Ruijia Chen'
        }
    },
    {
      path : '*',
      redirect : '/'
    }
  ]
});


export default router