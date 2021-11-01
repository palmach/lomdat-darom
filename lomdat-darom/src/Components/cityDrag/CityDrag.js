import React, { useState, useEffect, useRef } from "react";
import "./CityDrag.css";
import Text from "./../../Text.json";

// import { gsap, TweenLite } from "gsap";
// import { Draggable } from "gsap/Draggable";
// gsap.registerPlugin(Draggable);

// import { ItemTypes } from './Constants'
// import { useDrag } from 'react-dnd'
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

function CityDrag(props) {
  // const onDragEnd=(e)=>{
  // var snapMade = false;
  // for(var i=0; i<dragRefs.current.length;i++){
  //   if(this.hitTest(dragRefs.current[i], overlapThreshold)){

  //      if(!dragRefs.current[i].hasClass("occupied")){

  //       var p = dragRefs.current[i].position();

  //       dragRefs.current[i].addClass("occupied");

  //       TweenLite.to(e.target,0.1, {left:p.left, top:p.top, x:0, y:0});

  //       if(e.target.targetAttachedTo!==dragRefs.current[i] && e.target.targetAttachedTo!==undefined){
  //         e.target.targetAttachedTo.removeClass("occupied"); e.target.targetAttachedTo = undefined;
  //       }
  //        e.target.targetAttachedTo = dragRefs.current[i];
  //       snapMade = true;
  //     }

  //   }
  // }
  // if(!snapMade){
  //   if(e.target.targetAttachedTo !== undefined){
  //     e.target.targetAttachedTo.removeClass("occupied");
  //   };
  //  TweenLite.to(e.target,0.1, {x:0, y:0, top:e.target.originalTop, left:e.target.originalLeft});
  // }
  // }

  // const onDragStart=(e)=>{
  //   console.log("stArt");
  // }

  // Draggable.create(".city-drag", {
  //   // bounds:".drop-cont",
  //   edgeResistance:0.65,
  //   type:"x,y",
  //   // throwProps:true,
  //   onDragEnd:{onDragEnd},
  //   onDragStart : {onDragStart}

  // })

  // const [{isDragging}, drag] = useDrag(() => ({
  //     type: ItemTypes.CITY,
  //     collect: monitor => ({
  //       isDragging: !!monitor.isDragging(),
  //     }),
  //   }));

  return (
    <DragDropContainer targetKey={`city${props.index}`}>
      <div className={`city-drag city${props.index}`} >
        {props.name}
      </div>
    </DragDropContainer>
  );
}

export default CityDrag;
