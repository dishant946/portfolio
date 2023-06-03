import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImage2 from '../Components/HeroImage2';
import Work from '../Components/Work';
import HeroImage3 from '../Components/HeroImage3';
import HeroImage from '../Components/HeroImage';
function Project() {
  return (
    <>
    <Navbar/>
    <HeroImage2 heading="PROJECTS" text="Some of my most recent works"/>
    <Work/>
    <Footer/>
    </>

  )
}

export default Project