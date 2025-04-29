import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Store } from './api/store/store.jsx'

createRoot(document.getElementById('root')).render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>
)
