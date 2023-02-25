import { userNames } from '/constants/index'

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const auth = JSON.parse(localStorage.getItem('authStore'))
    if ((!auth || !userNames.includes(auth.userName)) && to.fullPath !== '/login') {
      // 重定向
      return navigateTo('/login')
    }
  }
})
