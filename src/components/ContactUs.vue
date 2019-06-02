<template>
    <div class="home d-lg-flex flex-nowrap">
        <MenuBar/>

        <div class="col d-lg-flex ml-lg-5 flex-wrap text-left" v-i18n-class>
            <div class="col-12 px-lg-0">
                <h1 class="text-palette-1 text-uppercase font-weight-bold text-head">
                    <translate>contact</translate>
                </h1>
            </div>

            <div class="col-12 px-lg-0 mt-3">
                <h4 v-translate>Call us</h4>
                <ul dir="ltr">
                    <li>+222 33 37 37 76</li>
                    <li>+222 33 37 37 76</li>
                </ul>
            </div>

            <div class="col-12 d-lg-flex d-block justify-content-lg-between pl-lg-0 mb-4">
                <div class="col-lg-9 col-12 px-0 card">
                    <div class="card-body pt-0 form-row">
                        <div class="col-12">
                            <h4 v-translate>Email us</h4>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="" v-translate class="text-capitalize">service</label>
                            <select name="name" id="inputID" class="form-control">
                                <option value="" v-translate>inquiries</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="" v-translate class="text-capitalize">your phone</label>
                            <input type="text" class="form-control" placeholder="">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="" v-translate class="text-capitalize">your name</label>
                            <input type="text" class="form-control" placeholder="">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="" v-translate class="text-capitalize">your email</label>
                            <input type="text" class="form-control" placeholder="">
                        </div>
                        <div class="form-group col-12">
                            <label for="" v-translate class="text-capitalize">country</label>
                            <select name="name" id="inputID" class="form-control">
                                <option value="">Mauritania</option>
                            </select>
                        </div>
                        <div class="form-group col-12">
                            <label for="" v-translate class="text-capitalize">message</label>
                            <textarea class="form-control" rows="6"></textarea>
                        </div>

                        <button class="btn btn-primary text-capitalize" v-translate>send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import MenuBar from './MenuBar';

    export default {
        components: {MenuBar},
    }
</script>
