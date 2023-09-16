import { createContext, useRef, useState, useContext, useEffect } from 'react'
import { Choice, GameState } from '../utils/types'
import { Socket, io } from 'socket.io-client'

interface GameContextProps {
  children: React.ReactNode
}

type GameState {
  playerChoices: Choice[]
  oponentChoices: Choice[]
}

export interface GameContextData {
  gameState: GameState
  isConnected: boolean
  activeGame: boolean
  connectGame(token: string): Promise<void>
  makeChoice(choice: Choice): Promise<void>
  sendMessage(message: string): Promise<void>
}

const GameContext = createContext<GameContextData>({} as GameContextData)

export function GameProvider({ children }: GameContextProps) {
  const [gameState, setGameState] = useState<GameState>({} as GameState)
  const [isActive, setIsActive] = useState(false)
  const socketRef = useRef<Socket>()

  async function connectGame(token: string) {
    const client = io(import.meta.env.VITE_API_URL + '/game', {
      auth: { token },
    })
    socketRef.current = client
    setIsActive(true)
    client.on('disconnect', () => {
      socketRef.current = undefined
      setIsActive(false)
    })
    client.on('gameState', (state) => {
      setGameState(state)
    })
  }

  async function makeChoice(choice: Choice) {
    if (!socketRef.current) return
    socketRef.current.emit('choice', choice)
  }

  async function sendMessage(): Promise<void> {}

  async function choose(value: Choice) {
    //await gameService.choose(playerId.current, value)
  }

  useEffect(() => {}, [])

  return (
    <GameContext.Provider
      value={{
        gameState: gameState,
        activeGame: isActive,
        isConnected: false,
        connectGame,
        makeChoice,
        sendMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => useContext(GameContext)
