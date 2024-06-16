import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from './components/LandingPAge/LandingPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
