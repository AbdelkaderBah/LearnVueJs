import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ViewCar from '@/components/ViewCar'

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
        }
    ]
})
