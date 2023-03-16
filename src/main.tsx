import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App, { AppWrapper } from './App'
import './index.css'
import { MyContext } from './context/MyContext'

import { getProject } from "@theatre/core";
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'

studio.extend(extension)
//studio.initialize()



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    <Suspense fallback={null}>
   <AppWrapper/>
   </Suspense>
  </React.StrictMode>,
)
