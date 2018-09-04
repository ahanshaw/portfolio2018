<template>
    <section id="intro" class="intro">
        <div class="intro__container">
            <div class="intro__copy">
                <h1>Angela Hanshaw</h1>
                <p>Front-End Developer</p>
            </div>
            <div class="intro__link">
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
        components: {
            appOtter: Otter
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
        }
    }
</script>

<style lang="scss" scoped>

    @import "./../scss/main.scss";

    .intro {
        position: relative;
        height: 100%;
        padding: 3em 0 0 0;
        background-color: $black;
        z-index: 100;
        overflow: hidden;

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

            h1 {
                @include font-bold;
                font-size: 14vw;
                line-height: 1.1;
                margin: 0 0 .5em 0;

                @supports (font-variation-settings: normal) {
                    @include font-700;
                }

                @include breakpoint(tablet) {
                    font-size: 10vw;
                    margin-bottom: .5em;
                }

                @include breakpoint(laptop) {
                    font-size: 9vw;
                    margin-bottom: .125em;
                }

                @include breakpoint(widescreen) {
                    font-size: 6vw;
                }
            }

            p {
                @include font-regular;
                font-size: 6vw;
                margin: 0 0 2em 0;

                @supports (font-variation-settings: normal) {
                    @include font-500;
                }

                @include breakpoint(laptop) {
                    font-size: 5vw;

                    @supports (font-variation-settings: normal) {
                        @include font-400;
                    }
                }

                @include breakpoint(widescreen) {
                    font-size: 4vw;
                }
            }
        }

        &__link {
            align-self: flex-end;
            overflow: hidden;

            a {
                text-decoration: none;
            }
        }
    }
</style>
