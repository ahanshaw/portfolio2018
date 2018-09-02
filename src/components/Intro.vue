<template>
    <section id="intro" class="c-intro">
        <div class="c-intro__container">
            <div class="c-intro__copy">
                <h1>Angela Hanshaw</h1>
                <p>Front-End Developer</p>
            </div>
            <div class="c-intro__link">
                <a v-scroll-to="'#work'" href="#work">
                    <app-otter></app-otter>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import Otter from './Otter.vue'

    export default {
        name: 'intro',
        data () {
            return {
                active: false
            }
        },
        methods: {
            arrowHover() {
                var circle = document.getElementById('circle'),
                    tlAnimation = new TimelineMax();

                tlAnimation.to(circle, 1, {opacity: 1, yPercent: -200, ease: Power0.easeNone, repeat: 0});
            },
            arrowClick() {
                var circle = document.getElementById('circle'),
                    tlAnimation = new TimelineMax();

                tlAnimation.to(circle, 1, {opacity: 0, yPercent: 0, ease: Power0.easeNone, repeat: 0});
            }
        },
        components: {
            appOtter: Otter
        }
    }
</script>

<style lang="scss" scoped>

    @import "./../scss/main.scss";

    .c-intro {
        position: relative;
        height: 100%;
        padding: 4em 0 0 0;
        background-color: $black;
        z-index: 100;

        @include breakpoint(tablet) {
            padding: 5em 0;
        }

        @include breakpoint(laptop) {
            padding: 6em 0;
        }

        @include breakpoint(desktop) {
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

        &__copy,
        &__link {
            position: relative;
            width: 100%;
        }

        &__copy {
            align-self: flex-start;
        }

        &__link {
            align-self: flex-end;
            overflow: hidden;
        }

        p {
            @include font-regular;
            font-size: 5vw;
            margin: 0 0 2em 0;

            @supports (font-variation-settings: normal) {
                @include font-300;
            }

            @include breakpoint(widescreen) {
                font-size: 4vw;
            }
        }
    }
</style>
