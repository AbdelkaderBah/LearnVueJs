import Vue from 'vue'

Vue.mixin({
    methods: {
        getLogoSource: function (name = null) {
            if (name)
                return require('./assets/vendor/logos/' + name + '.svg')
        }
    }
});
