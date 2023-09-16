import { createContext, useContext, useState } from 'react'
import { GameMode, queueService } from '../services/QueueService'
import { useSessionContext } from './AuthContext'
import { useGameContext } from './GameContext'

interface QueueContextData {
  queueMode: GameMode | null
  queueEnterTime: number
  enterQueue: (gameMode: GameMode) => Promise<void>
  exitQueue: () => Promise<void>
}

interface QueueContextProps {
  children: React.ReactNode
}

export const QueueContext = createContext<QueueContextData>(
  {} as QueueContextData
)

export const QueueContextProvider = ({ children }: QueueContextProps) => {
  const [queueEnterTime, setQueueEnterTime] = useState(0)
  const [queueMode, setQueueMode] = useState<GameMode | null>(null)
  const { connectGame } = useGameContext()

  const { session } = useSessionContext()

  async function enterQueue(gameMode: GameMode): Promise<void> {
    await queueService.enterQueue(session.token, gameMode, (token: string) => {
      console.log(token)
      connectGame(token)
      setQueueMode(null)
    })
    setQueueMode(gameMode)
    setQueueEnterTime(Date.now())
  }

  async function exitQueue(): Promise<void> {
    await queueService.quitQueue()
    setQueueMode(null)
  }

  return (
    <QueueContext.Provider
      value={{ queueMode, queueEnterTime, enterQueue, exitQueue }}
    >
      {children}
    </QueueContext.Provider>
  )
}

export function useQueueContext() {
  return useContext(QueueContext)
}
