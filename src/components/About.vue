<template>
    <section id="about" class="c-about">
        <div class="c-about__container">
            <div class="c-about__item">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus augue, dignissim cursus nulla eu, consequat gravida ante. Donec eu egestas eros. Nulla tincidunt, urna eget rutrum commodo, justo odio tempor sapien, sit amet sodales metus diam ac elit. Nam dictum enim ac tellus varius lacinia. Ut eleifend orci leo, eu bibendum lacus commodo ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non lorem eu lorem tempus consequat. Curabitur sit amet enim nec est finibus bibendum. Integer eget tellus vel eros malesuada pulvinar et id dolor. Donec augue ipsum, ullamcorper eu mattis eget, interdum et purus. Morbi et efficitur purus. Duis viverra nunc ipsum, vel dignissim ipsum pellentesque id. Sed turpis odio, ultrices non dolor vitae, interdum tempus ipsum. Nam vel vehicula diam.</p>
            </div>
            <div class="c-about__item">
                <h2>About This Site</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus augue, dignissim cursus nulla eu, consequat gravida ante. Donec eu egestas eros. Nulla tincidunt, urna eget rutrum commodo, justo odio tempor sapien, sit amet sodales metus diam ac elit. Nam dictum enim ac tellus varius lacinia. Ut eleifend orci leo, eu bibendum lacus commodo ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non lorem eu lorem tempus consequat. Curabitur sit amet enim nec est finibus bibendum. Integer eget tellus vel eros malesuada pulvinar et id dolor. Donec augue ipsum, ullamcorper eu mattis eget, interdum et purus. Morbi et efficitur purus. Duis viverra nunc ipsum, vel dignissim ipsum pellentesque id. Sed turpis odio, ultrices non dolor vitae, interdum tempus ipsum. Nam vel vehicula diam.</p>
            </div>
        </div>
        <app-foot></app-foot>
    </section>
</template>

<script>
    import Foot from './Foot.vue'

    export default {
        name: 'about',
        data () {
            return {
            }
        },
        methods: {

        },
        components: {
            appFoot: Foot
        }
    }
</script>

<style lang="scss" scoped>

    @import "./../scss/main.scss";

    .c-about {
        position: relative;
        padding: 7em 0 5em 0;
        color: $black;
        background-color: rgba($black, .15);

        @include breakpoint(tablet) {
            padding: 8em 0 6em 0;
        }

        &__container {
            @include container(800px);

            @include breakpoint(tablet) {
                @include container(600px);
            }

            @include breakpoint(laptop) {
                @include container(800px);
                display: flex;
                justify-content: space-between;
            }

            @include breakpoint(desktop) {
                @include container(1000px);
            }
        }

        &__item {
            margin-bottom: 3em;

            @include breakpoint(laptop) {
                flex: 0 0 calc(50% - 3em);
                margin-bottom: 0;
            }
        }
    }
</style>
