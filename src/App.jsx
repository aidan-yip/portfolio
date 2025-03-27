import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work_One from './pages/Work_One'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work_One />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App