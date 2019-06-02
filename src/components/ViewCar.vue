<template>
    <div class="home d-lg-flex flex-nowrap">
        <MenuBar/>

        <div class="col d-flex flex-wrap text-left" v-i18n-class>
            <!--BEGIN HEADER TITLE-->
            <div class="col-12 px-lg-0">
                <h1 class="text-uppercase font-weight-bold text-head">
                    {{ car.brand }}
                    <scale-loader :loading="loading" v-if="loading" color="#dc3545" class="d-inline"></scale-loader>
                </h1>
            </div>
            <!--END HEADER TITLE-->

            <!--BEGIN CAR DESCRIPTION-->
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
                                      v-text="price(car.price)"></span>
                                <small class="p-1" v-translate>mru-addon</small>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary font-weight-bold col-12 mt-1" v-translate>rent now</a>
                    </div>
                </div>
                <!--END CAR DESCRIPTION-->

                <!--BEGIN CAR IMAGES-->
                <div class="col-lg-8 d-flex flex-wrap text-center px-0">
                    <div class="mb-2 col-md-6" v-for="image in car.images">
                        <img :src="getCarImage(image)" class="img-thumbnail car-image">
                    </div>
                </div>
                <!--END CAR IMAGES-->
            </div>
        </div>
    </div>
</template>
<script>
    import ScaleLoader from 'vue-spinner/src/ScaleLoader'
    import MenuBar from './MenuBar'
    import Api from './../assets/lib/api'
    import numeral from './../assets/lib/numerals'

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

<style>
    .car-image {
        width: 380px
    }
</style>
