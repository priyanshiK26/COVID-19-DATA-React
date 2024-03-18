import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./output.css"
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeOptions } from './theme.js'

const theme = createTheme(themeOptions)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
