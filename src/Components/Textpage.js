import React from "react";

import { useState } from "react";

export default function Textpage(props) {
  const [text, setText] = useState("Enter your text here");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked", + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success")
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked", + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success")
    
  };
  const handlelocLowClick = () => {
    // console.log("Uppercase was clicked", + text)
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("converted to loacllowercase", "success")
  };
  const textClear = () => {
    // console.log("Uppercase was clicked", + text)
    let newText = ("");
    setText(newText);
    props.showAlert("text cleared", "success")
  };
  
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };

  return (
    <>
      <div className="container1" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.Headings}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" style={{backgroundColor: props.mode==='dark'?'gray':'white',
          color: props.mode==='dark'?'white':'black'}}
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-primary mt-2" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mt-2 mx-3" onClick={handleLowClick}>Convert to lowercase</button>
          <button className="btn btn-primary mt-2 mx-3" onClick={handlelocLowClick}>Convert to loacl lowercase</button>
          <button className="btn btn-primary mt-2 mx-3" onClick={textClear}>Clear text</button>
        </div>
      </div>


      <div className="container2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>This is your text summury</h1>
        <p>{text.split(" ").length} words and {text.length} letters in your text</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>

        <h2>Preview</h2>
        <p>{text}</p>

      </div>
    </>
  );
}
