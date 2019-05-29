import Vue from 'vue'

Vue.mixin({
    methods: {
        getLogoSource: function (name = null) {
            return require('./assets/vendor/logos/' + name + '.svg')
        }
    }
});
