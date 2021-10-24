import React, { useState, useEffect } from "react";
import "./QuizzPart.css";
import SkyPart from "../../Components/skyPart/SkyPart";
import DesertPart from "../../Components/desertPart/DesertPart";
// import Answer from "../../Components/answer/Answer";
import Explain from "../../Components/explain/Explain";
import QuestionsContainer from "../questionsContainer/QuestionsContainer";
import Text from "../../Text.json";
import { Markup } from "interweave";


function QuizzPart(props) {
  const hasExplain = (Text[props.questionNum]["explain"] !== "" || Text[props.questionNum]["pic"] !== "");
  console.log(hasExplain)

  const changeQuestion = () => {
    props.setQuestionNum((prevState) => prevState + 1);
  };

  return (
    <div className="quizz-part">
      <SkyPart />
      <DesertPart />
      <div className="questions-part">
        <p className="headline question-headline">
          שאלה {props.questionNum + 1}
        </p>
        {hasExplain ? (
          // <div className="explain-part">
            <Explain questionNum={props.questionNum}/>
          // </div>
        ) : (
          <QuestionsContainer questionNum={props.questionNum} changeQuestion={changeQuestion}/>
          // <div className="answers-container">
          //   <Markup className="question text-questions" content={Text[props.questionNum]["q"]} />

          //   {/* <div className="question text-questions">
          //     {Text[props.questionNum].q}
          //   </div> */}
          //   {Text[props.questionNum]["answers"].map((ans, index) => {
          //     return <Answer questionNum={props.questionNum} key={index} ansText={ans} ansNum={index} changeQuestion={changeQuestion} />;
          //   })}
          // </div>
        )}
      </div>
    </div>
  );
}

export default QuizzPart;
