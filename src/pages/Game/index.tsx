import { useGameContext } from '../../contexts/GameContext'
import { Choice, MatchResult } from '../../utils/types'
import { useMemo, useState } from 'react'
import {
  Button,
  Card,
  CardDeck,
  ChatBoxOld,
  MobileFlexContainer,
  PlayerId,
} from './styles'
import DesktopPlayerBanner from './components/PlayerBanner/Desktop'
import { Input } from '@chakra-ui/react'
import ChatBox from './components/ChatBox'
import MobilePlayerBanner from './components/PlayerBanner/Mobile'

const allChoices: Choice[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const oponentResultMap: { [key: string]: MatchResult } = {
  victory: 'defeat',
  defeat: 'victory',
  draw: 'draw',
  null: null,
}

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

  if (window.innerWidth >= 600)
    return (
      <div>
        <DesktopPlayerBanner
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
        <ChatBox
          messages={gameState.chat}
          pos="absolute"
          top="50%"
          left="2rem"
          transform="translateY(-50%)"
        ></ChatBox>
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
        <DesktopPlayerBanner
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
        <MobilePlayerBanner
          nickname={gameState.oponent.nickname || 'Anônimo'}
          rating={gameState.oponent.rating}
          time={gameState.oponent.remainingTime}
          style={{ top: '2rem' }}
          result={oponentResultMap[gameState.result || 'null']}
        />
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
        <MobilePlayerBanner
          nickname={gameState.player.nickname || 'Você'}
          rating={gameState.player.rating}
          time={gameState.player.remainingTime}
          style={{ top: '2rem' }}
          result={gameState.result}
        />

        {import.meta.env.DEV && (
          <PlayerId>
            <span style={{ userSelect: 'none' }}>PlayerID: </span>
            {playerId}
          </PlayerId>
        )}
      </MobileFlexContainer>
    )
}
