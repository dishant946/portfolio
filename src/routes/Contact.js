import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImage2 from '../Components/HeroImage2';
import Contactform from '../Components/Contactform';
function Contact() {
  return (
    <>
    <Navbar/>
    <HeroImage2 heading="Contact" text="Let's have a chat"/>
    <Contactform/>
    <Footer/>
    </>
  )
}

export default Contact