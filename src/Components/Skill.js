import React from 'react'
import {myskilldata} from './Myskilldata'
import Myskills from './Myskills'
const Skill = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>
            Skills
        </h1>
        <div className='project-container'>
          {myskilldata.map((val,index)=>{
            return(
                <Myskills key={index}
                imgsrc={val.imgsrc}
                name={val.name}
                level={val.level}
                />
            )
          })}
        </div>
    </div>
  )
}

export default Skill