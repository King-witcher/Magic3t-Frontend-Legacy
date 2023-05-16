import { useEffect, useState } from 'react'
import MenuOption from '../../components/MenuOption'
import { useQueueContext } from '../../contexts/QueueContext'
import { useServerStatusContext } from '../../contexts/ServerStatusContext'
import { QueueMode } from '../../services/QueueService'
import { ServerStatus } from '../../services/ServerStatusService'
import { Body } from './styles'

const Queue = () => {
  const { serverStatus } = useServerStatusContext()
  const { exitQueue, queueMode, queueEnterTime: queueTime } = useQueueContext()
  const [time, setTime] = useState('0')

  useEffect(() => {
    const interval = setInterval(() => {
      const time = (Date.now() - queueTime) / 1000
      setTime(time.toFixed(0))
    }, 200)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Body>
      {queueMode === QueueMode.Casual && (
        <MenuOption
          title="Partida rápida"
          background="images/menu/galois.jpg"
          searching
        />
      )}
      {queueMode === QueueMode.Paired && (
        <MenuOption
          disabled
          title="Partida ranqueada"
          background="images/menu/elo.jpg"
        />
      )}
      {queueMode === QueueMode.Ranked && (
        <MenuOption
          disabled
          title="Personalizada"
          background="images/menu/schonfinkel.jpg"
        />
      )}
    </Body>
  )
}

export default Queue
