import { useMutation } from '@tanstack/vue-query'
import { login, logout, register } from '../services/auth.service'

export const useLoginMutate = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: { email: string; password: string }) => {
      return await login(data)
    }
  })
}

export const useRegistrasi = () => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: async (data: { email: string; password: string }) => {
      return await register(data)
    }
  })
}

export const useLogoutMutate = () => {
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => {
      return await logout()
    }
  })
}
