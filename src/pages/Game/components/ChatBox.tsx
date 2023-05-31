import { useGameContext } from '../../../contexts/GameContext'
import { Message } from '@/utils/types'
import { Input } from '@chakra-ui/input'
import { Box, BoxProps, Flex } from '@chakra-ui/layout'
import { useEffect, useRef, useState } from 'react'

interface Props extends BoxProps {
  messages: Message[]
}

function ChatBox({ messages, ...rest }: Props) {
  const [message, setMessage] = useState('')
  const { sendMessage } = useGameContext()

  return (
    <Flex
      w="22rem"
      h="18rem"
      backgroundColor="#fff"
      borderRadius="var(--radius)"
      flexDirection="column"
      boxShadow="var(--shadow)"
      padding="1rem"
      gap="1rem"
      {...rest}
    >
      <Flex flex={1} overflow="hidden">
        <Flex
          w="100%"
          h="100%"
          flexDir="column"
          overflowY="auto"
          overflowX="hidden"
          userSelect="text"
        >
          {messages.map((message, index) => {
            return (
              <Box key={index}>
                <span style={{ fontWeight: 500 }}>{message.player}: </span>
                {message.content}
              </Box>
            )
          })}
        </Flex>
      </Flex>
      <Flex flexShrink={0}>
        <Input
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage(message)
              setMessage('')
            }
          }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
      </Flex>
    </Flex>
  )
}

export default ChatBox
