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
                    <strong>Role:</strong> {{ project.role }}<br />
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
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        &__item {
            flex: 0 0 calc(50% - 4em);
            margin-bottom: 4em;

            @include breakpoint(tablet) {
                flex: 0 0 calc(50% - 2em);
            }

            @include breakpoint(mobile) {
                flex: 0 0 100%;
            }
        }

        &__image {
            position: relative;
            width: 100%;
            border: 1px solid rgba($black, .1);
            overflow: hidden;

            img {
                display: block;
                width: 100%;
            }
        }

        &__desc {

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
