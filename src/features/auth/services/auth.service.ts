import { account, ID } from '@/lib/appWrite'

const login = async (data: { email: string; password: string }) => {
  const promise = await account.createEmailSession(data.email, data.password)
  return promise
}

const register = async (data: { email: string; password: string }) => {
  await account.create(ID.unique(), data.email, data.password)

  login({ email: data.email, password: data.password })
}

const logout = async () => {
  await account.deleteSession('current')
}

export { login, register, logout }
