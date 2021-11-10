import React, { useState, useEffect } from "react";
import "./QuizzPart.css";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

// import Map from "../../Components/map/Map";
// import FillAns from "../../Components/fillAns/FillAns";
import SkyPart from "../../Components/skyPart/SkyPart";
import DesertPart from "../../Components/desertPart/DesertPart";
import GrassPart from "../../Components/grassPart/GrassPart";
// import FlowersPart from "../../Components/flowersPart/FlowersPart";
import Explain from "../../Components/explain/Explain";
import QuestionsContainer from "../questionsContainer/QuestionsContainer";
import Text from "../../Text.json";

function QuizzPart(props) {
  const history = useHistory();
  const [isAnswerd, setIsAnswerd] = useState(false);

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
    if (props.questionNum === 13) {
      history.push("/end");
    }
  }, [props.questionNum]);

  const changeQuestion = () => {
    props.setQuestionNum((prevState) => prevState + 1);
  };

  const changeFromExplain = () => {
    if (isAnswerd === false && hasExplain) {
      setToExplain((prevState) => !prevState);
    }
  };

  useEffect(()=>{
    if(props.questionNum===0){

      gsap.from(".black-back", { display:"block", opacity:1, duration:1.75 });
    }

  },[props.questionNum])


  return (
    <div className="quizz-part">
      <div className="black-back" ></div>

      <SkyPart />
      {
        props.questionNum >= 0 && props.questionNum < 5 ? (
          <DesertPart />
        ) : (
          props.questionNum >= 5 && (
            <GrassPart questionNum={props.questionNum} />
          )
        )
        // :
        // <FlowersPart/>
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
            pageNum={props.pageNum}
            changeQuestion={changeQuestion}
            changeFromExplain={changeFromExplain}
            hasExplain={hasExplain}
            isAnswerd={isAnswerd}
            setIsAnswerd={setIsAnswerd}
          />
        )}
      </div>
    </div>
  );
}

export default QuizzPart;
