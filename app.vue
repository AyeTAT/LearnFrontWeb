<script setup>
import useStore from '~/stores/index'

const { auth } = useStore()
useHead({
  title: auth.userName ? "张同学's 学习空间" : '登录',
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="less">
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased; /* 字体抗锯齿渲染 */
}

html.dark {
  background: #222;
  color: white;
}

/* 伪元素选择器修改基于 webkit 的浏览器的滚动条样式 */
/* 整个滚动条 */
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
/* 滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
  background: #3091f2;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover {
  background: #3091f2;
  width: 7px;
}
/* 滚动条轨道 */
::-webkit-scrollbar-track {
  border-radius: 20px;
}

.ant-select-selector,
.ant-picker,
.ant-input-affix-wrapper,
.ant-input,
.ant-btn,
.ant-upload,
.ant-pagination-item-link,
.ant-pagination-item,
.ant-pagination-next,
.user-avatar {
  border-radius: @border-radius-base !important;
}
</style>
