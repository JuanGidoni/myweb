import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './infrastructure/views'
import './infrastructure/views/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
