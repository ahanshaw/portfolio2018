<template>
    <section id="about" class="about">
        <div class="about__container">
            <div class="about__item">
                <h2>About This Site</h2>
                <p>I created this site using Vue.js and Vue CLI. The work items are generated from a JSON file to make adding new projects easy. Most animations use CSS transitions, except for my otter pal, which was created with an SVG and Greensock. (Did you miss him? <a href="#" v-scroll-to="'#intro'">Scroll back to the top</a> and hover over/click on the giant arrow.)</p>
                <p>The site is responsive (of course!), and was built&nbsp;mobile-first. The font family is either Avenir Next Variable, if your browser supports variable fonts, or Open Sans, if it doesn&#8217;t.</p>
            </div>
            <div class="about__item">
                <h2>About Me</h2>
                <p>I built my first website more than twenty years ago, and while I&#8217;ve also worked in web and print design, writing, and editing since then, HTML and CSS have always been my truest loves. (I&#8217;ve become rather fond of Vue.js, too.) I use Sass and BEM for all projects, and my own slightly modified version of <a target="_blank" rel="noopener noreferrer" href="https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/">ITCSS</a> for larger projects. I love animation and creating delightful user interfaces with a focus on accessibility and good UX. I&#8217;m handy with Javascript and jQuery as&nbsp;well.</p>
                <p>I&#8217;m currently the senior interactive developer at <a target="_blank" rel="noopener noreferrer" href="https://www.elevatedigitalcommerce.com">Elevate</a>. I was also a mentor for new front-end developers at <a target="_blank" rel="noopener noreferrer" href="http://designation.io/">Designation</a> until they discontinued the dev portion of their&nbsp;curriculum.</p>
                <p>When I&#8217;m not coding, I&#8217;m probably out running. You can find me on the lakefront path every summer as a group leader for the Chicago Area Running Association&#8217;s <a target="_blank" rel="noopener noreferrer" href="https://cararuns.org/cs/cara/summer-marathon-chicago-training">Chicago marathon training&nbsp;program</a>.</p>
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
        padding: 7em 0 5em 0;
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
            }
        }
    }
</style>
