import { createContext, useRef, useState, useContext } from 'react'
import { gameService } from '../services/GameService'
import { Choice, GameState } from '../utils/types'
import { all } from 'axios'

interface GameContextProps {
  children: React.ReactNode
}

export interface GameContextData {
  gameState: GameState
  activeGame: boolean
  playerId: string
  setGameByPlayerId(playerId: string): Promise<void>
  choose(choice: Choice): Promise<void>
  sendMessage(message: string): Promise<void>
}

const GameContext = createContext<GameContextData>({} as GameContextData)

export function GameProvider({ children }: GameContextProps) {
  const [gameState, setGameState] = useState<GameState>({} as GameState)
  const [isActive, setIsActive] = useState(false)
  const playerId = useRef<string>('')
  const refreshTimeoutId = useRef<number>(0)

  async function setGameByPlayerId(value: string) {
    playerId.current = value
    await beginSyncState()
    setIsActive(true)
  }

  function Delay(delay: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, delay)
    })
  }

  async function sendMessage(content: string): Promise<void> {
    await gameService.sendMessage(playerId.current, content)
  }

  async function beginSyncState() {
    const delayPromise = Delay(200)
    const state = await gameService.getGameState(playerId.current)
    setGameState(state)
    await delayPromise
    if (!state.finished) beginSyncState()
  }

  async function choose(value: Choice) {
    await gameService.choose(playerId.current, value)
  }

  return (
    <GameContext.Provider
      value={{
        gameState: gameState,
        activeGame: isActive,
        setGameByPlayerId,
        playerId: playerId.current,
        choose,
        sendMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => useContext(GameContext)
