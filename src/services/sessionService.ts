import { get, post } from './server'

interface LoginParams {
  username: string
  password: string
}

interface LoginResponse {
  success: boolean
}

async function login(params: LoginParams) {
  return await post<LoginResponse>('/login', params)
}

export { login }