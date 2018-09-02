<template>
    <nav class="c-nav" :class="{'c-nav--scrolled': isScrolled}">
        <ul>
            <li :class="{'active': workActive}"><a href="#" v-scroll-to="'#work'">Work</a></li>
            <li :class="{'active': aboutActive}"><a href="#" v-scroll-to="'#about'">About</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'navigation',
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
            position: relative;
            list-style: none;
            display: inline-block;
            margin: 0 2em;

            &::before {
                position: absolute;
                left: -1em;
                top: 50%;
                transform: translateY(-50%);
                width: 0;
                height: 0;
                content: '';
                margin-top: 1px;
                border-top: 5px solid transparent;
                border-left: 7px solid $black;
                border-bottom: 5px solid transparent;
            }

            a {
                display: inline;
                @include font-bold;
                font-size: .8em;
                text-transform: uppercase;

                @supports (font-variation-settings: normal) {
                    @include font-600;
                }
            }
        }

        .active {

            &::before {
                border-left-color: $white;
            }
        }
    }
</style>
