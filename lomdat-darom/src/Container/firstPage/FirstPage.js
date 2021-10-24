import React, { useState, useEffect } from "react";
import "./FirstPage.css";
import { useHistory } from "react-router-dom";
// import FirstPage from "./Container/firstPage/FirstPage";

function FirstPage(props) {
  const history = useHistory();
  const [textArray, setTextArray] = useState([]);
  const [emptyTextArray, setEmptyTextArray] = useState([
    "שלום וברוכים הבאים ללומדת מורשת פיקוד הדרום!",
    "בואו להוכיח שאתם מכירים את הגזרה הדרומית בצורה הטובה ביותר!",
  ]);

  const changeText = () => {
    props.setPageNum((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (props.pageNum === 1) {
      console.log("000");

      const timer = setTimeout(() => {
        setTextArray(oldArray => [...oldArray, emptyTextArray[0]])
      }, 1500);
      return () => clearTimeout(timer);
    } else if (props.pageNum === 2) {
      history.push("/questions");
    }
  }, [props.pageNum]);

  useEffect(() => {
    if (textArray.length === 1) {
      console.log("222");

      const timer = setTimeout(() => {
        setTextArray(oldArray => [...oldArray, emptyTextArray[1]])
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
            return <p key={index} className="text-questions">{line}</p>;
          })}
          {/* <p>שלום וברוכים הבאים ללומדת מורשת פיקוד הדרום!</p>
            <p>בואו להוכיח שאתם מכירים את הגזרה הדרומית בצורה הטובה ביותר!</p> */}
        </div>
      )}
      {/* <div className="first-headline headline"><div className="bigger-word">לומדת</div> פיקוד דרום</div> */}
      <div className="start-btn btn" onClick={changeText}>{`${
        props.pageNum === 0 ? "התחל לומדה" : "בואו נתחיל!"
      }`}</div>
    </div>
  );
}

export default FirstPage;
