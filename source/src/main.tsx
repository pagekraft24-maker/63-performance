import { StrictMode } from 'react'
import './i18n'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './fonts.css'
import './remixicon-subset.css'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Vorgerenderte Seiten übernehmen (Hydration) statt neu aufzubauen
if (container.hasChildNodes()) {
  hydrateRoot(container, app, {
    onRecoverableError: () => {},
  })
} else {
  createRoot(container).render(app)
}
