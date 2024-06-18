import React from 'react'
import Navbar from '../Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

const LandingPage = () => {
  return (
    <div className="d-flex flex-column h-100">
      <Navbar/>
      <div className="container-fluid">
        <div className="row flex-grow-1">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

