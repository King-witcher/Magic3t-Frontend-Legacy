import { createContext, useContext, useEffect, useState } from 'react'
import { GameMode, queueService } from '../services/QueueService'
import { useSessionContext } from './AuthContext'
import {
  ServerStatus,
  serverStatusService,
} from '../services/ServerStatusService'

interface ServerStatusContextData {
  serverStatus?: ServerStatus
  deploying: boolean
}

interface ServerStatusContextProps {
  children: React.ReactNode
}

export const ServerStatusContext = createContext<ServerStatusContextData>({
  serverStatus: ServerStatus.Unavailable,
  deploying: false,
})

export const ServerStatusContextProvider = ({
  children,
}: ServerStatusContextProps) => {
  const [status, setStatus] = useState<ServerStatus | undefined>(undefined)
  const [deploying, setDeploying] = useState<boolean>(false)

  useEffect(() => {
    let resolved = false
    serverStatusService.getStatus().then((status) => {
      resolved = true
      setStatus(status)
      setDeploying(false)
    })

    setTimeout(() => {
      if (!resolved) setDeploying(true)
    }, 5000)
  }, [])

  return (
    <ServerStatusContext.Provider
      value={{ serverStatus: status, deploying: deploying }}
    >
      {children}
    </ServerStatusContext.Provider>
  )
}

export function useServerStatusContext() {
  return useContext(ServerStatusContext)
}
