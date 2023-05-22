import { useEffect, useState } from 'react'
import { CancelButton, Container, OuterContainer } from './style'
import { useQueueContext } from '../../contexts/QueueContext'

interface MenuOptionProps {
  title?: string
  background?: string
  onClick?: () => void
  disabled?: boolean
  searching?: boolean
}

const MenuOption = ({
  title,
  background,
  disabled,
  onClick,
  searching,
}: MenuOptionProps) => {
  const [timeText, setTimeText] = useState<string | null>(null)
  const { queueEnterTime, exitQueue } = useQueueContext()

  useEffect(() => {
    const interval = setInterval(() => {
      if (searching) {
        setTimeText(getTimeString(Date.now() - queueEnterTime))
      }
    }, 200)
  }, [searching])

  function getTimeString(time: number) {
    const hours = Math.floor(time / 3600000)
    const mins = Math.floor(time / 60000) % 3600
    const secs = Math.floor(time / 1000) % 60
    if (hours) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')}`
    } else {
      return `${mins}:${secs.toString().padStart(2, '0')}`
    }
  }

  return (
    <OuterContainer>
      <Container disabled={disabled} onClick={onClick}>
        <div className="background">
          {background && (
            <img src={background} alt="Background" draggable="false" />
          )}
        </div>
        <div className="footer">{title}</div>
        {searching && <div className="black-filter" />}
        <span className="timespan">{timeText}</span>
      </Container>
      {searching && (
        <CancelButton onClick={exitQueue}>Sair da fila</CancelButton>
      )}
    </OuterContainer>
  )
}

export default MenuOption
