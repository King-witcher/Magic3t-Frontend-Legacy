import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyles from './GlobalStyles'
import { SessionContextProvider } from './contexts/AuthContext'
import { GameProvider } from './contexts/GameContext'
import { QueueContextProvider } from './contexts/QueueContext'
import { ServerStatusContextProvider } from './contexts/ServerStatusContext'
import Index from './pages'
import { ModalProvider } from './contexts/ModalContext'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
])

function App() {
  return (
    <ServerStatusContextProvider>
      <SessionContextProvider>
        <GameProvider>
          <QueueContextProvider>
            <ChakraProvider>
              <ModalProvider>
                <GlobalStyles />
                <RouterProvider router={router} />
              </ModalProvider>
            </ChakraProvider>
          </QueueContextProvider>
        </GameProvider>
      </SessionContextProvider>
    </ServerStatusContextProvider>
  )
}

export default App
