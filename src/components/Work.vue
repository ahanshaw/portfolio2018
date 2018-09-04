<template>
    <section id="work" class="c-work">
        <div class="c-work__container">
            <div v-for="project in projectList" :key="project.title" class="c-work__item">
                <div class="c-work__image">
                    <a :href="project.url" target="_blank" rel="noopener noreferrer">
                        <img :src="project.image1" :alt="project.image1alt" />
                        <img v-if="project.image2" :src="project.image2" :alt="project.image2alt" class="image2" :style="{'opacity': selectImage}" />
                    </a>
                </div>
                <div v-if="project.image2" class="c-work__image-select">
                    <ul>
                        <li v-on:click="deselectImage2()"><span class="visually-hidden">Image 1</span></li>
                        <li v-on:click="selectImage2()"><span class="visually-hidden">Image 2</span></li>
                    </ul>
                </div>
                <div class="c-work__desc">
                    <h2><a :href="project.url" target="_blank" rel="noopener noreferrer">{{ project.title }}</a></h2>
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
                selectImage: -10
            }
        },
        methods: {
            selectImage2() {
                this.selectImage = 1;
            },
            deselectImage2() {
                this.selectImage = 0;
            }
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
                    position: relative;
                    display: inline;
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
                        border-left: 9px solid $white;
                        border-bottom: 7px solid transparent;
                    }

                    &:hover {
                        text-decoration: none;

                        &::after {
                            border-left: 8px solid $black;
                        }
                    }
                }
            }
        }

        &__image {

            @include breakpoint(laptop) {
                @include container(800px);
            }

            a {
                position: relative;
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

        &__image-select {

            ul {
                text-align: center;
                margin: 1em 0 0 0;
                padding: 0;
            }

            li {
                position: relative;
                display: inline;
                margin: 0 1em;

                &::before {
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    content: '';
                    width: 10px;
                    height: 10px;
                    background-color: $black;
                    border-radius: 50%;
                }

                &:hover {
                    cursor: pointer;
                }
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
