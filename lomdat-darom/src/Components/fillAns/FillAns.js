import React, { useState, useEffect, useRef } from "react";
import "./FillAns.css";
import FillTab from "./../fillTab/FillTab"
import gsap from "gsap";
import Text from "./../../Text.json";

function FillAns(props) {

  const endValue=["ע","מ","ו","ד","ע","נ","נ"]
  // const [isCheacked, setIsCheacked] = useState(false);

  // const cheackAns=()=>{
  //   console.log("chchcch");
  //   props.setIsCheacked(true);
  // }

  return (
    <div className="fill-btn-cont">
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
           <FillTab key={index} index={index} endValue={endValue[index]} isCheacked={props.isCheacked} setIsCheacked={props.setIsCheacked} />
          );
        }
      })}
      {/* {isCheacked === false ?
      <div className="cheack-btn btn" onClick={cheackAns}>בדיקה</div>
      :
      <div className="cheack-btn btn" onClick={props.changeQuestion}>הבא</div>
      } */}
      {/* <div className="cheack-btn btn" >בדיקה</div> */}
    </div>
  );
}

export default FillAns;
