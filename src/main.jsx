import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserAuthContextProvider } from './contexts/UserAuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAuthContextProvider>
     <App />
    </UserAuthContextProvider>
    
  </StrictMode>,
)
