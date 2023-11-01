import React from 'react'
import ReactDOM from 'react-dom/client'

import {ThemeProvider} from 'styled-components'
import colors from '../styles/theme'
import GlobalStyle from '../styles/globalStyles'
import { Routes } from '../routes'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {colors}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
