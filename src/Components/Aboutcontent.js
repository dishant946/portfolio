import { Link } from 'react-router-dom';
import './Aboutcontent.css';
import React from 'react';
import stack1 from '../assests/stack1.png'
import stack2 from '../assests/stack2.png'
import stack3 from '../assests/stack3.png'
import stack4 from '../assests/stack4.png';

function Aboutcontent() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am a Mern Stack Developer with problem solving skills.
            Intermidiate in Data Structure and algorithms. Practice on Leetcode,codechef.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top1'>
                    <img src={stack1} alt="" className='img'/>
                </div>
                <div className='img-stack top2'>
                    <img src={stack2} alt="" className='img'/>
                </div>
                <div className='img-stack top3'>
                    <img src={stack3} alt="" className='img'/>
                </div>
                <div className='img-stack top4'>
                    <img src={stack4} alt="" className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent