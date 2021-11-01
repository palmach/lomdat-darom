import React, { useState, useEffect, useRef } from "react";
import "./CityDrop.css";
import Text from "./../../Text.json";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

function CityDrop(props) {
  return (
    <DropTarget targetKey={`city${props.index}`}>
      <div className={`drop-city drop${props.index}`}></div>
    </DropTarget>
  );
}

export default CityDrop;
