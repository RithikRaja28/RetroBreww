import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from './components/LandingPAge/LandingPage'
import Login from './components/UserAuth/Login'
import Signup from './components/UserAuth/Signup'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
