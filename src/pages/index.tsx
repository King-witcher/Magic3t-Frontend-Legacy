import Header from '../components/Header'
import { useGameContext } from '../contexts/GameContext'
import { useQueueContext } from '../contexts/QueueContext'
import { useServerStatusContext } from '../contexts/ServerStatusContext'
import { ServerStatus } from '../services/ServerStatusService'
import Game from './Game'
import Home from './Home'
import Queue from './Queue'
import { Center, MainContainer, PageContainer, UnavailableLabel } from './style'

const Index = () => {
  const { serverStatus } = useServerStatusContext()
  const { queueMode } = useQueueContext()
  const { activeGame } = useGameContext()

  return (
    <MainContainer>
      <Header />
      <PageContainer>
        {serverStatus === ServerStatus.Available &&
          (queueMode ? <Queue /> : activeGame ? <Game /> : <Home />)}
        {serverStatus === ServerStatus.Unavailable && (
          <Center>
            <UnavailableLabel>
              Servidor indisponível no momento.
            </UnavailableLabel>
          </Center>
        )}
      </PageContainer>
    </MainContainer>
  )
}

export default Index
