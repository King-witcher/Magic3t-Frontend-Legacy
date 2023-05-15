import Header from '../components/Header'
import { useQueueContext } from '../contexts/QueueContext'
import { useServerStatusContext } from '../contexts/ServerStatusContext'
import { ServerStatus } from '../services/ServerStatusService'
import Home from './Home'
import Queue from './Queue'
import { Center, MainContainer, UnavailableLabel } from './style'

const Index = () => {
  const { serverStatus } = useServerStatusContext()
  const { queueMode } = useQueueContext()

  return (
    <MainContainer>
      <Header />
      {serverStatus === ServerStatus.Available &&
        (queueMode ? <Queue /> : <Home />)}
      {serverStatus === ServerStatus.Unavailable && (
        <Center>
          <UnavailableLabel>Servidor indisponível no momento.</UnavailableLabel>
        </Center>
      )}
    </MainContainer>
  )
}

export default Index
