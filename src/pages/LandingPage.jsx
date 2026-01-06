import React from 'react'



import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'


const LandingPage = () => {
  return (
    <div>
     {/* <NavBar/> */}
      <Hero/>
      <Features/>
      <Testimonials/>
      <CallToAction/>
      {/* <Footer/> */}
    </div>
  )
}

export default LandingPage