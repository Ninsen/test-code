<template>
  <Header />
  <router-view></router-view>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: none;
  img {
    display: block;
    margin: 0 auto;
    -webkit-user-drag: none;
  }
}
</style>
