import { Api } from '../ApiConfig'

async function signIn(username: string, password: string): Promise<string> {
  return await Api.post('session', {
    username, password
  })
}

async function getSession(token: string) {
  return await Api.get(`session/${token}`)
}

async function signOut(token: string) {
  return await Api.delete(`session/${token}`)
}