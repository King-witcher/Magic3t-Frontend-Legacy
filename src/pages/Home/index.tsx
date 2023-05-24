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
    </Body>
  )
}

export default Home
