import { createContext, useContext, useState } from 'react'
import { QueueMode, queueService } from '../services/QueueService'
import { useSessionContext } from './AuthContext'

interface QueueContextData {
  queueMode: QueueMode | null
  queueTime: number
  enterQueue: (gameMode: QueueMode) => Promise<void>
  exitQueue: () => Promise<void>
}

interface QueueContextProps {
  children: React.ReactNode
}

export const QueueContext = createContext<QueueContextData>(
  {} as QueueContextData
)

export const QueueContextProvider = ({ children }: QueueContextProps) => {
  const [queueTime, setQueueTime] = useState(0)
  const [queueMode, setQueueMode] = useState<QueueMode | null>(null)

  const { session } = useSessionContext()

  async function enterQueue(gameMode: QueueMode): Promise<void> {
    setQueueMode(gameMode)
    setQueueTime(Date.now())
    await queueService.enterQueue(session.token, gameMode, (gameId: string) => {
      alert(gameId)
      setQueueMode(null)
    })
  }

  async function exitQueue(): Promise<void> {
    await queueService.quitQueue()
    setQueueMode(null)
  }

  return (
    <QueueContext.Provider
      value={{ queueMode, queueTime, enterQueue, exitQueue }}
    >
      {children}
    </QueueContext.Provider>
  )
}

export function useQueueContext() {
  return useContext(QueueContext)
}
