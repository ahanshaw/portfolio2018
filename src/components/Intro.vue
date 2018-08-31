<template>
    <section id="intro" class="c-intro">
        <div class="c-intro__container">
            <div>
                <h1>Angela Hanshaw</h1>
                <p>Front-End Developer</p>
            </div>
            <a v-scroll-to="'#work'" href="#work"></a>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'intro',
        data () {
            return {
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

    @import "./../scss/main.scss";

    .c-intro {
        position: relative;
        height: 100%;
        padding: 4em 0;
        background-color: $black;
        z-index: 100;

        @include breakpoint(widescreen) {
            padding: 7em 0;
        }

        &__container {
            @include container(1200px);
            display: flex;
            align-items: stretch;
            flex-wrap: wrap;
            height: 100%;
            text-align: center;
        }

        div {
            position: relative;
            width: 100%;
        }

        h1 {
            font-size: 10vw;
            margin: 0 0 .5em 0;

            @include breakpoint(tablet) {
                margin-bottom: .125em;
            }

            @include breakpoint(widescreen) {
                font-size: 6vw;
            }
        }

        p {
            font-size: 6vw;
            margin: 0 0 2em 0;

            @include breakpoint(widescreen) {
                font-size: 4vw;
            }
        }

        a {
            display: block;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            margin: 0 auto;
            border-top: 40px solid $white;
            border-right: 30px solid transparent;
            border-left: 30px solid transparent;
            transition: border-top .3s ease,
                        border-left .3s ease,
                        border-right .3s ease;

            @include breakpoint(desktop) {
                border-top-width: 50px;
                border-right-width: 40px;
                border-left-width: 40px;
            }

            @include breakpoint(widescreen) {
                border-top-width: 60px;
                border-right-width: 50px;
                border-left-width: 50px;
            }

             &:hover {
                 border-top-width: 50px;
                 border-right-width: 40px;
                 border-left-width: 40px;

                 @include breakpoint(desktop) {
                     border-top-width: 70px;
                     border-right-width: 50px;
                     border-left-width: 50px;
                 }

                 @include breakpoint(widescreen) {
                     border-top-width: 80px;
                     border-right-width: 60px;
                     border-left-width: 60px;
                 }
             }
        }
    }
</style>
