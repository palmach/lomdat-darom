import React, { useState, useEffect } from "react";
import "./FirstPage.css";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

function FirstPage(props) {
  const history = useHistory();
  const [textArray, setTextArray] = useState([]);
  const emptyTextArray = [
    "שלום וברוכים הבאים ללומדת מורשת פיקוד הדרום!",
    "בואו להוכיח שאתם מכירים את הגזרה הדרומית בצורה הטובה ביותר!",
  ];

  const changeText = () => {
    props.setPageNum((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (props.pageNum === 1) {
      const timer = setTimeout(() => {
        setTextArray((oldArray) => [...oldArray, emptyTextArray[0]]);
        gsap.to(".text-opening0", {
          display: "block",
          opacity: 1,
          duration: 0.5,
        });
      }, 500);
      return () => clearTimeout(timer);
    } 
    // else if (props.pageNum === 2) {
    //   history.push("/questions");
    // }
  }, [props.pageNum]);

  useEffect(() => {
    if (textArray.length === 1) {
      const timer = setTimeout(() => {
        setTextArray((oldArray) => [...oldArray, emptyTextArray[1]]);
        gsap.to(".text-opening1", {
          display: "block",
          opacity: 1,
          duration: 0.8,
        });
        gsap.to(".start-btn", {
          display: "block",
          opacity: 1,
          duration: 0.8,
          delay: 1,
        });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [textArray]);

  return (
    <div className="first-page">
      {props.pageNum === 0 ? (
        <div className="first-headline headline">
          <div className="bigger-word">לומדת</div> פיקוד דרום
        </div>
      ) : (
        <div className="welcom-text">
          {textArray.map((line, index) => {
            return (
              <p
                key={index}
                className={`text-questions text-opening text-opening${index}`}
              >
                {line}
              </p>
            );
          })}
        </div>
      )}
      <div
        className={`start-btn btn ${props.pageNum === 1 && "text-opening"} `}
        onClick={changeText}
      >{`${props.pageNum === 0 ? "התחל לומדה" : "בואו נתחיל!"}`}</div>
    </div>
  );
}

export default FirstPage;
