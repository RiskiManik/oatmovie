import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { account } from '@/lib/appWrite'
import type { Account, Models } from 'appwrite'
import { useLoginMutate, useRegistrasi } from '../hooks/useAuth.mutate'

export const useUserStore = defineStore('user', () => {
  const current = ref<Models.User<Models.Preferences> | null>(null)
  const init = async () => {
    try {
      current.value = await account.get()
    } catch (err) {
      current.value = null
      console.log(err)
    }
  }
  const {
    mutateAsync: login,
    isPending: isLoginPending,
    isSuccess: isLoginSuccess
  } = useLoginMutate()
  const {
    mutateAsync: register,
    isPending: isRegisterPending,
    isSuccess: isRegisterSuccess
  } = useRegistrasi()
  const {
    mutateAsync: logout,
    isPending: isLogoutPending,
    isSuccess: isLogoutSuccess
  } = useLoginMutate()
  return {
    current,
    init,
    login,
    isLoginPending,
    isLoginSuccess,
    register,
    isRegisterPending,
    isRegisterSuccess,
    logout,
    isLogoutPending,
    isLogoutSuccess
  }
})
