import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { sessionService } from '../services/SessionService'
import { ProfileData } from '../utils/types'

interface LoginRequest {
  username: string
  password: string
}

interface IProps {
  children: ReactNode
}

export type SessionData =
  | {
      token: null
      isAuthenticated: false
      profile: null
    }
  | {
      token: string
      isAuthenticated: true
      profile: ProfileData | null
    }

interface ISessionContextData {
  login(params: LoginRequest): Promise<void>
  logout(): Promise<void>
  session: SessionData
  isLoading: boolean
  error: string | null
}

const initialSessionData: SessionData = {
  token: null,
  isAuthenticated: false,
  profile: null,
}

const SessionContext = createContext<ISessionContextData>(
  {} as ISessionContextData
)

export const SessionContextProvider = ({ children }: IProps) => {
  const [session, setSession] = useState<SessionData>(initialSessionData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Verifica a sessão relacionada ao token atual.
  useEffect(() => {
    init()
  }, [])

  // Sincroniza o token do localStorage com o estado
  useEffect(() => {
    if (session.token) localStorage.setItem('token', session.token)
    else localStorage.removeItem('token')
  }, [session.token])

  async function init() {
    const token = localStorage.getItem('token')
    if (token) {
      const profile: ProfileData | null = null
      const isAuth = await sessionService.isAuthenticated(token)

      if (!isAuth) {
        localStorage.removeItem('token')
        setSession({
          isAuthenticated: false,
          profile: null,
          token: null,
        })
        return
      }

      setSession({
        isAuthenticated: true,
        profile,
        token,
      })

      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }

  async function signIn({ username, password }: LoginRequest) {
    if (session.isAuthenticated) {
      return
    }
    const response = await sessionService.signIn(username, password)
    if (response.statusCode === 200) {
      await fetchUserData(response.token)
      setError(null)
    } else {
      setError('Não foi possível iniciar sessão.')
    }
  }

  async function fetchUserData(token: string | undefined) {
    if (!token) {
      setSession({
        isAuthenticated: false,
        token: null,
        profile: null,
      })
    } else {
      const auth = await sessionService.isAuthenticated(token)
      if (auth)
        setSession({
          isAuthenticated: true,
          token,
          profile: null,
        })
      else
        setSession({
          isAuthenticated: false,
          token: null,
          profile: null,
        })
    }
  }

  async function logout() {
    //a
  }

  return (
    <SessionContext.Provider
      value={{ login: signIn, logout, session, isLoading, error }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export function useSessionContext() {
  return useContext(SessionContext)
}
