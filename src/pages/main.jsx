import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes} from '../routes'
import {ThemeProvider} from 'styled-components'
import colors from '../styles/theme'
import GlobalStyle from '../styles/globalStyles'
import { AuthProvider } from '../hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {colors}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
        
      </AuthProvider>  
    
      
    </ThemeProvider>
  </React.StrictMode>,
)
