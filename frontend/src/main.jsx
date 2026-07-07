import { StrictMode } from 'react'
import { ThemeProvider } from 'next-themes'
import { createRoot } from 'react-dom/client'
import ThemeToggle from './utils/ThemeToggle.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeToggle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
