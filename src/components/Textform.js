//short command - rfc
import React,{useState} from 'react'
import PropTypes from 'prop-types'



export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    // setText("You have clicked on handleUpClick")
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked");
    // setText("You have clicked on handleUpClick")
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () => {
    setText('');
  };
  const handleReverseClick = () => {
    const reversedText = text.split('').reverse().join('');
    setText(reversedText);
  };
  const handleOnChange = (event) =>{
    // console.log("On change")
    setText(event.target.value)
  }
  const handleFirstLaterCapital = () => {
    const capitalizedText = text.replace(/\b\w/g, (match) => match.toUpperCase());
    setText(capitalizedText);
  };
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text,setText] = useState('');
  // text = "new text"; wrong way to change the state
  // setText("new text"); correct way to change the area
  return (
    <>
    <div className = "container">
            <h1>{props.heading}</h1>
            <div classNameName="mb-3">
            <textarea className="form-control" placeholder = "Enter The Text" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-4" onClick={handleUpClick}>Upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lower case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleFirstLaterCapital}>Capitalization</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p className='sub'>{text.split(" ").length} <b>Words</b> {text.length} <b>Character</b></p>
      <p className='sub'>{0.008*text.split(" ").length}<b>Minute Read</b></p>
      <h2><b>Preview</b></h2>
      <p className='sub'>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
