import { createContext, useContext, useEffect, useState } from 'react'
import { GameMode, queueService } from '../services/QueueService'
import { useSessionContext } from './AuthContext'
import {
  ServerStatus,
  serverStatusService,
} from '../services/ServerStatusService'

interface ServerStatusContextData {
  serverStatus?: ServerStatus
}

interface ServerStatusContextProps {
  children: React.ReactNode
}

export const ServerStatusContext = createContext<ServerStatusContextData>({
  serverStatus: ServerStatus.Unavailable,
})

export const ServerStatusContextProvider = ({
  children,
}: ServerStatusContextProps) => {
  const [status, setStatus] = useState<ServerStatus | undefined>(undefined)

  useEffect(() => {
    serverStatusService.getStatus().then((status) => {
      setStatus(status)
    })
  }, [])

  return (
    <ServerStatusContext.Provider value={{ serverStatus: status }}>
      {children}
    </ServerStatusContext.Provider>
  )
}

export function useServerStatusContext() {
  return useContext(ServerStatusContext)
}
