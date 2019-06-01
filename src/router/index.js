import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ViewCar from '@/components/ViewCar'
import ContactUs from '@/components/ContactUs'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/voiture/:id',
            name: 'ViewCar',
            component: ViewCar
        },
        {
            path: '/contact-us',
            name: 'ContactUs',
            component: ContactUs
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings
        }
    ]
})
