import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.tsx'
import Array from "./components06/Array"
import Example from './Example_Modal02'
import Form from './components06/Form'
import Form2 from './components06/Form02'
import Todo from './components06/Todo'
import Style from './components07/Style'
import Style2 from './components07/Style02'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Example />
  </StrictMode>,
)
