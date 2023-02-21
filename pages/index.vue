<script setup>
import { IdcardTwoTone } from '@ant-design/icons-vue'

useHead({
  title: '登录',
})

const pageInfo = reactive({
  userName: '',
})
</script>

<template>
  <div class="login-layout">
    <div class="login-box">
      <a-input
        placeholder="请输入用户名/微信号"
        size="large"
        v-model:value="pageInfo.userName"
        style="width: 270px"
      >
        <template #suffix>
          <IdcardTwoTone style="font-size: 30px" />
        </template>
      </a-input>
    </div>
  </div>
</template>

<style scoped lang="less">
.login-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-box {
    width: 600px;
    height: 500px;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
}
</style>
