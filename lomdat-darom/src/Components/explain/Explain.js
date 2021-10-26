import React, { useState, useEffect } from "react";
import "./Explain.css";
import { Markup } from "interweave";
import Text from "./../../Text.json";

function Explain(props) {
  return (
    <div className="explain-part" >
        <Markup className="explian text-questions explain-text" content={Text[props.questionNum]["explain"]} />
        <div>{Text[props.questionNum]["pic"]}</div>
        <div className="btn next-btn change-explain" onClick={props.changeFromExplain}>הבא</div>
    </div>
  );
}

export default Explain;
