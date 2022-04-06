import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomView from "@/views/RoomView";
import AreaView from "@/views/AreaView";
import ContactView from "@/views/ContactView";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: RoomView,
  },
  {
    path: '/area',
    name: 'area',
    component: AreaView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = new VueRouter({
  routes
})

export default router
