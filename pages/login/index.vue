<script setup>
import { IdcardTwoTone, LoadingOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import useLogin from './composables/useLogin'
import useStore from '/stores/index.js'
import { menus } from '~/constants/menuTree'

// useHead({
//   title: '登录',
// })

definePageMeta({
  layout: false, // 通过元信息的方式关闭 default 布局
  middleware: false,
})

const pageInfo = reactive({
  userName: '',
})

const { auth } = useStore()

const { loading, hanleLogin } = useLogin()
const router = useRouter()
const indicator = h(LoadingOutlined, {
  style: {
    fontSize: '24px',
  },
  spin: loading.value,
})

const login = () => {
  hanleLogin(pageInfo).then(result => {
    if (result) {
      message.success('登录成功！')
      router.push(menus[0].path)
    } else {
      message.error('用户名不存在！请重新输入')
      pageInfo.userName = ''
    }
  })
}

onBeforeMount(() => {
  if (auth.userName) {
    message.success('欢迎张同学登录系统！')
    // useHead({
    //   title: "张同学's 学习空间",
    // })
    router.push(menus[0].path)
  }
})
</script>

<template>
  <div class="login-layout">
    <div class="login-box">
      <a-spin v-if="loading" :indicator="indicator" tip="正在校验身份，请稍候..." />
      <a-input
        v-else
        placeholder="请输入用户名/微信号"
        size="large"
        v-model:value="pageInfo.userName"
        @pressEnter="login"
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
    border-radius: @border-radius-base;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
