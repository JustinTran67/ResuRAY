import { createRoot } from 'react-dom/client'
import './index.css'
import ScrollToTop from './hooks/ScrollToTop.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
