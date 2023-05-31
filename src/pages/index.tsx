import { Center, Flex } from '@chakra-ui/react'
import Header from '../components/Header'
import { useGameContext } from '../contexts/GameContext'
import { useQueueContext } from '../contexts/QueueContext'
import { useServerStatusContext } from '../contexts/ServerStatusContext'
import { ServerStatus } from '../services/ServerStatusService'
import Game from './Game'
import Home from './Home'
import Queue from './Queue'
import { PageContainer, Spinner, UnavailableLabel } from './style'

const Index = () => {
  const { serverStatus, deploying } = useServerStatusContext()
  const { queueMode } = useQueueContext()
  const { activeGame } = useGameContext()

  return (
    <Flex direction="column" w="100vw" h="100dvh">
      <Header />
      <PageContainer>
        {serverStatus === ServerStatus.Available &&
          (queueMode ? <Queue /> : activeGame ? <Game /> : <Home />)}
        <Center>
          {serverStatus === ServerStatus.Unavailable && (
            <UnavailableLabel>
              Servidor indisponível no momento.
            </UnavailableLabel>
          )}
          {deploying && (
            <div
              style={{ textAlign: 'center', color: '#444', fontSize: '0.9rem' }}
            >
              Parece que o servidor foi hibernado devido à inatividade e está
              sendo religado.
              <br />
              Isso geralmente leva cerca de três minutos.
            </div>
          )}
          {serverStatus === undefined && <Spinner />}
        </Center>
      </PageContainer>
    </Flex>
  )
}

export default Index
