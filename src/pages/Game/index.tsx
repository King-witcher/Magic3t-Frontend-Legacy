import { useGameContext } from '../../contexts/GameContext'
import { Choice } from '../../utils/types'
import { useMemo } from 'react'
import { Card, CardDeck, PlayerBanner, PlayerId } from './styles'

export default function Game() {
  const { gameState, playerId, choose } = useGameContext()
  const available = useMemo(
    () =>
      [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((value) => {
        return (
          gameState.player.choices.indexOf(value as Choice) === -1 &&
          gameState.oponent.choices.indexOf(value as Choice) === -1
        )
      }),
    [gameState]
  )

  const playerTimeSecs = (gameState.player.remainingTime / 1000).toFixed(0)
  const oponentTimeSecs = (gameState.oponent.remainingTime / 1000).toFixed(0)

  return (
    <div>
      <br />
      <PlayerBanner style={{ top: '2rem' }}>
        <div className="player-data">
          <div className="nickname">
            {gameState.oponent.nickname || 'Anônimo'}
          </div>
          <div className="rating">
            {gameState.oponent.rating || '[Rating desconhecido]'}
          </div>
        </div>
        <div
          className="timer"
          style={{ color: oponentTimeSecs === '0' ? '#f00' : '#333' }}
        >
          {oponentTimeSecs}
        </div>
      </PlayerBanner>
      <CardDeck style={{ top: '2rem' }}>
        {gameState.oponent.choices.map((choice) => {
          return <Card key={choice}>{choice}</Card>
        })}
      </CardDeck>
      <CardDeck style={{ top: '50%', transform: 'translateY(-50%)' }}>
        {available.map((choice) => {
          return (
            <Card
              key={choice}
              onClick={() => {
                choose(choice as Choice)
              }}
            >
              {choice}
            </Card>
          )
        })}
      </CardDeck>
      <CardDeck style={{ bottom: '2rem' }}>
        {gameState.player.choices.map((choice) => {
          return <Card key={choice}>{choice}</Card>
        })}
      </CardDeck>
      <PlayerBanner style={{ bottom: '2rem' }}>
        <div className="player-data">
          <div className="nickname">{gameState.player.nickname || 'Você'}</div>
          <div className="rating">
            {gameState.player.rating || '[Rating desconhecido]'}
          </div>
        </div>
        <div className="timer">{playerTimeSecs}</div>
      </PlayerBanner>
      {import.meta.env.DEV && (
        <PlayerId>
          <span style={{ userSelect: 'none' }}>PlayerID: </span>
          {playerId}
        </PlayerId>
      )}
    </div>
  )
}
