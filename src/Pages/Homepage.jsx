/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Component/Hero/Hero.jsx'
import Navbar from '../Component/Navbar/Navbar.jsx'
import Text from '../Component/Text/Offer.jsx'
import Cate from '../Component/Categories/Cate.jsx'
import Grid from '../Component/Categrid/Grid.jsx'
import Testimonials from '../Component/Testimonial/Testimonial.jsx'
import About from '../Component/About/About.jsx'
import Form from '../Component/Subcipion/Form.jsx'
const Homepage = () => {
  return (
   <>
   <Navbar />
   <Hero />
   <Text />
   <Cate />
   <Grid />
   <Testimonials />
   <About />
   <Form />
   </>
  )
}

export default Homepage