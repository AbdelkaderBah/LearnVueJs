import Vue from 'vue'

require('./assets/lib/rtl');

Vue.mixin({
    methods: {
        getLogoSource: function (name = null) {
            if (name)
                return require('./assets/vendor/logos/' + name + '.svg')
        }
    }
});
