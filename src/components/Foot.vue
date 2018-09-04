<template>
    <div class="foot">
        <p>
            &copy;{{ new Date().getFullYear() }} Angela Hanshaw
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/angelahanshaw">
                <svg id="linkedin" class="linkedin" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.41 46.27"><title>LinkedIn</title><path d="M6.21,12.65H6.15A5.37,5.37,0,0,1,.41,7.26c0-3.06,2.33-5.39,5.87-5.39S12,4.2,12.07,7.26,9.84,12.65,6.21,12.65Zm5.2,35.48H1V16.9h10.4Zm37.41,0H38.45V31.43c0-4.19-1.51-7.06-5.26-7.06a5.69,5.69,0,0,0-5.33,3.78,7.94,7.94,0,0,0-.34,2.56V48.13H17.15c.13-28.3,0-31.23,0-31.23H27.52v4.54h-.07a10.31,10.31,0,0,1,9.43-5.26c6.84,0,11.94,4.47,11.94,14.05Z" transform="translate(-0.41 -1.87)" style="fill:#fff"/></svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ahanshaw/">
                <svg id="github" class="github" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.23 40.81"><title>Github</title><path d="M47.34,36.91C43.52,44.65,33,45.4,25.46,45.4S6.65,44.74,2.68,36.91A21.34,21.34,0,0,1,.89,27.32,17.21,17.21,0,0,1,4.83,15.84,15.93,15.93,0,0,1,4,10.92,14.2,14.2,0,0,1,5.52,4.6c4.58,0,7.51,2,11,4.72a39,39,0,0,1,9-1,35.11,35.11,0,0,1,8.12.92C37,6.54,40,4.6,44.47,4.6A14.07,14.07,0,0,1,46,10.92a15.4,15.4,0,0,1-.78,4.86,17.42,17.42,0,0,1,3.94,11.54A21.8,21.8,0,0,1,47.34,36.91ZM35.2,24.07a41.69,41.69,0,0,0-5.65.61A30.09,30.09,0,0,1,25,25a30,30,0,0,1-4.55-.32,41.35,41.35,0,0,0-5.65-.61c-4.73,0-7.42,3.92-7.42,8.35,0,8.87,8.11,10.23,15.19,10.23h4.86c7.07,0,15.19-1.36,15.19-10.23C42.62,28,39.92,24.07,35.2,24.07ZM15.72,38C13.12,38,12,34.53,12,32.42s1.11-5.57,3.71-5.57,3.71,3.45,3.71,5.57S18.33,38,15.72,38Zm18.56,0c-2.62,0-3.71-3.45-3.71-5.56s1.09-5.57,3.71-5.57S38,30.3,38,32.42,36.88,38,34.28,38Z" transform="translate(-0.89 -4.6)" style="fill:#fff"/></svg>
            </a>
    </p>
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

    .foot {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        padding: 1em;
        background-color: $black;

        p {
            @include font-bold;
            font-size: .75em;
            letter-spacing: .05em;
            color: $white;
            margin: 0;

            @supports (font-variation-settings: normal) {
                @include font-600;
            }
        }

        a {
            margin-left: 1em;
        }

        svg {
            width: 1.25em;
            height: 1.25em;
            margin-left: 1em;
        }

        .linkedin {
            vertical-align: -.25em;
        }

        .github {
            vertical-align: -.4em;
        }
    }
</style>
