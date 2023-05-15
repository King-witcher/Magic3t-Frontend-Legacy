import { Api } from '../ApiConfig'

export enum ServerStatus {
  Unavailable = 'unavailable',
  Available = 'available',
}

class ServerStatusService {
  async getStatus() {
    try {
      const response = await Api.get('status')
      if (response.status === 503) return ServerStatus.Unavailable
      else return ServerStatus.Available
    } catch {
      return ServerStatus.Unavailable
    }
  }
}

export const serverStatusService = new ServerStatusService()
