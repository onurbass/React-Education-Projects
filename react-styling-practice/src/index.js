//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
var greatings;

const time = new Date().getHours();
var style;

if (time >= 0 && time < 12) {
  greatings = "Good Morning";
  style = { color: "red" };
} else if (time >= 12 && time < 18) {
  greatings = "Good Afternoon";
  style = { color: "green" };
} else {
  greatings = "Good Evening";
  style = { color: "blue" };
}
ReactDOM.render(
  <div>
    <h1 style={style}>{greatings}</h1>
  </div>,
  document.getElementById("root")
);
console.log(typeof style);
