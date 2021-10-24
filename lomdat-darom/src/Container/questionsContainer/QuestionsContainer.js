// QuestionsContainer

import React, { useState, useEffect } from "react";
import "./QuestionsContainer.css";
import SkyPart from "../../Components/skyPart/SkyPart";
import DesertPart from "../../Components/desertPart/DesertPart";
import Text from "./../../Text.json";

// import { useHistory } from "react-router-dom";

function QuestionsContainer(props) {
    // const history = useHistory();
    // const changeText =()=>{props.setPageNum((prevState) => prevState + 1)}

    // useEffect(()=>{
    //     },[props.pageNum]);

  return (
    <div className="questions-container">
        <SkyPart/>
        <DesertPart/>
        <div className="questions-part">
            <p className="headline question-headline">שאלה {props.questionNum+1}</p>
            <div className="question">{Text[props.questionNum].q}</div>

        </div>
    </div>
  );
}

export default QuestionsContainer;
