import { Api } from '../ApiConfig'

export enum GameMode {
  Casual = 'casual',
  Paired = 'paired',
  Ranked = 'ranked',
}

class QueueService {
  private queueData: {
    queueId: string
    checkInterval: number
    gameMode: GameMode
    callback: (gameId: string) => void
  } | null = null

  async enterQueue(
    sessionId: string | null,
    gameMode: GameMode,
    callback: (playerId: string) => void
  ) {
    if (this.queueData) return

    if (gameMode === GameMode.Casual) {
      const response = await Api.post(
        'queue/casual',
        {
          gameMode,
          sessionId,
        },
        {
          validateStatus: undefined,
        }
      )
      this.queueData = {
        queueId: response.data.queueId,
        gameMode,
        callback,
        checkInterval: setInterval(this.checkQueue.bind(this), 200),
      }
    }
  }

  async quitQueue() {
    if (!this.queueData) return

    await Api.delete(
      `queue/${this.queueData.gameMode}/${this.queueData.queueId}`
    )

    clearInterval(this.queueData.checkInterval)
    this.queueData = null
  }

  private async checkQueue() {
    if (!this.queueData) return

    const response = await Api.get(
      `queue/${this.queueData.gameMode}/${this.queueData.queueId}`
    )

    if (response.status !== 200) {
      this.queueData.callback('1234')
    }

    const queueStatus = response.data
    if (queueStatus.queueStatus === 'matched') {
      this.queueData.callback(queueStatus.playerId)
      clearInterval(this.queueData.checkInterval)
      this.queueData = null
    }
  }
}

export const queueService = new QueueService()
