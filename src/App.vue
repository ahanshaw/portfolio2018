<template>
    <div id="app">
        <app-navigation :isScrolled="isScrolled" :introActive="introActive" :workActive="workActive" :aboutActive="aboutActive"></app-navigation>
        <app-intro></app-intro>
        <app-work></app-work>
        <app-about></app-about>
    </div>
</template>

<script>
    import { bus } from './main';
    import Navigation from './components/Navigation.vue'
    import Intro from './components/Intro.vue'
    import Work from './components/Work.vue'
    import About from './components/About.vue'

    export default {
        name: 'app',
        head: {
            title: {
                inner: 'Angela Hanshaw'
            },
            meta: [
                { name: 'description', content: 'This is front-end developer Angela Hanshaw\'s portfolio. You otter take a look.' },
                { name: 'twitter:title', content: 'Angela Hanshaw\'s Portfolio' },
                { n: 'twitter:description', c: 'This is front-end developer Angela Hanshaw\'s portfolio. You otter take a look.'},
                { itemprop: 'name', content: 'Angela Hanshaw\'s Portfolio' },
                { itemprop: 'description', content: 'This is front-end developer Angela Hanshaw\'s portfolio. You otter take a look.' },
                { property: 'og:title', content: 'Angela Hanshaw\'s Portfolio' },
                { p: 'og:image', c: 'http://angelahanshaw.com/images/meta.jpg' },
                { p: 'og:image:width', c: '1200' },
                { p: 'og:image:height', c: '630' },
            ]
        },
        data () {
            return {
                isScrolled: false,
                scrollPosition: 0,
                activeElement: '',
                introActive: true,
                workActive: false,
                aboutActive: false
            }
        },
        components: {
            appNavigation: Navigation,
            appIntro: Intro,
            appWork: Work,
            appAbout: About,
        },
        methods: {
            handleScroll() {
                var viewportHeight = window.innerHeight;

                if (this.scrolled == window.scrollY > viewportHeight) {
                    this.isScrolled = true;
                }
                else {
                    this.isScrolled = false;
                }

                var scrollTop = window.pageYOffset,
                    intro = document.getElementById('intro'),
                    introTop = intro.offsetTop,
                    work = document.getElementById('work'),
                    workTop = work.offsetTop,
                    about = document.getElementById('about'),
                    aboutTop = about.offsetTop;

                if (scrollTop > workTop) {
                    this.introActive = true;
                    this.workActive = false;
                    this.aboutActive = false;
                }

                if (scrollTop > introTop && scrollTop < aboutTop) {
                    this.introActive = false;
                    this.workActive = true;
                    this.aboutActive = false;
                }

                if (scrollTop >= aboutTop) {
                    this.introActive = false;
                    this.workActive = false;
                    this.aboutActive = true;
                }

                if (scrollTop > workTop + 500) {
                    bus.$emit('setOtterText', 'Thanks for looking!');
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style lang="scss">
    @import "./scss/main.scss";

    #app {
        position: relative;
        width: 100%;
        height: 100%;
    }

</style>
