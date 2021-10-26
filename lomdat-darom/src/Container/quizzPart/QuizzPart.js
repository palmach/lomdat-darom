import React, { useState, useEffect } from "react";
import "./QuizzPart.css";
import SkyPart from "../../Components/skyPart/SkyPart";
import DesertPart from "../../Components/desertPart/DesertPart";
import Explain from "../../Components/explain/Explain";
import QuestionsContainer from "../questionsContainer/QuestionsContainer";
import Text from "../../Text.json";
import { Markup } from "interweave";

function QuizzPart(props) {
  const hasExplain =
    Text[props.questionNum]["explain"] !== "" ||
    Text[props.questionNum]["pic"] !== "";
  const [toExplain, setToExplain] = useState(false);
  console.log("has "+hasExplain);
  console.log("toExplain " +toExplain);


  useEffect(() => {
    console.log(76);
    if (hasExplain === true) {
      setToExplain(true);
    } else {
      setToExplain(false);
    }
  }, [props.questionNum]);

  const changeQuestion = () => {
    props.setQuestionNum((prevState) => prevState + 1);
  };

  const changeFromExplain = () => {
    setToExplain((prevState) => !prevState);
    console.log(toExplain);
  };

  return (
    <div className="quizz-part">
      <SkyPart />
      <DesertPart />
      <div className="questions-part">
        <p className="headline question-headline">
          שאלה {props.questionNum + 1}
        </p>
        {hasExplain && toExplain ? (
          <Explain
            questionNum={props.questionNum}
            changeFromExplain={changeFromExplain}
            />
            ) : (
              <QuestionsContainer
              questionNum={props.questionNum}
              changeFromExplain={changeFromExplain}
            changeQuestion={changeQuestion}
            hasExplain={hasExplain}
          />
        )}
      </div>
    </div>
  );
}

export default QuizzPart;
