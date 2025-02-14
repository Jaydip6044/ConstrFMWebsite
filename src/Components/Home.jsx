import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Projects from './Projects'
import Clients from './Clients'
import Contacts from './Contacts'
import Footer from './Footer'

function Home() {
  return (
<>
      <Navbar/>
      <Hero/>
      <Services />
      <About />
      <Projects />
      <Clients />
      <Contacts />
      <Footer />
    </>
  )
}

export default Home;
