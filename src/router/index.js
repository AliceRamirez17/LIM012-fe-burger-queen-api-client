import Vue from 'vue';
import VueRouter from 'vue-router';
import Credentials from '../components/CredentialsView';
import Home from '../views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Credentials',
    component: Credentials,
  },
  {
    path: '/home',
    name: 'options',
    component: Home,
  },
  {
    path: '/employees',
    name: 'Employees',
    component: () => import(/* webpackChunkName: "about" */ '../components/ManagerView'),
  },
  {
    path: '/create-order',
    name: 'CreateOrder',
    component: () => import(/* webpackChunkName: "about" */ '../components/EmployeeView'),
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Credentials' && !window.localStorage.getItem('token')){
    next({
      name: 'Credentials'
    })
  }
  else next()
})

export default router;
