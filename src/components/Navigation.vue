<template>
    <nav class="c-nav" :class="{'c-nav--scrolled': isScrolled}">
        <ul>
            <li><a href="#" v-scroll-to="'#intro'">Intro</a></li>
            <li><a href="#" v-scroll-to="'#work'" :class="{'active': workActive}">Work</a></li>
            <li><a href="#" v-scroll-to="'#about'" :class="{'active': aboutActive}">About</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'nav',
        data () {
            return {
            }
        },
        props: ['isScrolled', 'workActive', 'aboutActive'],
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

    @import "./../scss/main.scss";

    .c-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: $black;
        z-index: 50;
        transition: top .5s ease;

        ul {
            margin: 2em 0;
            padding: 0;
            text-align: center;
        }

        li {
            list-style: none;
            display: inline;
            margin: 0 2em;

            a {
                @include font-bold;
                display: inline;
            }
        }

        .active {
            text-decoration: underline;
        }
    }
</style>
