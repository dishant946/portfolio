import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Aboutcontent from '../Components/Aboutcontent';
import HeroImage3 from '../Components/HeroImage3';
import HeroImage2 from '../Components/HeroImage2';
function About() {
  return (
    <>
    <Navbar/>
    <HeroImage3 heading="About" text="I am a friendly Full Stack Developer"/>
    <Aboutcontent/>
    <Footer/>
    </>
  )
}

export default About