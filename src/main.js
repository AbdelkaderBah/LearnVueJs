// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MenuBar from './components/MenuBar'
import router from './router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
    faCar,
    faCertificate,
    faGlobeAfrica,
    faIdCard,
    faLanguage,
    faShoppingBasket
} from '@fortawesome/free-solid-svg-icons'
import GetTextPlugin from 'vue-gettext'
import translations from './assets/translation';

library.add(faShoppingBasket, faCar, faIdCard, faCertificate, faLanguage, faGlobeAfrica);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(GetTextPlugin, {translations, silent: true});

Vue.config.productionTip = false
window.vueApp = {};

require('./vue-mixins');

/* eslint-disable no-new */
window.vueApp = new Vue({
    render: h => h(App),
    router,
    components: {App, MenuBar}
}).$mount('#app')
