import React from 'react'
import { Outlet} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'


const App = () => {
  return (
    <div className="min-h-screen overflow-visible">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App