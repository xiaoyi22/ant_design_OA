import Vue from 'vue'
import VueRouter from 'vue-router'
import Userlogin from '../views/Userlogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Userlogin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
