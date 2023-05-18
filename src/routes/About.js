import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImage2 from '../Components/HeroImage2';
import Aboutcontent from '../Components/Aboutcontent';
function About() {
  return (
    <>
    <Navbar/>
    <HeroImage2 heading="About" text="I am a friendly Full Stack Developer"/>
    <Aboutcontent/>
    <Footer/>
    </>
  )
}

export default About