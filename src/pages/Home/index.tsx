import MenuOption from '../../components/MenuOption'
import { useQueueContext } from '../../contexts/QueueContext'
import { useServerStatusContext } from '../../contexts/ServerStatusContext'
import { GameMode } from '../../services/QueueService'
import { Body } from './styles'

const Home = () => {
  const { enterQueue } = useQueueContext()

  return (
    <Body>
      <MenuOption
        title="Partida rápida"
        background="images/menu/galois.jpg"
        onClick={() => {
          enterQueue(GameMode.Casual)
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
  )
}

export default Home
