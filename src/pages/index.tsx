import Header from '../components/Header'
import MenuOption from '../components/MenuOption'
import { useQueueContext } from '../contexts/QueueContext'
import { useServerStatusContext } from '../contexts/ServerStatusContext'
import { QueueMode, queueService } from '../services/QueueService'
import { ServerStatus } from '../services/ServerStatusService'
import { Body, MainContainer, UnavailableLabel } from './style'

const Home = () => {
  const { enterQueue } = useQueueContext()
  const { serverStatus } = useServerStatusContext()

  return (
    <MainContainer>
      <Header />
      <Body>
        {serverStatus === ServerStatus.Available && (
          <>
            <MenuOption
              title="Partida rápida"
              background="images/menu/galois.jpg"
              onClick={() => {
                enterQueue(QueueMode.Casual)
              }}
            />
            <MenuOption
              disabled
              title="Partida ranqueada"
              background="images/menu/elo.jpg"
              onClick={() => {
                alert(1)
              }}
            />
            <MenuOption
              disabled
              title="Personalizada"
              background="images/menu/schonfinkel.jpg"
              onClick={() => {
                alert(1)
              }}
            />
          </>
        )}
        {serverStatus === ServerStatus.Unavailable && (
          <UnavailableLabel>Servidor indisponível no momento.</UnavailableLabel>
        )}
      </Body>
    </MainContainer>
  )
}

export default Home
