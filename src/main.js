// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MenuBar from './components/MenuBar'
import router from './router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faCar, faCertificate, faIdCard, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingBasket, faCar, faIdCard, faCertificate)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

require('./vue-mixins')

/* eslint-disable no-new */
new Vue({
    render: h => h(App),
    router,
    components: {App, MenuBar}
}).$mount('#app')
