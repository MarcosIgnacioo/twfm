import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SomewhatForm from './SomewhatForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SomewhatForm />
  </StrictMode>,
)
