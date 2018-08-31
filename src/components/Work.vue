<template>
    <section id="work" class="c-work">
        <div class="c-work__container">
            <div v-for="project in projectList" :key="project.title" class="c-work__item">
                <div class="c-work__image">
                    <a :href="project.url" target="_blank" rel="noopener noreferrer"><img :src="project.image" :alt="project.title" /></a>
                </div>
                <div class="c-work__desc">
                    <h2><a :href="project.url" target="_blank" rel="noopener noreferrer">{{ project.title }}</a></h2>
                    <p><strong>Platform:</strong> {{ project.platform }}<br />
                    <strong>Date:</strong> {{ project.date }}</p>
                    <div v-html="project.description">></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import work from './../data/work.json'

    export default {
        name: 'work',
        data() {
            return {
                projectList: work
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>

    @import "./../scss/main.scss";

    .c-work {
        padding: 7em 0 .5em 0;
        color: $black;
        background-color: $white;

        &__container {
            @include container(1200px);
        }

        &__item {
            margin-bottom: 4em;

            @include breakpoint(tablet) {
                margin-bottom: 6em;
            }

            h2 {
                margin-top: 1.5em;

                a {
                    color: $black;
                }
            }

            img {
                display: block;
                width: 100%;
                border: 1px solid rgba($black, .1);
            }
        }

        &__image {

            @include breakpoint(laptop) {
                @include container(800px);
            }

        }

        &__desc {
            @include breakpoint(tablet) {
                @include container(500px);
            }
            @include breakpoint(laptop) {
                @include container(600px);
            }
        }
    }
</style>
