import React, { useState, useEffect } from "react";
import "./QuestionsContainer.css";
// import SkyPart from "../../Components/skyPart/SkyPart";
// import DesertPart from "../../Components/desertPart/DesertPart";
import Answer from "../../Components/answer/Answer";
// import Explain from "../../Components/explain/Explain";
import Text from "../../Text.json";
import { Markup } from "interweave";


function QuestionsContainer(props) {
//   const changeQuestion = () => {
//     props.setQuestionNum((prevState) => prevState + 1);
//   };

  // useEffect(console.log(hasExplain),[hasExplain])
  return (
    <div className="questions-container">
      
          <div className="answers-container">
            <Markup className="question text-questions" content={Text[props.questionNum]["q"]} />
            {Text[props.questionNum]["answers"].map((ans, index) => {
              return <Answer questionNum={props.questionNum} key={index} ansText={ans} ansNum={index} changeQuestion={props.changeQuestion} />;
            })}
          </div>
    </div>
  );
}

export default QuestionsContainer;
