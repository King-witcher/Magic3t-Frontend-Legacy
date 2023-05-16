import { SessionContextProvider } from './contexts/AuthContext'
import { QueueContextProvider } from './contexts/QueueContext'
import { ServerStatusContextProvider } from './contexts/ServerStatusContext'
import GlobalStyles from './GlobalStyles'
import Index from './pages'

function App() {
  return (
    <ServerStatusContextProvider>
      <SessionContextProvider>
        <QueueContextProvider>
          <GlobalStyles />
          <Index />
        </QueueContextProvider>
      </SessionContextProvider>
    </ServerStatusContextProvider>
  )
}

export default App
