import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar/>

        <div className='min-h-screen min-w-screen'>

          {children}
          <Outlet/>
        </div>

        <Footer/>
    </div>
  )
}

export default MainLayout