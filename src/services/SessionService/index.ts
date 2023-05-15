import { Api } from '../ApiConfig'

class SessionService {
  async signIn(username: string, password: string) {
    const data = { username, password }
    const response = await Api.post('session', data)
    return response.data
  }
  
  async isAuthenticated(token: string): Promise<boolean> {
    const response = await Api.get(`session/${token}`)
    return response.data.authenticated
  }
  
  async signOut(token: string) {
    const response = await Api.delete(`session/${token}`)
    return response.data
  }
}

export const sessionService = new SessionService()