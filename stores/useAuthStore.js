import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      userName: '',
      exam: {
        practiceFlag: false, // 今日练习状态
        accessToday: 0, // 今日访问
        accessTotal: 0, // 总访问
        errorToday: 0, // 今日错题
        errorKey: [], // 答错题目
        errorTotal: 0, // 总错题
        successToday: 0, // 今日答对
        successKey: [], // 答对题目
        successTotal: 0, // 今日答对
        answerObj: {}, // 历史答案
        days: 0, // 已完成练习天数
      },
    }
  },

  persist: process.client && {
    storage: localStorage,
  },
})
