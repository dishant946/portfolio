import './Contactform.css';
import React from 'react'
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contactform() {

  const handleSubmit=(e)=>{
    e.preventDefault();
    toast("Message send successfully");
  }
  return (
    <>
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here'></textarea>
            <button className='btn' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Contactform;