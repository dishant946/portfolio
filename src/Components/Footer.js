import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
                    <div>
                        <p>209, E-block Hostel , LD college of Engineering</p>
                        <p>Opp Gujarat University, Navrangpura</p>
                        <p>Ahmedabad</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/> 
                +91-9313030081</h4>
                </div>
                <div className='email'>
                    <h4>
                <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/> 
                dishantsoni@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>I am Dishant Soni . Currently I am a 3rd year Student at LDCE,Ahmedabad.I am open to work with startups. I am very passionate and enthusiastic about the MERN (mongodb , expressjs , reactjs ,nodejs) projects.My aim is to leverage our skills and knowledge to create innovative and robust web applications using this powerful technology stack.</p>
                <div className='social'>
                <FaFacebook size={20} style={{color:"white",marginRight:"1rem"}}/>   
                <FaTwitter size={20} style={{color:"white",marginRight:"1rem"}}/>   
                <FaLinkedin size={20} style={{color:"white",marginRight:"1rem"}}/>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer