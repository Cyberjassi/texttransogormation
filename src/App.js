import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import { useState } from 'react';

function App() {
  return (
   <div className='container'>
  <Navbar title="Textutils"/>
  <div className="container my-3">
    <Textform heading="Enter the Text to Analyze"/>
  </div>
  
   </div>
  );
  }
    
  

export default App;
