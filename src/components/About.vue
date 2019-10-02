<template>
    <section id="about" class="about">
        <div class="about__container">
            <div class="about__item">
                <h2>About This Site</h2>
                <p>I created this site using Vue.js and Vue CLI. The work items are generated from a JSON file to make adding new projects&nbsp;easy.</p>
                <p>Most animations use CSS transitions, except for my otter pal, who was created with an SVG and&nbsp;Greensock.</p>
                <p>The font family is either Avenir Next Variable, if your browser supports variable fonts, or Open Sans, if it&nbsp;doesn&#8217;t.</p>
                <p>The site is responsive (of course!), and was built&nbsp;mobile-first. It was tested in IE11, Edge, Chrome, Safari, and Firefox, as well as on iPhone and&nbsp;iPad.</p>
            </div>
            <div class="about__item">
                <h2>About Me</h2>
                <p>I built my first website more than twenty years ago, and while I&#8217;ve also worked in web and print design, writing, and editing since then, HTML and CSS have always been my truest loves. (I&#8217;ve become rather fond of Vue.js, too.) I&#8217;m all about animation and creating delightful user interfaces with a focus on accessibility and good&nbsp;UX.</p>
                <p>I typically use Sass and BEM for projects, along with my own slightly modified version of <a target="_blank" rel="noopener noreferrer" href="https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/">ITCSS</a> for larger projects. I&#8217;m handy with Javascript as&nbsp;well.</p>
                <p>I&#8217;m currently a Senior Interactive Developer at <a target="_blank" rel="noopener noreferrer" href="https://www.elevatedigitalcommerce.com">Elevate</a>. I was also a mentor for new front-end developers at <a target="_blank" rel="noopener noreferrer" href="http://designation.io/">Designation</a> until they discontinued the dev portion of their&nbsp;curriculum.</p>
                <p>When I&#8217;m not coding, I&#8217;m probably out running. You can find me on the lakefront path every summer as a group leader for the Chicago Area Running Association&#8217;s <a target="_blank" rel="noopener noreferrer" href="https://cararuns.org/cs/cara/summer-marathon-chicago-training">Chicago Marathon training&nbsp;program</a>. Last year I ran my first (but not last)&nbsp;ultramarathon.</p>
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
