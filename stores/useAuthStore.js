import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      userName: '',
      exam: {
        error: 0,
        success: 0,
        total: 0,
        days: 0,
      },
    }
  },

  persist: process.client && {
    storage: localStorage,
  },
})
