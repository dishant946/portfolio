import React from 'react'
import Navbar from '../Components/Navbar';
import HeroImage2 from '../Components/HeroImage2';

import Footer from '../Components/Footer';
import Myskills from '../Components/Myskills';
import Skill from '../Components/Skill';
function Skills() {
  return (
    <>
    <Navbar/>
    <HeroImage2 heading="Skills" text="Here is my some Skills" />
    <Skill/>
    <Footer/>
    </>
  )
}

export default Skills;