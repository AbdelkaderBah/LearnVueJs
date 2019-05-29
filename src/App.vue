<template>
    <div id="app">
        <header>
            <div class="mb-4 px-lg-2 text-lg-left text-center">
                <div class="d-inline-block">
                    <router-link to="/">
                        <div class="text-left site-brand h5">
                            <font-awesome-icon icon="certificate" class="text-red-1"></font-awesome-icon>
                            <span class="ml-2 text-muted">{{ appName }}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                appName: 'Ets NIMJATT Business Services'
            }
        }
    }
</script>

<style>
    @import "./assets/bootstrap.min.css";
    @import url("https://fonts.googleapis.com/css?family=Pacifico|Work+Sans:700");

    body {
        margin: 0;
        padding-top: 20px;
        background-color: #e9ecef;
    }

    /*
     * BEGIN SCROLLBAR STYLE
     *  Source: https://codepen.io/chriscoyier/pen/PxbXBd
     */

    body::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #F5F5F5;
        border-radius: 10px;
    }

    body::-webkit-scrollbar {
        width: 10px;
        background-color: #F5F5F5;
    }

    body::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-image: -webkit-gradient(linear,
        left bottom,
        left top,
        color-stop(0.44, rgb(122, 153, 217)),
        color-stop(0.72, rgb(73, 125, 189)),
        color-stop(0.86, rgb(28, 58, 148)));
    }

    /*
     * END SCROLLBAR STYLE
     */

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    main {
        text-align: center;
        margin-top: 40px;
    }

    .site-brand {
        font-family: 'Pacifico', cursive;
    }

    .top-3 .top-block {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background: radial-gradient(ellipse at bottom, #afb5bd 0%, #030617 100%);
    }

    .top-3 .lg-block {
        height: 150px;
    }

    .top-3 .md-block {
        height: 75px;
    }

    .top-3 .md-block-2 {
        height: 71px;
    }

    .text-red-1 {
        color: #dc3545;
    }

    .left-nav .list-group-item {
        font-size: 21px;
        margin: 10px 0;
        padding-top: 15px;
        padding-bottom: 15px;
        color: #6c757d !important;
    }

    .left-nav .list-group-item.active {
        border: 0;
        border-radius: 0;
        border-left: 8px solid #dc3545;
        background-color: #dc35452e;
        color: #dc3545 !important;
    }

    .text-head {
        font-family: 'Work Sans', sans-serif;
        font-weight: 700;
    }
</style>
