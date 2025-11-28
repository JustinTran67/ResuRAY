// pages
import HomePage from './pages/HomePage'
import AnalysisPage from './pages/AnalysisPage'
// reactrouterdom
import { Routes, Route } from 'react-router-dom'
// assets
import GithubLogo from './assets/GithubLogo.jsx';
import LinkedInLogo from './assets/LinkedInLogo.jsx';
import InstagramLogo from './assets/InstagramLogo.jsx';

function App() {

  return (
    <div className="font-jakarta">
      <div className="flex items-center justify-center text-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </div>
      <div className="flex items-center justify-center w-screen h-[200px] bg-gray-200">
        <a className="w-8 h-8 m-4" href="https://github.com/JustinTran67" target="_blank" rel="noopener noreferrer"><GithubLogo className="fill-white hover:fill-primary transition duration-200 ease-in-out" /></a>
        <a className="w-8 h-8 m-4" href="https://www.linkedin.com/in/justin-tran-902938355/" target="_blank" rel="noopener noreferrer"><LinkedInLogo className="fill-white hover:fill-primary transition duration-200 ease-in-out" /></a>
        <a className="w-8 h-8 m-4" href="https://www.instagram.com/justin.t.tran/" target="_blank" rel="noopener noreferrer"><InstagramLogo className="fill-white hover:fill-primary transition duration-200 ease-in-out"/></a>
      </div>
    </div>
  )
}

export default App
