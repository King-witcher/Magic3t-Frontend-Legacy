import { Flex } from '@chakra-ui/layout'
import MenuOption from '../../components/MenuOption'
import { useQueueContext } from '../../contexts/QueueContext'
import { GameMode } from '../../services/QueueService'

const Home = () => {
  const { enterQueue } = useQueueContext()

  return (
    <Flex alignItems="center" justifyContent="center" w="100%" h="100%">
      <MenuOption
        title="Partida rápida"
        background="images/menu/galois.jpg"
        onClick={() => {
          enterQueue(GameMode.Casual)
        }}
      />
    </Flex>
  )
}

export default Home
