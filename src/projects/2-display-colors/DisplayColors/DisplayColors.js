import React from "react";
import { Link } from "react-router-dom";

import Code from "../Code/Code";
import Desc from "../Desc/Desc";

import "./../../projects.css";
import styles from "./displayColors.module.css";

const {currColor, curr} = styles

const DisplayColors = () => {
  const colors = [
    { id: 1, name: "brown", hex: "#A52A2A" },
    { id: 2, name: "crimson", hex: "#DC143C" },
    { id: 3, name: "red", hex: "#FF0000" },
    { id: 4, name: "tomato", hex: "#FF6347" },
    { id: 5, name: "coral", hex: "#FF7F50" },
    { id: 6, name: "indian red", hex: "#CD5C5C" },
    { id: 7, name: "light coral", hex: "#F08080" },
    { id: 8, name: "dark salmon", hex: "#E9967A" },
    { id: 9, name: "orange red", hex: "#FF4500" },
  ];

  const colorItems = colors.map((color) => (
    <li
      key={color.id}
      className={`${currColor} ${curr}`}
      style={{
        backgroundColor: `${color.hex}`,
      }}
    >
      <span>{color.id} </span> | <span>{color.name} </span> |{" "}
      <span>{color.hex}</span>
    </li>
  ));

  return (
    <div className="container">
      <div className="projectName">
        <h2 style={{ fontSize: "30px", color: "#3498db", marginTop: "10px" }}>
          Display Colors
        </h2>
        <div>{colorItems}</div>
        {/* <div>
                {
                    colors.map(color => <li key={color.id}>{color.id} : {color.name} : {color.age}</li>)
                }
                </div> */}
      </div>
      <div className="description">
        <Desc />
        <Link className="homeLink" to="/counter" title="Counter">
          Previous
        </Link>
        <Link className="homeLink" to="/">
          Home
        </Link>
        <Link className="homeLink" to="/handle-input" title="Handle Input">
          Next
        </Link>
      </div>
      <div className="codeRight">
        <Code />
      </div>
    </div>
  );
};

export default DisplayColors;
