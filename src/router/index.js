import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login'),
  },
  {
    path: '/criar-conta',
    name: 'Register',
    component: () => import('../views/Register'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
