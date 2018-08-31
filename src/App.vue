<template>
    <div id="app">
        <app-navigation :isScrolled="isScrolled" :workActive="workActive" :aboutActive="aboutActive"></app-navigation>
        <app-intro></app-intro>
        <app-work></app-work>
        <app-about></app-about>
    </div>
</template>

<script>
    import Navigation from './components/Navigation.vue'
    import Intro from './components/Intro.vue'
    import Work from './components/Work.vue'
    import About from './components/About.vue'

    export default {
        name: 'app',
        data () {
            return {
                isScrolled: false,
                scrollPosition: 0,
                activeElement: '',
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

                if (this.scrolled = window.scrollY > viewportHeight) {
                    this.isScrolled = true;
                }
                else {
                    this.isScrolled = false;
                }

                var scrollTop = window.pageYOffset,
                    work = document.getElementById('work'),
                    workTop = work.offsetTop,
                    about = document.getElementById('about'),
                    aboutHeight = about.offsetTop;

                if (scrollTop < aboutHeight) {
                    this.workActive = true;
                    this.aboutActive = false;
                }

                if (scrollTop >= aboutHeight) {
                    this.workActive = false;
                    this.aboutActive = true;
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
