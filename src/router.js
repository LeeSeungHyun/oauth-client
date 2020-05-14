import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/Login.vue';
import Logout from '@/components/Logout.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
      props: true
    },
    {
      name: 'logout',
      path: '/logout',
      component: Logout,
      props: true
    }
  ]
});