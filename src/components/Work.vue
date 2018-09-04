<template>
    <section id="work" class="work">
        <div class="work__container">
            <div v-for="(project, index) in projectList" :key="index" class="work__item">
                <div class="work__image">
                    <img :src="project.image1" :alt="project.image1alt" />
                </div>
                <div class="work__desc">
                    <h2 v-if="project.url"><a :href="project.url" target="_blank" rel="noopener noreferrer">{{ project.title }}</a></h2>
                    <h2 v-if="!project.url">{{ project.title }}</h2>
                    <p><strong>Platform:</strong> {{ project.platform }}<br />
                    <strong>Date:</strong> {{ project.date }}</p>
                    <div v-html="project.description"></div>
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
                projectList: work,
                selectImage: 0
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>

    @import "./../scss/main.scss";

    .work {
        padding: 6em 0 2em 0;
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
        }

        &__image {
            position: relative;

            @include breakpoint(laptop) {
                @include container(800px);
            }

            img {
                display: block;
                width: 100%;
                border: 1px solid rgba($black, .1);
            }

            .image2 {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                opacity: 0;
                transition: opacity .5s ease;
            }
        }

        &__desc {

            @include breakpoint(tablet) {
                @include container(500px);
            }

            @include breakpoint(laptop) {
                @include container(600px);
            }

            h2 {
                margin-top: 1.5em;

                a {
                    position: relative;
                    display: inline;
                    text-decoration: none;
                    color: $black;

                    &::after {
                        position: absolute;
                        right: -.75em;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 0;
                        height: 0;
                        content: '';
                        border-top: 7px solid transparent;
                        border-left: 9px solid $black;
                        border-bottom: 7px solid transparent;

                        @include breakpoint(laptop) {
                            margin-top: -2px;
                        }
                    }

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            a {
                display: inline;
                color: $black;
            }
        }
    }
</style>
