<template>
  <button @click="countAdd">Click me to Add {{count}}</button>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    countAdd() {
      this.count++
    }
  }
}
</script>
<style scoped lang="less">
</style>
