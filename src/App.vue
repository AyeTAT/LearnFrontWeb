<!--
 * @Author: Dzy
 * @Date: 2023-02-20 16:41:24
 * @LastEditors: Dzy
 * @LastEditTime: 2023-02-20 17:14:09
 * @Description: Desc
-->
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  </div>
  <HelloWorld msg="张同学你好，请点击下方按钮体验数据双向绑定" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
