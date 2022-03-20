<template>
  <div class="">
    About
  </div>
</template>
<script>
import { useStore, mapState } from 'vuex'
export default {
  name: "About",
  data() {
    return {
    }
  },
  setup() {
  },
  computed: {
    ...mapState({
      isMobile: (state) => state.isMobile
    })
  },
  methods: {
  },
  mounted() {
    console.log(this.isMobile);
  }
}
</script>
<style scoped lang="less">
.constructing {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
