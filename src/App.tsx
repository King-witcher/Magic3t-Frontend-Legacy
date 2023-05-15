import { SessionContextProvider } from './contexts/AuthContext'
import { QueueContextProvider } from './contexts/QueueContext'
import GlobalStyles from './GlobalStyles'
import Home from './pages'
import SignInPage from './pages/SignIn'

function App() {
  return (
    <SessionContextProvider>
      <QueueContextProvider>
        <GlobalStyles />
        <Home />
      </QueueContextProvider>
    </SessionContextProvider>
  )
}

export default App
