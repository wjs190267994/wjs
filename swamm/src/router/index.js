import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const home = ()=>import('../views/home/home.vue');
const cart = ()=>import('../views/cart/cart.vue');
const category = ()=>import('../views/category/category.vue');
const profile = ()=>import('../views/profile/profile.vue');
const Detail = ()=>import('../views/detail/detail.vue');
  const routes = [
    {
      path: '',
      redirect:'/home'
    },
  {
    path: '/home',
    name: 'Home',
    component: home
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
