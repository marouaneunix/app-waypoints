import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { axiosConfig } from './config/axiosConfig'
import './index.css'


axiosConfig();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>,
)
