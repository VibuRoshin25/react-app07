import React from "react";
import ReactDOM from "react-dom";

var seconds = new Date().getSeconds();

const customStyle = {
  color: ""
};

if (seconds % 2 === 0) {
  customStyle.color = "red";
} else if (seconds % 3 === 0) {
  customStyle.color = "green";
} else {
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {seconds}
  </h1>,
  document.getElementById("root")
);
