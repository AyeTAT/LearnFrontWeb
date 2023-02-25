import { debounce } from 'lodash'
import axios from 'axios'
import { message } from 'ant-design-vue'

// 请求拦截器
axios.interceptors.request.use(req => {
  return req
})

// 响应拦截器
axios.interceptors.response.use(
  res => {
    return res
  },
  error => {
    if (error.response.status == 401) {
      message.warn('当前登录状态已过期，请重新登录')
      localStorage.clear()
      setTimeout((window.location.href = window.location.origin), 1000)
    }
  },
)

export const requestApi = debounce(
  url => {
    return new Promise((resolve, reject) => {
      console.log(`这是由【${url}】发起的请求，进行了统一防抖处理，使用Promise函数进行同步处理`)

      setTimeout(() => {
        resolve({
          code: 200,
          msg: '请求成功！',
        })
      }, 1000)
    })
  },
  500,
  { leading: true, trailing: false },
)

export const request = debounce(
  async (url, payload) => {
    try {
      const response = await axios.request({
        url,
        ...payload,
      })
      return response.data
    } catch (error) {
      message.error(error)
    }
  },
  500,
  { leading: true, trailing: false },
)
