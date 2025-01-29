/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Component/Hero/Hero.jsx'
import Navbar from '../Component/Navbar/Navbar.jsx'
import Text from '../Component/Text/Offer.jsx'
import Sofa from '../Component/Categrid/Sofa.jsx'
import Best_seller from '../Component/Categrid/Best_seller.jsx'
import Testimonials from '../Component/Testimonial/Testimonial.jsx'
import About from '../Component/About/About.jsx'
import Extra from '../Component/Extras/Extra.jsx'
import Mattres from '../Component/Categrid/Mattres.jsx'
import Service from '../Component/Text/Serviceline.jsx'
import Logoslider from '../Component/Text/logoslider.jsx'
import Footer from '../Component/Footer/Footer.jsx'
const Homepage = () => {
  return (
    <>
      <Text />
      <Navbar />
      <Extra />
      <Service />
      <Mattres />
      <Logoslider />
      <Sofa />
      <Best_seller />
      <Testimonials />
      <About />
      <Footer />
    </>
  )
}

export default Homepage