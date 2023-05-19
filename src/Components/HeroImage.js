import './HeroImage.css';
import React from 'react'
import IntroImage from '../assests/intro.jpg'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect'
function HeroImage() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImage} alt="image"/>

        </div>
        <div className='content'>
          <p>HI , I am Dishant</p>
          <h1><Typewriter
          options={{
            autoStart:true,
            loop:true,
            delay:40,
            strings:[
              "Mern Stack Developer",
              "Competitive Coding",
              "DSA Enthusiast",
              "Freelancer"
            ]
          }}
          /></h1>
          <div>
            <Link to='/project' className='btn'>PROJECTS</Link>
            <Link to='/contact' className='btn btn-light'>CONTACT</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImage