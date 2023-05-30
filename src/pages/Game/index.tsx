import { useGameContext } from '../../contexts/GameContext'
import { Choice, MatchResult } from '../../utils/types'
import { useMemo, useState } from 'react'
import {
  Button,
  Card,
  CardDeck,
  ChatBox,
  MobileFlexContainer,
  PlayerBanner as PB,
  PlayerId,
} from './styles'
import PlayerBanner from './PlayerBanner'
import { Input } from '@chakra-ui/react'

const allChoices: Choice[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const oponentResultMap: { [key: string]: MatchResult } = {
  victory: 'defeat',
  defeat: 'victory',
  draw: 'draw',
  null: null,
}

export default function Game() {
  const { gameState, playerId, choose, sendMessage } = useGameContext()
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
  const [message, setMessage] = useState('')

  const playerTimeSecs = (gameState.player.remainingTime / 1000).toFixed(0)
  const oponentTimeSecs = (gameState.oponent.remainingTime / 1000).toFixed(0)

  if (window.innerWidth >= 600)
    return (
      <div>
        <PlayerBanner
          nickname={gameState.oponent.nickname}
          rating={gameState.oponent.rating}
          time={gameState.oponent.remainingTime}
          style={{ top: '2rem' }}
          result={oponentResultMap[gameState.result || 'null']}
        />
        <CardDeck style={{ top: '2rem' }}>
          {gameState.oponent.choices.map((choice) => {
            const isTriple =
              !!gameState.triple && gameState.triple.indexOf(choice) !== -1
            return (
              <Card className={isTriple ? 'winner-triple' : ''} key={choice}>
                {choice}
              </Card>
            )
          })}
        </CardDeck>
        <CardDeck style={{ top: '50%', transform: 'translateY(-50%)' }}>
          {allChoices.map((choice) => {
            let cn = ''
            if (gameState.turn === 'player') cn += ' clickable'
            if (available.indexOf(choice) === -1) cn += ' disappear'
            return (
              <Card
                className={cn}
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
        <ChatBox>
          {gameState.chat.map((message, index) => {
            return (
              <div key={index}>
                <span className="nickname">{message.player}</span>:{' '}
                {message.content}
              </div>
            )
          })}
          <Input
            type="text"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage(message)
                setMessage('')
              }
            }}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
          />
        </ChatBox>
        <CardDeck style={{ bottom: '2rem' }}>
          {gameState.player.choices.map((choice) => {
            const isTriple =
              !!gameState.triple && gameState.triple.indexOf(choice) !== -1
            return (
              <Card className={isTriple ? 'winner-triple' : ''} key={choice}>
                {choice}
              </Card>
            )
          })}
        </CardDeck>
        <PlayerBanner
          nickname={gameState.player.nickname || 'Você'}
          rating={gameState.player.rating}
          time={gameState.player.remainingTime}
          style={{ bottom: '2rem' }}
          result={gameState.result}
        />

        <Button style={{ bottom: '2rem', right: '2rem' }}>Voltar</Button>

        {import.meta.env.DEV && (
          <PlayerId>
            <span style={{ userSelect: 'none' }}>PlayerID: </span>
            {playerId}
          </PlayerId>
        )}
      </div>
    )
  else
    return (
      <MobileFlexContainer>
        <div
          className="player-bar"
          style={{
            border:
              gameState.result === 'defeat'
                ? 'solid 3px #0ecf5f'
                : gameState.result === 'victory'
                ? 'solid 3px #e01c3a'
                : 'none',
          }}
        >
          {gameState.oponent.nickname || 'Anônimo'} |{' '}
          {gameState.oponent.rating || '--'}
        </div>
        <div className="center">
          <CardDeck style={{ top: '1rem' }}>
            {gameState.oponent.choices.map((choice) => {
              const isTriple =
                !!gameState.triple && gameState.triple.indexOf(choice) !== -1
              return (
                <Card className={isTriple ? 'winner-triple' : ''} key={choice}>
                  {choice}
                </Card>
              )
            })}
          </CardDeck>
          <CardDeck style={{ top: '50%', transform: 'translateY(-50%)' }}>
            {allChoices.map((choice) => {
              let cn = ''
              if (gameState.turn === 'player') cn += ' clickable'
              if (available.indexOf(choice) === -1) cn += ' disappear'
              return (
                <Card
                  className={cn}
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
          <CardDeck style={{ bottom: '1rem' }}>
            {gameState.player.choices.map((choice) => {
              const isTriple =
                !!gameState.triple && gameState.triple.indexOf(choice) !== -1
              return (
                <Card className={isTriple ? 'winner-triple' : ''} key={choice}>
                  {choice}
                </Card>
              )
            })}
          </CardDeck>
        </div>
        <div
          className="player-bar"
          style={{
            border:
              gameState.result === 'victory'
                ? 'solid 3px #0ecf5f'
                : gameState.result === 'defeat'
                ? 'solid 3px #e01c3a'
                : 'none',
          }}
        >
          {gameState.player.nickname || 'Você'} |{' '}
          {gameState.player.rating || '--'}
        </div>

        {import.meta.env.DEV && (
          <PlayerId>
            <span style={{ userSelect: 'none' }}>PlayerID: </span>
            {playerId}
          </PlayerId>
        )}
      </MobileFlexContainer>
    )
}
