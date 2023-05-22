import { createContext, useRef, useState, useContext } from 'react'
import { gameService } from '../services/GameService'
import { Choice, GameState } from '../utils/types'

interface GameContextProps {
  children: React.ReactNode
}

export interface GameContextData {
  gameState: GameState
  activeGame: boolean
  playerId: string
  setGameByPlayerId(playerId: string): Promise<void>
  choose(choice: Choice): Promise<void>
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

  async function beginSyncState() {
    const state = await gameService.getGameState(playerId.current)
    setGameState(state)
    if (!state.finished)
      refreshTimeoutId.current = setTimeout(beginSyncState, 20)
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
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => useContext(GameContext)
