import { createContext, ReactNode, useContext } from 'react'


interface IProps {
  children: ReactNode
}

interface ILoginParams {
  username: string
  password: string
}

interface ISessionContextData {
  login: (params: ILoginParams) => Promise<void>
  logout: () => Promise<void>
  isLogged: boolean

  userData?: {
    username: string
    nickname: string
    rating: number
  }
}

const sessionContext = createContext<ISessionContextData>({} as ISessionContextData)

export const SessionContextProvider = ({ children }: IProps) => {


  return <sessionContext.Provider value={{} as ISessionContextData}>
    {children}
  </sessionContext.Provider>
}

export function useSessionContext() {
  return useContext(sessionContext)
}