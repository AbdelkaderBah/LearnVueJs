<template>
    <div class="home d-lg-flex flex-nowrap">
        <MenuBar/>

        <div class="col d-flex flex-wrap text-left" v-i18n-class>
            <div class="col-12 px-lg-0">
                <h1 class="text-red-1 text-uppercase font-weight-bold text-head">
                    {{ car.brand }}
                    <scale-loader :loading="loading" v-if="loading" color="#dc3545" class="d-inline"></scale-loader>
                </h1>
            </div>

            <div class="col-12 d-lg-flex justify-content-between px-lg-0 mt-2">
                <div class="col-lg-3 pl-lg-0 mb-3" v-i18n-class>
                    <img :src="getLogoSource(car.icon)" class="float-right" v-i18n-class>
                    <div>
                        <translate>brand</translate>
                        : {{ car.brand }}
                    </div>
                    <div>
                        <translate>model</translate>
                        : {{ car.model }}
                    </div>
                    <div>
                        <translate>model year</translate>
                        : {{ car.year }}
                    </div>
                    <div>
                        <translate>transmission</translate>
                        : {{ car.transmission }}
                    </div>
                    <div>
                        <translate>drivetrain</translate>
                        : {{ car.drivetrain }}
                    </div>
                    <div>
                        <translate>fuel type</translate>
                        : {{ car.fuel_type }}
                    </div>
                    <div>
                        <translate>mileage</translate>
                        : <span dir="ltr">{{ car.mileage }} km</span></div>
                    <div class="mt-4">
                        <div class="font-weight-bold">
                            <translate>price</translate>
                            :
                            <div class="float-right" v-i18n-class>
                                <span class="px-1" style="text-decoration: underline;"
                                      v-text="price(13500)"></span>
                                <!--<translate class="text-uppercase">mru</translate>-->
                                <small class="p-1" v-translate>mru-addon</small>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary font-weight-bold col-12" v-translate>rent now</a>
                    </div>
                </div>

                <div class="col-lg-8 d-flex flex-wrap text-center pl-lg-5" v-i18n-class>
                    <div class="mb-2 col-md-6" v-for="image in car.images">
                        <img :src="getCarImage(image)"
                             alt="source: http://www.voursa.com/Annoncev.cfm?pdtid=137250&adtre=Corolla%20S%202015"
                             class="img-thumbnail" style="width: 380px">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ScaleLoader from 'vue-spinner/src/ScaleLoader'
    import MenuBar from './MenuBar'
    import Api from './../assets/lib/api'
    import numeral from './../assets/lib/numerals'

    // require('./../assets/lib/numerals');


    export default {
        components: {
            MenuBar, ScaleLoader
        },
        data() {
            return {
                car: {},
                loading: true
            }
        },
        methods: {
            getCarImage(name = '') {
                try {
                    return require('../assets/demo/' + name)
                } catch (e) {
                    return require('../assets/demo/car.jpg')
                }
            },
            price(number) {
                let n = numeral(number);
                return n.format("0.0a")
            }
        },
        async mounted() {
            numeral.locale(this.toStrLang());

            let carId = this.$route.params.id;
            this.car = (await Api.getCar(carId));
            //TODO: Enable this for backend
            // this.car = (await Api.getCar(carId)).data;
            this.loading = false
        }
    }
</script>
