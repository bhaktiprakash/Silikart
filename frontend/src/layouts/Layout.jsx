import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'   
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div className='container py-3 m-5'>
        
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout