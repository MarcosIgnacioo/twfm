import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import SomewhatForm from './SomewhatForm.tsx'
// import Spacing from './Spacing.tsx'
import SomewhatForm from './SomewhatForm.tsx'
import Peer from './Peer.tsx'
import Groups from './Groups.tsx'
import Announce from './Announce.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Announce />
  </StrictMode>,
)
