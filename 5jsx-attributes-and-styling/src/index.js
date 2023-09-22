import React from "react";
import ReactDOM from "react-dom";
const randomImg = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellChechk="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food-img"
        src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg"
        alt=""
      />
      <br />
      <img src={randomImg + "?grayscale"} alt="" />
    </div>
  </div>,
  document.getElementById("root")
);
