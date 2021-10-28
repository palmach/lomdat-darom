import React, { useState, useEffect, useRef } from "react";
import "./FillAns.css";
import FillTab from "./../fillTab/FillTab"
import gsap from "gsap";
import Text from "./../../Text.json";

function FillAns(props) {
  const [inputValue, setInputValue] = useState("");

  const handelChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
    {/* <div className="under-question-headlie"> */}
      {Text[props.questionNum]["letters"].map((ans, index) => {
        if (index === 3 || index === 6) {
          return (
            <div key={index} className="text-tab">
              <p className="text-tab tabs">
                {Text[props.questionNum]["letters"][index]}
              </p>
              <div className="blank-tab"> </div>
            </div>
          );
        } else {
          return (
           <FillTab key={index}/>
          );
        }
      })}
      {/* <div className="cheack-btn btn" >בדיקה</div> */}
    </div>
  );
}

export default FillAns;
