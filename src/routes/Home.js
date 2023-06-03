import React from 'react'
import Navbar from '../Components/Navbar';
import HeroImage from '../Components/HeroImage';
import Footer from '../Components/Footer';
import Work from '../Components/Work';
import Skill from '../Components/Skill';
function Home() {
  return (
    <>
    <Navbar/>
    <HeroImage/>
    <Work/>
    <Skill/>
    <Footer/>
    </>
  )
}

export default Home