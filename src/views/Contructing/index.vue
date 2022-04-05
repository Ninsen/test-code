<template>
  <div class="constructing">
    Constructing
    <p @click="handleBack">Back Home</p>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const $router = useRouter()
// Methods
const handleBack = () => {
  $router.push('/')
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
