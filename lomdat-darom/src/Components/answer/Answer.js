// Answer

import React, { useState, useEffect, useRef } from "react";
import "./Answer.css";
import gsap from "gsap";

import Text from "./../../Text.json";


function Answer(props) {
    const colorRef = useRef();

    // const history = useHistory();
    // const changeText =()=>{props.setPageNum((prevState) => prevState + 1)}

    // useEffect(()=>{
    //     },[props.pageNum]);

    const checkAns = (event) => {
        if(props.ansNum === Number(Text[props.questionNum]["a"])){
            gsap.to(colorRef.current, { backgroundColor: "rgb(28, 247, 112)" });
        } else{
            gsap.to(colorRef.current, { backgroundColor: "rgb(211, 9, 9" });
            gsap.to(".correct", { backgroundColor: "rgb(28, 247, 112)", delay:0.25 });
            
        }
        const timer = setTimeout(()=>{
            props.changeQuestion();
            gsap.to(".correct", { backgroundColor: "#00000000", delay:0.75 });

        },2500);
        return()=>clearTimeout(timer);
    }

  return (
    <div className={`answer btn text-questions ${props.ansNum === Number(Text[props.questionNum]["a"])&& "correct"}`} onClick={checkAns} ref={colorRef} >
        {props.ansText}
    </div>
  );
}

export default Answer;
