import ReactDOM from 'react-dom/client'
import App from './App'
import { ServerStatusContextProvider } from './contexts/ServerStatusContext'
import { SessionContextProvider } from './contexts/AuthContext'
import { QueueContextProvider } from './contexts/QueueContext'
import { GameProvider } from './contexts/GameContext'
import { ModalProvider } from './contexts/ModalContext'

const root = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(root).render(
  <ServerStatusContextProvider>
    <SessionContextProvider>
      <GameProvider>
        <QueueContextProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </QueueContextProvider>
      </GameProvider>
    </SessionContextProvider>
  </ServerStatusContextProvider>
)
