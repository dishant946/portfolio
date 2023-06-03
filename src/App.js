import React from 'react';
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';
import {Routes,Route} from 'react-router-dom';
import Skills from './routes/Skills';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/project' element={<Project/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/skill' element={<Skills/>}/>
    </Routes>
    </>
  );
}

export default App;
