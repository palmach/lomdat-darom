import React, { useState } from "react";
import "./FirstPage.css";

function FirstPage(props) {

    // const [isAnswered, setIsAnswered] = useState(false);


    const changeText =()=>{props.setPageNum((prevState) => prevState + 1)}

  return (
    <div className="first-page">
      <div className="first-headline headline">לומדת פיקוד דרום</div>
      <div className="start-btn btn" onClick={changeText}>{`${props.pageNum===0 ? "התחל לומדה" : "בואו נתחיל!"}`}</div>
    </div>
  );
}

export default FirstPage;
