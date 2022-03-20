<template>
  <div id="app">
    <Header />
    <Comment />
    <Card v-if="!isMobile" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/Header/Header.vue'
import Comment from './components/Comment/index.vue'
import Card from './components/Card/index.vue'
export default {
  name: 'App',
  components: {
    Header,
    Comment,
    Card
  },
  computed: {
    ...mapState({
      isMobile: (state) => state.isMobile
    })

  }
}
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
