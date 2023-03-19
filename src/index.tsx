import ReactDOM from 'react-dom/client'
import App from './App'
import './services/server'

const root = document.getElementById('root') as HTMLElement

console.log(process.env)

ReactDOM.createRoot(root).render(
  <App />
)