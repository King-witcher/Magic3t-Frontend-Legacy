import { Choice } from '@/utils/types'
import { useEffect, useRef } from 'react'
import { Socket, io } from 'socket.io-client'

export function useGameConnection(token: string | null) {
  const socketRef = useRef<Socket>()

  function makeChoice(choice: Choice) {
    if (!socketRef.current) {
      throw new Error('Socket is not defined')
    }

    socketRef.current.emit('choice', choice)
  }

  useEffect(() => {
    if (socketRef.current) socketRef.current.disconnect()

    if (token) {
      socketRef.current = io(`${import.meta.env.VITE_API_URL}/game`, {
        auth: { token },
      })
    } else {
      socketRef.current = undefined
    }
  }, [token])

  return {
    makeChoice,
  }
}
