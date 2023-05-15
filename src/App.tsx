import { SessionContextProvider } from './contexts/AuthContext'
import { QueueContextProvider } from './contexts/QueueContext'
import { ServerStatusContextProvider } from './contexts/ServerStatusContext'
import GlobalStyles from './GlobalStyles'
import Home from './pages'
import SignInPage from './pages/SignIn'
import { ServerStatus } from './services/ServerStatusService'

function App() {
  return (
    <ServerStatusContextProvider>
      <SessionContextProvider>
        <QueueContextProvider>
          <GlobalStyles />
          <Home />
        </QueueContextProvider>
      </SessionContextProvider>
    </ServerStatusContextProvider>
  )
}

export default App
