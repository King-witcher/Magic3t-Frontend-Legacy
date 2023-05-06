import ReactDOM from 'react-dom/client'
import App from './App'
import React from 'react'

console.log(import.meta.env)

const root = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
