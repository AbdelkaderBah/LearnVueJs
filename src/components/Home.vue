<template>
    <div class="home d-lg-flex flex-nowrap">
        <MenuBar/>

        <div class="col d-flex flex-wrap text-left" v-i18n-class>
            <!--BEGIN HEADER TITLE-->
            <div class="col-12 px-lg-0">
                <h1 class="text-palette-1 text-uppercase font-weight-bold text-head">
                    <translate>our cars</translate>
                    <scale-loader :loading="loading" v-if="loading" color="#dc3545" class="d-inline"></scale-loader>
                </h1>
            </div>
            <!--END HEADER TITLE-->

            <!--BEGIN HEADER OPTIONS-->
            <div class="col px-lg-0">
                <div class="options">
                    <div class="form-group form-inline justify-content-end" v-i18n-class>
                        <select class="form-control mr-sm-2 my-2" v-i18n-class v-model="form.brand"
                                @change="updateFilters">
                            <option :value="null">
                                <translate>Any make</translate>
                            </option>
                            <option v-for="brand in carBrands" :value="brand" v-text="brand" :key="brand"></option>
                        </select>
                        <select class="form-control my-2" v-model.number="form.year" @change="updateFilters">
                            <option :value="null">
                                <translate>Any year</translate>
                            </option>
                            <option v-for="year in modelYears" :value="year" v-text="year" :key="year"></option>
                        </select>
                    </div>
                </div>
                <!--END HEADER OPTIONS-->

                <!--BEGIN CAR BLOCK-->
                <div class="content row">
                    <div class="mb-3 col-lg-4 col-md-6 col-12" v-for="car in filteredCars" :key="car.id">
                        <router-link :to="`/voiture/${car.id}`">
                            <div class="col-12 px-0">
                                <button class="btn rounded-0 btn-danger show-btn" v-translate>show</button>
                                <img :src="getCarImage(car.thumbnail)" class="img-fluid car-thumbnail" alt="">
                            </div>
                            <div class="bg-white p-2 d-flex justify-content-between">
                                <div>
                                    <div>
                                        <translate class="text-capitalize">brand</translate>
                                        : {{ car.brand }}
                                    </div>
                                    <div>
                                        <translate class="text-capitalize">model</translate>
                                        : {{ car.model }}
                                    </div>
                                    <div>
                                        <translate class="text-capitalize">year</translate>
                                        : {{ car.year }}
                                    </div>
                                </div>
                                <div>
                                    <img :src="getLogoSource(car.icon)" class="mt-3">
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <!--END CAR BLOCK-->

            </div>
        </div>
    </div>
</template>

<script>
    import ScaleLoader from 'vue-spinner/src/ScaleLoader'
    import MenuBar from './MenuBar'
    import Api from './../assets/lib/api'
    import _ from 'lodash'

    export default {
        name: 'Home',
        components: {MenuBar, ScaleLoader},
        data() {
            return {
                form: {
                    year: null,
                    brand: null
                },
                filter: {},
                cars: [],
                loading: true,
            }
        },
        computed: {
            filteredCars: function () {
                return _.chain(this.cars).filter(this.filter).orderBy(['score'], ['desc']).value()
            },
            carBrands: function () {
                return _.chain(this.cars).groupBy('brand').keys().value()
            },
            modelYears: function () {
                return _.chain(this.cars).groupBy('year').keys().value()
            }
        },
        methods: {
            updateFilters: function () {
                this.filter = {};

                for (let key in this.form) {
                    if (this.form.hasOwnProperty(key) && this.form[key]) {
                        this.filter[key] = this.form[key]
                    }
                }
            }
        },
        async mounted() {
            this.cars = (await Api.getCars());
            //TODO: Enable this for backend
            // this.cars = (await Api.getCars()).data;

            this.loading = false;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import "./../assets/home.css";

    .show-btn {
        position: absolute;
        right: 0;
    }

    .rtl .show-btn {
        right: auto;
        left: 0;
    }

    .car-thumbnail {
        width: 100%;
    }
</style>
