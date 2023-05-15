import { SessionContextProvider } from './contexts/AuthContext'
import { QueueContextProvider } from './contexts/QueueContext'
import { ServerStatusContextProvider } from './contexts/ServerStatusContext'
import GlobalStyles from './GlobalStyles'
import Index from './pages'
import SignInPage from './pages/SignIn'
import { ServerStatus } from './services/ServerStatusService'

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
