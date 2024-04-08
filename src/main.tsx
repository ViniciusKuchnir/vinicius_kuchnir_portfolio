import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/global.css';
import { ThemeProvider } from './contexts/theme-provider.tsx';
import '@/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='@User:Theme'>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
