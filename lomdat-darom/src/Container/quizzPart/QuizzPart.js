import React, { useState, useEffect } from "react";
import "./QuizzPart.css";
// import Map from "../../Components/map/Map";
// import FillAns from "../../Components/fillAns/FillAns";
import SkyPart from "../../Components/skyPart/SkyPart";
import DesertPart from "../../Components/desertPart/DesertPart";
import FlowersPart from "../../Components/flowersPart/FlowersPart";
import GrassPart from "../../Components/grassPart/GrassPart";
import Explain from "../../Components/explain/Explain";
import QuestionsContainer from "../questionsContainer/QuestionsContainer";
import Text from "../../Text.json";

function QuizzPart(props) {
  const hasExplain =
    Text[props.questionNum]["explain"] !== "" ||
    Text[props.questionNum]["pic"] !== "";
  const [toExplain, setToExplain] = useState(false);

  useEffect(() => {
    if (hasExplain === true) {
      setToExplain(true);
    } else {
      setToExplain(false);
    }

    //למחוק כאשר אוכל לעבוד על השאלה של המפה
    // if (props.questionNum === 5) {
    //   props.setQuestionNum((prevState) => prevState + 1);
    // }
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
      {props.questionNum>=0 && props.questionNum <5 ?
      <DesertPart />
      :props.questionNum>=5 && props.questionNum <10 ?
      <GrassPart />
      :
      <FlowersPart/>
      }
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
            changeQuestion={changeQuestion}
            changeFromExplain={changeFromExplain}
            hasExplain={hasExplain}
          />
        )}
      </div>
    </div>
  );
}

export default QuizzPart;
