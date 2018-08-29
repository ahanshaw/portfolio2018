<template>
    <section id="work" class="c-work">
        <div class="c-work__container">
            <div v-for="project in projectList" :key="project.title" class="c-work__item">
                <a :href="project.url"><img :src="project.image" :alt="project.title" /></a>
                <h2><a :href="project.url">{{ project.title }}</a></h2>
                <p>Platform: {{ project.platform }}</p>
                <p>{{ project.description }}</p>
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
            @include container;
        }

        &__item {
            margin-bottom: 4em;

            @include breakpoint(tablet) {
                margin-bottom: 6em;
            }

            h2 {

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
    }
</style>
