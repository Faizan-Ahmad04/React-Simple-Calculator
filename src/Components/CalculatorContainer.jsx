import React, { useState } from "react";

// Simple calculator app, created using react

export default function CalculatorContainer(props) {

  const [text, setHeading] = useState("Let's Calculate");

  
  const [result, setResult] = useState("");


  // input
  const [inputValue, setinputValue] = useState("");

  const clearDisplay = () => {
    setinputValue("");
    setResult("")
  };

  const deletval = () => {
    setinputValue(inputValue.substring(0, inputValue.length - 1));
  };

  const onDiplayScreen = (event) => {
    setinputValue(event.target.value);
  };

  const clickHandler = (event) => {
    setinputValue(inputValue.concat(event.target.value));
  };

  const claculate = () => {
    let res = eval(inputValue)
    setResult(res);
    
  };



  return (
    <div className="container">
      <div className="calculator">
        <div id="suggetion-text">
          <h3>{text}</h3>
        </div>

        <div className="input">
          <input
            className="screen"
            type="text"
            placeholder="0"
            value={inputValue}
            onChange={onDiplayScreen}
          />
        </div>
        <div className="input">
          <input
            className="screen op"
            type="tex"
            value={result}
            onChange={onDiplayScreen}
          />
        </div>

        <div className="row">
          <input
            type="button"
            value="Cl"
            className="button"
            id="clear"
            onClick={clearDisplay}
          />
          <input
            type="button"
            value="DE"
            className="button btn"
            id="delete"
            onClick={deletval}
          />

          <input
            type="button"
            value="%"
            className="button btn"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="/"
            className="button btn"
            onClick={clickHandler}
          />
        </div>
        <div className="row">
          <input
            type="button"
            value="9"
            className="button number-color"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="8"
            className="button number-color"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="7"
            className="button number-color"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="*"
            className="button btn"
            onClick={clickHandler}
          />
        </div>
        <div className="row">
          <input
            type="button"
            value="6"
            className="button number-color"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="5"
            className="button number-color"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="4"
            className="button number-color"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="+"
            className="button btn"
            onClick={clickHandler}
          />
        </div>
        <div className="row">
          <input
            type="button"
            value="3"
            className="button number-color"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="2"
            className="button number-color"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="1"
            className="button number-color"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="-"
            className="button btn"
            onClick={clickHandler}
          />
        </div>
        <div className="row" id="last-row">
          <input
            type="button"
            value="0"
            className="button"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="."
            className="button btn"
            onClick={clickHandler}
          />
          <input
            type="button"
            value="="
            className="button btn"
            id="equal"
            onClick={claculate}
          />
        </div>
      </div>
    </div>
  );
}
