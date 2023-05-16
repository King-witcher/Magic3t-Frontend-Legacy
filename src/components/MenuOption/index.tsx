import { useEffect, useState } from 'react'
import { Container } from './style'
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
  const { queueEnterTime } = useQueueContext()

  useEffect(() => {
    const interval = setInterval(() => {
      if (searching) {
        const queueTime = (Date.now() - queueEnterTime) / 1000
        const timeSecs = queueTime % 60
        const timeMins = queueTime / 60
        const text = `${timeMins.toFixed(0)}:${timeSecs
          .toFixed(0)
          .padStart(2, '0')}`
        setTimeText(text)
      }
    }, 200)
  }, [searching])

  return (
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
  )
}

export default MenuOption
