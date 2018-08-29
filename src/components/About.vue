<template>
    <section id="about" class="c-about">
        <div class="c-about__container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus augue, dignissim cursus nulla eu, consequat gravida ante. Donec eu egestas eros. Nulla tincidunt, urna eget rutrum commodo, justo odio tempor sapien, sit amet sodales metus diam ac elit. Nam dictum enim ac tellus varius lacinia. Ut eleifend orci leo, eu bibendum lacus commodo ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non lorem eu lorem tempus consequat. Curabitur sit amet enim nec est finibus bibendum. Integer eget tellus vel eros malesuada pulvinar et id dolor. Donec augue ipsum, ullamcorper eu mattis eget, interdum et purus. Morbi et efficitur purus. Duis viverra nunc ipsum, vel dignissim ipsum pellentesque id. Sed turpis odio, ultrices non dolor vitae, interdum tempus ipsum. Nam vel vehicula diam.</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'about',
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

    .c-about {
        padding-top: 6em;
        color: $black;
        background-color: rgba($black, .15);

        &__container {
            @include container;
        }
    }
</style>
