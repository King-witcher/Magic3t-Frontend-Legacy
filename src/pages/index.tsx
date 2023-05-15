import Header from '../components/Header'
import MenuOption from '../components/MenuOption'
import { useQueueContext } from '../contexts/QueueContext'
import { QueueMode, queueService } from '../services/QueueService'
import { Body, MainContainer } from './style'

const Home = () => {
  const { enterQueue } = useQueueContext()

  return (
    <MainContainer>
      <Header />
      <Body>
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
      </Body>
    </MainContainer>
  )
}

export default Home
