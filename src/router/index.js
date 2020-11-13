import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import home from '../views/home.vue'
Vue.use(VueRouter)

const routes = [
 {
   path: '/home', 
   name:'Home',
   component:home,
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
