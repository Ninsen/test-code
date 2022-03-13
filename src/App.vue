<template>
  <Banner />
  <router-view></router-view>
</template>

<script setup>
import Banner from './components/Banner.vue'
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  img {
    display: block;
    margin: 0 auto;
  }
}
</style>
