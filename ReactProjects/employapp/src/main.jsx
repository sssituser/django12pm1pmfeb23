import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'mdbootstrap/css/bootstrap.css'
import 'mdbootstrap/css/mdb.css'
import '@fortawesome/fontawesome-free/css/all.css'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </StrictMode>,
)
