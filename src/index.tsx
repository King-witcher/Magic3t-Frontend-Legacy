import ReactDOM from 'react-dom/client'
import App from './App'
import { ServerStatusContextProvider } from './contexts/ServerStatusContext'
import { SessionContextProvider } from './contexts/AuthContext'
import { QueueContextProvider } from './contexts/QueueContext'
import { GameProvider } from './contexts/GameContext'

const root = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(root).render(
  <ServerStatusContextProvider>
    <SessionContextProvider>
      <GameProvider>
        <QueueContextProvider>
          <App />
        </QueueContextProvider>
      </GameProvider>
    </SessionContextProvider>
  </ServerStatusContextProvider>
)
