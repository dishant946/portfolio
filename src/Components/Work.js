import './Work.css';
import React from 'react';
import imdb from '../assests/imdb.png';
import { NavLink } from 'react-router-dom';
import Workcard from './Workcard';
import { Workcardata } from './Workcardata';
function Work() {
  return (
   <>
   <div className='work-container'>
        <h1 className='project-heading'>
            Projects
        </h1>
        <div className='project-container'>
          {Workcardata.map((val,index)=>{
            return(
                <Workcard key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                />
            )
          })}
        </div>
    </div>
   </>
  )
}

export default Work