import { login } from '~/api/login'
import useStore from '~/stores/index'
import { userNames } from '~/constants/index'

export default () => {
  const { auth } = useStore()

  const loading = ref(false)

  const hanleLogin = pageInfo => {
    if (loading.value)
      return new Promise(resolve => {
        resolve(false)
      })

    loading.value = true
    return login(pageInfo).then(resolve => {
      loading.value = false
      if (userNames.includes(pageInfo.userName)) {
        auth.userName = pageInfo.userName
        return true
      }
      return false
    })
  }

  return {
    loading,

    hanleLogin,
  }
}
