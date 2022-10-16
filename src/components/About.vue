<template>
    <section id="about" class="about">
        <div class="about__container">
            <div class="about__item">
                <h2>About This Site</h2>
                <p>I created this site using Vue. The work items are generated from JSON files to make adding new projects&nbsp;easy.</p>
                <p>Most animations use CSS transitions, except for my otter pal, who was created with an SVG and&nbsp;Greensock.</p>
                <p>The font family is either Avenir Next Variable, if your browser supports variable fonts, or Open Sans, if it&nbsp;doesn&#8217;t.</p>
                <p>Hosted by <a target="_blank" rel="noopener noreferrer" href="https://www.netlify.com/">Netlify</a>.</p>
            </div>
            <div class="about__item">
                <h2>About Me</h2>
                <p>While I&#8217;ve worked in web and print design, writing, and editing, front-end development with a focus on accessibility and good&nbsp;UX has always had my heart, and has been my main focus for the last eight years. Aside from the basics (HTML, CSS, and JavaScript), I have React and Vue in my toolbox, and I&#8217;ve created sites using Craft CMS, WordPress, Shopify, Opimizely/Episerver, and Umbraco.</p>
                <p>I am currently a Senior Front-End Developer at <a target="_blank" rel="noopener noreferrer" href="https://adagetechnologies.com/">Adage Technologies</a>. Previously, I was a Front-End Engineer at <a target="_blank" rel="noopener noreferrer" href="https://cliquestudios.com/">Clique Studios</a> and a Senior Interactive Developer at <a target="_blank" rel="noopener noreferrer" href="https://www.elevatestudios.com">Elevate</a>. I was also a mentor for new front-end developers at Designation (now Flatiron School) UI/UX design bootcamp.</p>
                <p>And yes, I really, really like both otters and spectacularly bad&nbsp;puns.</p>
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

    .about {
        position: relative;
        padding: 6em 0;
        color: $black;
        background-color: $gray;

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

                /// IE11 fix
                @media all and (-ms-high-contrast:none) {
                    flex: 0 0 50%;
                    margin: 0 1.5em
                }
            }
        }
    }
</style>
