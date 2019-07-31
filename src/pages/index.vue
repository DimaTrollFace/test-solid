<template>
    <div class="home"
         :style="{background: bgColor}"
         @click="onChangeBackground"
    >
        <div class="home__text">

        </div>
    </div>
</template>

<script>
    import { getRandomRGBColor } from '@/utils';
    export default {
        name: "index",
        data: () => ({
            bgColor: getRandomRGBColor()
        }),
        methods: {
            onChangeBackground() {
                this.bgColor = getRandomRGBColor()
            }
        }
    }
</script>

<style scoped>
    .home{
        width: 100vw;
        height: 100vh;
        padding: 50px;
    }
</style>
