import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work_Page from './pages/Work_Page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work_Page />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App