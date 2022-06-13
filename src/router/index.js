import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from "@/views/ContactView";
import RoomsView from "@/views/RoomsView";
import ExactRoomView from "@/views/ExactRoomView";

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
        component: RoomsView,
    },
    {
        path: '/rooms/:room_id',
        name: 'room',
        component: ExactRoomView,
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
