<template>
  <!-- 右侧个人卡片 -->
  <div class="card
  w-screen h-30 px-20 fixed right-0
  bg-blue-200 font-bold text-lg
   md: w-1/6 h-screen top-16
   bg-green-300
   2xl:bg-green-400 
   ">
  </div>
</template>

<script setup>
import { reactive, onMounted, } from 'vue';
let data = reactive({
  name: 'active',
  value: {
    a: 1,
    b: 2,
  }
})
// Methods
const sayHello = () => {
  console.log(data.name, data.value.a, data.value.b);
};
onMounted(() => {
  sayHello()
})
</script>

<style scoped lang='less'>
</style>
