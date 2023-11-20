import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { Heroe } from './Heroe'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Heroe/>
    </BrowserRouter>
  </React.StrictMode>,

)
