import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import * as SessionService from '../services/sessionService'


interface IProps {
  children: ReactNode
}

interface ILoginParams {
  username: string
  password: string
}

interface UserData {
  nickname: string
}

interface ISessionContextData {
  login(params: ILoginParams): Promise<void>
  logout(): Promise<void>
  isLogged: boolean

  userData: UserData | null
}

const SessionContext = createContext<ISessionContextData>({} as ISessionContextData)

export const SessionContextProvider = ({ children }: IProps) => {

  const [isLogged, setIsLogged] = useState(false)
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
  const [userData, setUserData] = useState<UserData | null>(null)

  // Sincroniza o token do localStorage com o estado
  useEffect(() => {
    if (token)
      localStorage.setItem('token', token)
    else
      localStorage.removeItem('token')
  }, [token])

  // Verifica a sessão relacionada ao token atual.
  useEffect(() => {
    if (token) {
      SessionService.getSessionInfo(token).then(response => {
        // Deleta o token caso não seja mais válido
        if (response.status === 'unauthenticated')
          localStorage.removeItem('token')
        // Armazena informações do usuário
        else {
          setUserData({
            nickname: response.userData.nickname
          })
        }
      })
    }
  }, [])

  async function login({ username, password }: ILoginParams) {
    const dat = await SessionService.login({ username, password })
    console.log(dat)
    if (dat.success) {
      setIsLogged(true)
      setToken(dat.token)
    }
  }

  async function logout() {
    //a
  }

  return (
    <SessionContext.Provider value={{ login, isLogged, logout, userData }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSessionContext() {
  return useContext(SessionContext)
}