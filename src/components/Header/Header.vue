<template>
  <div class="
  w-screen h-16 flex items-center justify-between px-20
  bg-green-200 font-bold text-lg
   md:bg-green-300 
   2xl:bg-green-400" @click="handleHeader">
    <p class="cursor-pointer">Ninsen</p>
    <div class="flex items-center w-max max-w-5xl">
      <p class="cursor-pointer mr-5">首页</p>
      <p class="cursor-pointer mr-5">博文</p>
      <p class="cursor-pointer mr-5">音乐</p>
      <p class="cursor-pointer">摄影</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      routeArray: [['Ninsen', '/about'], ['首页', '/'], ['博文', '/blog'], ['音乐', '/music'], ['摄影', '/photo']],
      routeMap: null
    }
  },
  methods: {
    handleHeader(e) {
      if (e.target.nodeName != 'P') return
      let target = e.target.innerText
      this.$router.push(`${this.routeMap.get(target)}`)
    }
  },
  mounted() {
    this.routeMap = new Map(this.routeArray)
  }
}
</script>

<style scoped lang='less'>
</style>
