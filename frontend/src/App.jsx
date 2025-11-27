// pages
import HomePage from './pages/HomePage'
import AnalysisPage from './pages/AnalysisPage'

// reactrouterdom
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="flex items-center justify-center text-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
