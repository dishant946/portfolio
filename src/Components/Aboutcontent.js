import { Link } from 'react-router-dom';
import './Aboutcontent.css';
import React from 'react';
import myphoto from '../assests/my2.png';

function Aboutcontent() {
  return (
    <div className="container">
    <h2>Hello from Dishant !!!</h2>
    <div className="resume-item">
      <h3>Experience</h3>
      <p>No professional experience yet.</p>
    </div>
    <div className="resume-item">
      <h3>Education</h3>
      <div className="education-item">
        <h4>Adarsh Vidhayala, Patan</h4>
        <p className="date">2018 - 2020</p>
      </div>
      <div className="education-item">
        <h4>LD college of Engineering, Ahmedabad</h4>
        <p className="degree">Bachelor of Engineering in Information Technology</p>
        <p className="date">2020 - 2024</p>
      </div>
    </div>
  </div>
  )
}

export default Aboutcontent