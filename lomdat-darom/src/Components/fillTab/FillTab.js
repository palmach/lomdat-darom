import React, { useState, useEffect, useRef } from "react";
import "./FillTab.css";
import gsap from "gsap";
import Text from "./../../Text.json";

function FillTab(props) {
  const colorRef = useRef();
  const [inputValue, setInputValue] = useState("");

  const handelChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (props.isCheacked) {
      console.log("inputValue "+inputValue);
      console.log("props.endValue "+props.endValue);
      if (inputValue === props.endValue) {
        console.log("TRU");
        gsap.to(colorRef.current, {
          borderBottomColor: "#56821D",
          duration: 0.25,
        });
      } else {
        console.log("FAL");
        gsap.to(colorRef.current, {
          borderBottomColor: "#bb3c02",
          duration: 0.25,
        });
        props.setIsCheacked(false);
      }
    }
  }, [props.isCheacked]);

  return (
    <input
      ref={colorRef}
      className="fill-tab tabs"
      value={inputValue}
      onChange={handelChange}
    />
  );
}

export default FillTab;
