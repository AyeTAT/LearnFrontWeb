<!--
 * @Author: Dzy
 * @Date: 2023-02-20 16:41:24
 * @LastEditors: Dzy
 * @LastEditTime: 2023-02-20 19:44:02
 * @Description: 简单练习所学代码
-->
<script setup>
// 张同学可以在这个文件练习所学js 以及 vue 简单代码，使用vue3写法。后续会更新加入组件库之后的页面

import { ref } from 'vue' // 引入 vue 相关 api

defineProps({
  msg: String, // 从父组件接收到的参数 msg 类型：String
})

const count = ref(0)
</script>

<template>
  <!-- 直接使用msg显示，具体内容可看父类（App.vue）传值 -->
  <h3>{{ msg }}</h3>

  <div class="card">
    <a-button type="primary" @click="count++">count is {{ count }}</a-button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
