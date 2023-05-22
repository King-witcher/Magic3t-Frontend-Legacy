export interface ProfileData {
  nickname: string
  rating: number
}

export type Choice = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface PlayerState {
  nickname: string | null
  rating: number | null
  choices: Choice[]
  remainingTime: number
}

export interface GameState {
  player: PlayerState
  oponent: PlayerState
  result: 'victory' | 'defeat' | 'draw' | null
  turn: 'player' | 'oponent' | null
  finished: boolean
}
