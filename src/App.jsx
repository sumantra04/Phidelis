import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LenisProvider from './components/LenisProvider'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import TechnologyPage from './pages/TechnologyPage'
import SolutionsPage from './pages/SolutionsPage'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
        </Routes>
      </LenisProvider>
    </BrowserRouter>
  )
}
