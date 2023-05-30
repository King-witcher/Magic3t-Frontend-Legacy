import { CSSProperties } from 'react'
import { Container } from './styles'

interface Props {
  nickname: string | null
  rating: number | null
  time: number
  result: 'victory' | 'draw' | 'defeat' | null
  style?: CSSProperties
}

export default function PlayerBanner({
  nickname,
  rating,
  time,
  style,
  result,
}: Props) {
  const colorMap = {
    victory: '#0ecf5f',
    defeat: '#e01c3a',
    draw: '#aaa',
    null: '#fff',
  }

  const timeColor = time > 5999 ? '#000' : '#b13'

  function getTimeString() {
    if (time > 1000) {
      const mins = Math.floor(time / 60000)
      const secs = Math.floor(time / 1000) % 60
      return `${mins}:${secs.toString().padStart(2, '0')}`
    } else {
      return (time / 1000).toFixed(1)
    }
  }

  return (
    <Container style={style} borderColor={colorMap[result || 'null']}>
      <div className="player-data">
        <div className="nickname">{nickname || 'Anônimo'}</div>
        <div className="rating">{rating || '[Rating desconhecido]'}</div>
      </div>
      <div className="timer" style={{ color: timeColor }}>
        {getTimeString()}
      </div>
    </Container>
  )
}
