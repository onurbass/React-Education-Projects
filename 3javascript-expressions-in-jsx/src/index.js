import React from "react";
import ReactDOM from "react-dom";

const name = "Onur";
const lastName="Bas"
const luckyNumber = Math.floor(Math.random() * 10 + 1);

ReactDOM.render(
  <div>
    <h1>Hello {name +" "+lastName}!</h1>
    <p> Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
