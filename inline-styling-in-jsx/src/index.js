import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
  alignItem: "center",
  display: "inline-flex",
  marginLeft: "200px",
  paddingTop: "100px"
};
customStyle.color = "blue";
customStyle.border = "2px solid green";
customStyle.paddingTop = "0";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
