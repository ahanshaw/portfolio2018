<template>
    <section id="work" class="work">
        <h2>Agency Work</h2>
        <div class="work__container">
            <div v-for="(project, index) in agencyList" :key="index" class="work__item">
                <div class="work__image">
                    <img :src="project.image1" :alt="project.image1alt" />
                </div>
                <div class="work__desc">
                    <h3 v-if="project.url"><a :href="project.url" target="_blank" rel="noopener noreferrer">{{ project.title }}</a></h3>
                    <h3 v-if="!project.url">{{ project.title }}</h3>
                    <p><strong>Platform:</strong> {{ project.platform }}<br />
                    <strong>Role:</strong> {{ project.role }}<br />
                    <strong>Date:</strong> {{ project.date }}</p>
                    <div v-html="project.description"></div>
                </div>
            </div>
        </div>
        <h2>Pro Bono Work</h2>
        <div class="work__container">
            <div v-for="(project, index) in probonoList" :key="index" class="work__item">
                <div class="work__image">
                    <img :src="project.image1" :alt="project.image1alt" />
                </div>
                <div class="work__desc">
                    <h3 v-if="project.url"><a :href="project.url" target="_blank" rel="noopener noreferrer">{{ project.title }}</a></h3>
                    <h3 v-if="!project.url">{{ project.title }}</h3>
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
    import agency from './../data/agency.json'
    import probono from './../data/probono.json'

    export default {
        name: 'work',
        data() {
            return {
                agencyList: agency,
                probonoList: probono,
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
        @include container(1200px);
        padding: 6em 0 2em 0;
        color: $black;
        background-color: $white;

        h2 {
            text-align: center;
            margin-bottom: 2em;
        }

        &__container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        &__item {
            flex: 0 0 100%;
            margin-bottom: 4em;

            @include breakpoint(tablet) {
                flex: 0 0 calc(50% - 2em);
            }

            @include breakpoint(laptop) {
                flex: 0 0 calc(50% - 3em);
            }

            @include breakpoint(desktop) {
                flex: 0 0 calc(50% - 4em);
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

            h3 {
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
