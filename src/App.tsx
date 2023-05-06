import { SessionContextProvider } from './contexts/AuthContext'
import GlobalStyles from './GlobalStyles'
import Home from './pages'
import SignInPage from './pages/SignIn'

function App() {
  return (
    <SessionContextProvider>
      <GlobalStyles />
      <Home />
    </SessionContextProvider>
  )
}

export default App
