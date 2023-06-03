import './HeroImage3.css';
import React from 'react';

function HeroImage3(props) {
  return (
    <>
    <div className='hero-img2'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
    </>
  )
}

export default HeroImage3;