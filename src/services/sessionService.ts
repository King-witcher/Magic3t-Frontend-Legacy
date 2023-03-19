import { get, post } from './server'

interface LoginParams {
  username: string
  password: string
}

type LoginResponse = {
  success: true
  token: string
} | {
  success: false
}

export async function login(params: LoginParams) {
  return await post<LoginResponse>('/login', params)
}

export async function getSessionInfo(token: string) {
  return await get(`/session?token=${token}`)
}