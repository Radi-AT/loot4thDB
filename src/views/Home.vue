<script setup>
import BaseSVG from '../components/BaseSVG.vue';
</script>

<template>
    <main class="main">
        <BaseSVG name="dungeon" cssClass="dungeonLogo" color="peru"/>
        <h1>HOME</h1>
    </main>
</template>

<style lang="scss">
@import '../scss/theme-colors.scss';

.svgWrapper.dungeonLogo {
    margin: 20px auto;
    display: block;
}
</style>
