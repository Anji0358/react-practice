import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.tsx'
import State from "./components/State"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <State />
  </StrictMode>,
)
