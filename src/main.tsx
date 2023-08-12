import React from 'react'
import ReactDOM from 'react-dom/client'
import { setupDb } from './api/setupDb'
import App from './App.tsx'
import './index.css'

setupDb()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
