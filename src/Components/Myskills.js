import React from 'react'
import './MySkills.css';

const Myskills = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='image'/>
    <h2 className='project-title'>{props.name}</h2>
    <div className='pro-details'>
    <p>{props.level}</p>
    </div>
</div>
  )
}

export default Myskills;