import { Api } from '../ApiConfig'

export enum QueueMode {
  Casual = 'casual',
  Paired = 'paired',
  Ranked = 'ranked',
}

class QueueService {
  private queueData: {
    queueId: string
    checkInterval: number
    gameMode: QueueMode
    callback: (gameId: string) => void
  } | null = null

  async enterQueue(
    sessionId: string | null,
    gameMode: QueueMode,
    callback: (gameId: string) => void
  ) {
    if (this.queueData) return

    if (gameMode === QueueMode.Casual) {
      const response = await Api.post('queue/casual', {
        gameMode,
        sessionId,
      })
      this.queueData = {
        queueId: response.data.queueId,
        gameMode,
        callback,
        checkInterval: setInterval(this.checkQueue.bind(this), 500),
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
    const queueStatus = response.data
    if (queueStatus.queueStatus === 'matched') {
      this.queueData.callback(queueStatus.gameId)
      clearInterval(this.queueData.checkInterval)
      this.queueData = null
    }
  }
}

export const queueService = new QueueService()
