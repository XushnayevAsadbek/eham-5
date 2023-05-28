import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import {AuthProvider} from './context/auth.jsx'
import { Provider as ReduxProvider } from 'react-redux'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter >
    <AuthProvider >

    <App />
    </AuthProvider>
    
    
    </BrowserRouter>
)
