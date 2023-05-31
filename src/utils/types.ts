export interface ProfileData {
  nickname: string
  rating: number
}

export type MatchResult = 'victory' | 'defeat' | 'draw' | null

export type Choice = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface Message {
  player: 'player' | 'oponent'
  content: string
  time: number
}

export interface PlayerState {
  nickname: string | null
  rating: number | null
  choices: Choice[]
  remainingTime: number
}

export interface GameState {
  player: PlayerState
  oponent: PlayerState
  result: MatchResult
  turn: 'player' | 'oponent' | null
  finished: boolean
  triple: [Choice, Choice, Choice]
  chat: Message[]
}
