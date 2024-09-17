import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { idProvider } from './context/id.js'

createRoot(document.getElementById('root')).render(
  <>
  <idProvider>
    <App />
    </idProvider>
  </>,
)
