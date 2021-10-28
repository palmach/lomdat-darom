import React, { useState, useEffect, useRef } from "react";
import "./FillTab.css";
import gsap from "gsap";
import Text from "./../../Text.json";

function FillTab(props) {
  const [inputValue, setInputValue] = useState("");

  const handelChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      className="fill-tab tabs"
      value={inputValue}
      onChange={handelChange}
    />
  );
}

export default FillTab;
