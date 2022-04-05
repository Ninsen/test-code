<template>
  <div class="">
    About
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
const $store = useStore()
const isMobile = computed(() => {
  return $store.state.isMobile
})
onMounted(() => {
  console.log(isMobile.value);
})

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
