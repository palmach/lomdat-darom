import React, { useState, useEffect } from "react";
import "./QuestionsContainer.css";
import Answer from "../../Components/answer/Answer";
import Text from "../../Text.json";
import { Markup } from "interweave";

function QuestionsContainer(props) {
  return (
    <div className="questions-container under-question-headlie">
      <div className="answers-container">
        <Markup
          className="question text-questions"
          content={Text[props.questionNum]["q"]}
        />
        {Text[props.questionNum]["answers"].map((ans, index) => {
          return (
            <Answer
              questionNum={props.questionNum}
              key={index}
              ansText={ans}
              ansNum={index}
              changeQuestion={props.changeQuestion}
            />
          );
        })}
      </div>
      {props.hasExplain && (
        <div
          className="btn back-btn change-explain"
          onClick={props.changeFromExplain}
        >
          חזור
        </div>
      )}
    </div>
  );
}

export default QuestionsContainer;
