import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RoutingArea from './Routes/RoutingArea.jsx'

createRoot(document.getElementById('root')).render(
  <RoutingArea/>
)
