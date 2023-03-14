import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { AppWrapper } from './App'
import './index.css'
import { MyContext } from './context/MyContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
   <AppWrapper/>
  </React.StrictMode>,
)
