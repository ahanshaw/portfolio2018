<template>
    <div class="c-footer">
        <p>&copy;{{ new Date().getFullYear() }} Angela Hanshaw</p>
    </div>
</template>

<script>
    export default {
        name: 'foot',
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>

    @import "./../scss/main.scss";

    .c-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        padding: 1em;
        background-color: $black;

        p {
            font-size: .75em;
            color: $white;
            margin: 0;
        }
    }
</style>
