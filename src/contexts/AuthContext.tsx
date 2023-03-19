import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import * as SessionService from '../services/sessionService'


interface IProps {
  children: ReactNode
}

interface ILoginParams {
  username: string
  password: string
}

interface ISessionContextData {
  login(params: ILoginParams): Promise<void>
  logout(): Promise<void>
  isLogged: boolean

  userData?: {
    username: string
    nickname: string
    rating: number
  }
}

const SessionContext = createContext<ISessionContextData>({} as ISessionContextData)

export const SessionContextProvider = ({ children }: IProps) => {

  const [isLogged, setIsLogged] = useState(false)
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))

  async function login({ username, password }: ILoginParams) {
    const dat = await SessionService.login({ username, password })
    console.log(dat)
    if (dat.success) {
      setIsLogged(true)
      setToken(dat.token)
    }
  }

  useEffect(() => {
    if (token)
      localStorage.setItem('token', token)
    else
      localStorage.removeItem('token')
  }, [token])

  useEffect(() => {
    if (token) {
      const sessionData = SessionService.getSessionInfo(token)
      console.log(sessionData)
    }
  }, [])

  async function logout() {
    //a
  }

  return (
    <SessionContext.Provider value={{ login, isLogged, logout }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSessionContext() {
  return useContext(SessionContext)
}