import React from 'react'
import ReactDOM from 'react-dom/client'

import {ThemeProvider} from 'styled-components'
import colors from '../styles/theme'
import GlobalStyle from '../styles/globalStyles'

import {Login} from './login'
import {Menu} from './menu'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {colors}>
      <GlobalStyle />
      <Menu />
    </ThemeProvider>
  </React.StrictMode>,
)
