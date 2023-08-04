import React from 'react'
import '../App.css'; // Adjust the path based on your file structure

import PropTypes from 'prop-types'//short key = impt

export default function Navbar(props) {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" id='textnav' href="#">Text Transformation</a>
  
    

</nav>


    </div>
  )
}

//ye check karne ke liye ki ham app.js me sahi type ka parameter pass kar rahe hai na 
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    abouttext:PropTypes.string
}

//ye default agar ham koi bhi props pass ni karenge app.js me to ye default rahega
Navbar.defaultProps = {
    title:'set defulat title',
    abouttext:'about defualt here'
}
