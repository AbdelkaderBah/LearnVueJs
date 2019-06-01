<template>
    <div class="text-center bg-white mr-lg-4 left-nav px-lg-0 px-4" v-i18n-class>
        <ul class="list-unstyled mt-4 list-group">
            <router-link to="/" tag="li" class="list-group-item cursor-pointer text-capitalize"
                         exact-active-class="active">
                <font-awesome-icon icon="car" class="d-block mx-auto"></font-awesome-icon>
                <translate>home</translate>
            </router-link>
            <router-link to="/contact-us" tag="li" class="list-group-item cursor-pointer text-capitalize"
                         exact-active-class="active">
                <font-awesome-icon icon="id-card" class="d-block mx-auto"></font-awesome-icon>
                <translate>contact</translate>
            </router-link>
            <router-link to="/settings" tag="li" class="list-group-item cursor-pointer text-capitalize"
                         exact-active-class="active">
                <font-awesome-icon icon="globe-africa" class="d-block mx-auto"></font-awesome-icon>
                <small>
                    <translate>language</translate>
                </small>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'MenuBar'
    }
</script>

<style>
    .cursor-pointer {
        cursor: pointer
    }

    .list-group-item {
        border: 0;
        padding: .75rem 0.25rem;
    }

    .left-nav {
        width: 100px
    }

    @media (max-width: 992px) {
        .left-nav {
            background-color: transparent !important;
            width: 100%;
            margin-bottom: 20px;
        }
    }
</style>
