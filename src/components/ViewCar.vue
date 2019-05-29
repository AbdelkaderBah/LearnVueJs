<template>
    <div class="home d-lg-flex flex-nowrap">
        <MenuBar/>

        <div class="col d-flex flex-wrap text-left">
            <div class="col-12 text-left px-lg-0">
                <h1 class="text-red-1 text-uppercase font-weight-bold text-head">
                    {{ car.brand }}
                    <scale-loader :loading="loading" v-if="loading" color="#dc3545" class="d-inline"></scale-loader>
                </h1>
            </div>

            <div class="col-12 d-flex justify-content-between px-lg-0 mt-2">
                <div class="col-3 pl-lg-0">
                    <img :src="getLogoSource(car.icon)" class="float-right">
                    <div>Brand: {{ car.brand }}</div>
                    <div>Model: {{ car.model }}</div>
                    <div>Model year: {{ car.year }}</div>
                    <div>Transmission: {{ car.transmission }}</div>
                    <div>Drivetrain: {{ car.drivetrain }}</div>
                    <div>Fuel type: {{ car.fuel_type }}</div>
                    <div>Mileage: {{ car.mileage }} km</div>
                    <div class="mt-4">
                        <b>Price: 10000 MRO</b>
                        <a href="#" class="btn btn-primary font-weight-bold col-12">Rent now</a>
                    </div>
                </div>

                <div class="col-8 d-flex flex-wrap text-center pl-5">
                    <div class="mb-2 col-6">
                        <img src="@/assets/demo/car_front.jpg" alt="source: http://www.voursa.com/Annoncev.cfm?pdtid=137250&adtre=Corolla%20S%202015" class="img-thumbnail" style="width: 380px">
                    </div>
                    <div class="mb-2 col-6">
                        <img src="@/assets/demo/car.jpg" alt="" class="img-thumbnail" style="width: 380px">
                    </div>
                    <div class="mb-2 col-6">
                        <img src="@/assets/demo/car_left.jpg" alt="source: http://www.voursa.com/Annoncev.cfm?pdtid=137250&adtre=Corolla%20S%202015" class="img-thumbnail" style="width: 380px">
                    </div>
                    <div class="mb-2 col-6">
                        <img src="@/assets/demo/car_left.jpg" alt="source: http://www.voursa.com/Annoncev.cfm?pdtid=137250&adtre=Corolla%20S%202015" class="img-thumbnail" style="width: 380px">
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
        async mounted() {
            let carId = this.$route.params.id;
            this.car = (await Api.getCar());
            //TODO: Enable this for backend
            // this.car = (await Api.getCar(carId)).data;
            this.loading = false
        }
    }
</script>
