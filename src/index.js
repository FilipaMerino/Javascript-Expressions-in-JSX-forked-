import React from "react";
import ReactDOM from "react-dom";

//Display 2 paragraph HTML elements;
//The paragraphs should say:
// Created by YOUR NAME - hardCode
//Copywrite [CURRENT YEAR]

const name = "Filipa Merino";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
