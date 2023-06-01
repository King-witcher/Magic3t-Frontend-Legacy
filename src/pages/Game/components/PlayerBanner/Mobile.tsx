import { CSSProperties } from 'react'
import { Container } from './styles'
import { Flex } from '@chakra-ui/react'

interface Props {
  nickname: string | null
  rating: number | null
  time: number
  result: 'victory' | 'draw' | 'defeat' | null
  style?: CSSProperties
}

export default function MobilePlayerBanner({
  nickname,
  rating,
  time,
  style,
  result,
}: Props) {
  const borderColorMap = {
    victory: '#0ecf5f',
    defeat: '#e01c3a',
    draw: '#aaa',
    null: '#fff',
  }

  const fontColorMap = {
    victory: '#0ecf5f',
    defeat: '#e01c3a',
    draw: '#555',
    null: '#000',
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
    <Flex
      rounded="8px"
      p="0.5rem 1rem"
      boxShadow="var(--shadow)"
      alignItems="center"
      justifyContent="space-between"
      bg="white"
      boxSizing="border-box"
      h="3rem"
      borderWidth="3px"
      borderColor={borderColorMap[result || 'null']}
      style={style}
      transition="all 700ms linear"
    >
      <Flex fontSize="0.8rem" color={fontColorMap[result || 'null']}>
        {rating || '1500 SR'} - {nickname || 'Giuseppe'}
      </Flex>
      <Flex fontSize="1.2rem" color={timeColor}>
        {getTimeString()}
      </Flex>
    </Flex>
  )
}
