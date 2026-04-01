import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'mdbootstrap/css/bootstrap.css'
import 'mdbootstrap/css/mdb.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
     <App />
   </BrowserRouter>
  </StrictMode>,
)
