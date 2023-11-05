import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes} from '../routes'
import {ThemeProvider} from 'styled-components'
import colors from '../styles/theme'
import GlobalStyle from '../styles/globalStyles'
import {New} from './New'
import {Login} from './login'
import {Menu} from './menu'
import { SignUp } from './signUp'
import {ClientRegister} from './clientRegister'

import {AuthProvider} from '../hooks/auth'

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
