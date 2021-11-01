import React, { useState, useEffect } from "react";
import "./QuestionsContainer.css";
import Answer from "../../Components/answer/Answer";
import Map from "../../Components/map/Map";
import FillAns from "../../Components/fillAns/FillAns";
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
        {props.questionNum === 7 ? (
          <FillAns
            questionNum={props.questionNum}
            changeQuestion={props.changeQuestion}
          />
        ) : props.questionNum === 5 ? (
          // <div></div>
          // {props.setQuestionNum((prevState) => prevState + 1)}
          <Map
            changeQuestion={props.changeQuestion}
            questionNum={props.questionNum}
          />
        ) : (
          Text[props.questionNum]["answers"].map((ans, index) => {
            return (
              <Answer
                questionNum={props.questionNum}
                key={index}
                ansText={ans}
                ansNum={index}
                changeQuestion={props.changeQuestion}
              />
            );
          })
        )}
      </div>
      {props.questionNum === 7 && (
        <div className="cheack-btn btn" >בדיקה</div>
      )}
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
