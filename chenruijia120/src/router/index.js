import Vue from 'vue';
import VueRouter from 'vue-router';
import MyHome from "@/views/MyHome.vue";

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes : [
    {
      path: '/',
      name: 'MyHome',
      component: MyHome,
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