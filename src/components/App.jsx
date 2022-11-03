import React, { useState } from "react";

function App() {
  //create state for headingText bc we want it to change
  const [headingText, setHeading] = useState("Hello");
  //create state to check when mouse is over button
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeading("Submitted");
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  //when mouse is over button it will call handleMouseOver function and set the state
  //to true which changes the color to black. when mouse out it will call handleMouseOut and set
  //its state to false which changes the color to white. Note: both event handlers are being called in
  //the button
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
