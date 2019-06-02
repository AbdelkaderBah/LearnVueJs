import Vue from 'vue'

Vue.mixin({
    methods: {
        getLogoSource: function (name = null) {
            if (name)
                return require('./assets/vendor/logos/' + name + '.svg')
        },
        getCarImage(name = '') {
            try {
                return require('./assets/demo/' + name)
            } catch (e) {
                return require('./assets/demo/car.jpg')
            }
        },
    }
});
