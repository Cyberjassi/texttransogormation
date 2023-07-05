import React from 'react'
import '../App.css'; // Adjust the path based on your file structure

import PropTypes from 'prop-types'//short key = impt

export default function Navbar(props) {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" id='textnav' href="#">Text Transformation</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

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
