import { Choice, GameState } from '../../utils/types'
import { Api } from '../ApiConfig'

export class GameService {
  async getGameState(playerId: string): Promise<GameState> {
    const response = await Api.get(`game/${playerId}/state`)
    if (response.status >= 300 || response.status < 200)
      throw new Error(response.data)

    return response.data as GameState
  }

  async choose(playerId: string, value: Choice): Promise<void> {
    const response = await Api.post(`game/${playerId}/choices`, {
      value,
    })

    if (response.status >= 300 || response.status < 200)
      throw new Error(response.data)
  }
}

export const gameService = new GameService()
