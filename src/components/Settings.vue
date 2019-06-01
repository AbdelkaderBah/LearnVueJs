<template>
    <div class="home d-lg-flex flex-nowrap">
        <MenuBar/>

        <div class="col d-lg-flex ml-lg-5 flex-wrap text-left" v-i18n-class>
            <div class="col-12 px-lg-0">
                <h1 class="text-red-1 text-uppercase font-weight-bold text-head">
                    <translate>settings</translate>
                </h1>
            </div>

            <div class="col-12 d-lg-flex d-block justify-content-lg-between pl-lg-0 mb-4">
                <div class="col-lg-9 col-12 px-0 card">
                    <div class="card-body pt-0 form-row">
                        <div class="col-12">
                            <h4 v-translate>languages</h4>
                        </div>

                        <div class="btn-group btn-group-toggle col-12 px-0" data-toggle="buttons">
                            <label class="btn btn-secondary p-2 col-4"
                                   @click="toLang('en_AR')"
                                   :class="{'active': isLang('ar')}"
                                   style="font-size: 14px">
                                <font-awesome-icon icon="check-circle" class="float-right"
                                                   v-if="isLang('ar')"></font-awesome-icon>
                                <input type="radio" id="ar_lang" autocomplete="off" value="group" name="type">
                                <translate>arabic</translate>
                            </label>

                            <label class="btn btn-secondary p-2 col-4"
                                   @click="toLang('en_FR')"
                                   :class="{'active': isLang('fr')}"
                                   style="font-size: 14px">
                                <font-awesome-icon icon="check-circle" class="float-right"
                                                   v-if="isLang('fr')"></font-awesome-icon>
                                <input type="radio" id="fr_lang" autocomplete="off" value="corporation" name="type">
                                <translate>french</translate>
                            </label>

                            <label class="btn btn-secondary p-2 col-4"
                                   @click="toLang('en_EN')"
                                   :class="{'active': isLang('en')}"
                                   style="font-size: 14px">
                                <font-awesome-icon icon="check-circle" class="float-right"
                                                   v-if="isLang('en')"></font-awesome-icon>
                                <input type="radio" id="en_lang" autocomplete="off" value="independent" name="type"
                                       checked="">
                                <translate>english</translate>
                            </label>
                        </div>
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
        methods: {
            toLang(name) {
                this.changeLang(name);
            }
        }
    }
</script>
