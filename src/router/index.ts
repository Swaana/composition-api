import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Pizza from '@/views/Pizza.vue'
import Drink from '@/views/Drink.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/pizzas', name: 'Pizzas', component: Pizza },
  { path: '/drinks', name: 'Drinks', component: Drink },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
