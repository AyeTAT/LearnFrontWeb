import { useAuthStore } from './useAuthStore'

export default function useStore() {
  return {
    auth: useAuthStore(),
  }
}
