import React, { useState, useEffect } from "react";
import "./Map.css";
import Text from "./../../Text.json";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { gsap } from "gsap";

function Map(props) {
  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [counter, setCounter] = useState(0);
  const [isNext, setIsNext] = useState(false);

  const handleDrop = (e) => {
    e.stopPropagation();
    let item = [...data];
    item[e.dragData.index.index] = 1;
    setCounter((prev) => prev + 1);
    setData(item);
    e.containerElem.style.display = "none";
  };

  useEffect(() => {
    if (counter === 11) {
      setIsNext(true);
    }
  }, [counter]);

  return (
    <div className="map-part under-question-headlie">
      <div className="map-cont">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 889 883"
          className="map"
        >
          <defs>
            <clipPath id="clip-path-4">
              <rect
                className="clear-back"
                x="-128.21"
                y="9"
                width="1210.21"
                height="874"
              />
            </clipPath>
          </defs>
          <g className="map-back">
            <path
              className="map-color"
              d="M777,567.85c7.89,23-63.59-16.43-60.68-79.71S734,414.9,727.08,317.69c-7.27-101.59,73.11-102.84,90.54-107.52s40.67,2.34,32,46.87S843.77,388.28,838,422.22s-11.62,66.85-49.39,71.53,23.24,42.19,17.43,82S774,603.9,721.75,693,605.54,936.71,605.54,1007s-17.43,14.06-11.62,98.43S567.77,1145.3,554,1236.7,527.1,1339.82,512.57,1389s-32,93.75-55.2,110.16-52.3,0-43.58-39.84-8.72-30.47-23.24-100.78-107.49-262.5-124.92-318.74-66.82-9.37-55.2-60.93-8.72-44.53-17.43-56.25-5.81-49.22-8.72-84.37S108.75,707,73.88,608.59s-61-138.28-61-138.28c328.29-199.22,395.11-607,412.54-675s-2.91-89.06,26.15-103.12,14.52-72.65,14.52-72.65,37.77,14.06,58.11,0,8.72-37.5,23.24-77.34,0-68,0-68l69.73-9.37c69.73-9.37,61,11.72,81.35,23.44s32-14.06,66.82-23.44S803.1-523.41,806-577.31s29.05-77.34,29.05-77.34c-2.91,21.1,32,28.13,32,28.13,8.72-23.44,37.77-35.16,37.77-35.16C994.84-708.56,1050-917.15,1050-917.15c-62.34,177.56-69.72,309.36-69.72,309.36s49.39,114.84,32,178.12-98.78,112.5-148.17,150-14.53,98.43-33.9,201.56-12.59,143-3.87,189.84,0,65.62,0,65.62S709.18,370.55,777,567.85"
            />
            <path
              className="sea-color"
              d="M836.16,210.62s-41.67-1.46-63.3,11.62-41,30.83-46.16,77.56,15,24.66-5.21,140.35,29.75,156,79.75,116.78c0,0-42.92-67.48-12.68-63.17,0,0,53.52-1,52.7-111.19S867,223,836.16,210.62"
            />
            <path d="M1000.69-779.89c-10.53,22.3-22.38,44.27-37,65.17a243.64,243.64,0,0,1-24.6,30.08c-9.29,9.44-19.81,18.33-32.57,25.17l-.07,0-.24.1A84,84,0,0,0,894.58-653a79.58,79.58,0,0,0-10.28,7.88c-6.25,5.68-11.11,12.29-13.7,19.43l-1,2.82-3.48-.75a77.81,77.81,0,0,1-12.84-4,55,55,0,0,1-11.56-6.22,28.4,28.4,0,0,1-8.65-9.42A19.76,19.76,0,0,1,830.9-655l7.26,2.63a59.29,59.29,0,0,0-6.82,8.33,98.32,98.32,0,0,0-5.69,9.27A113.47,113.47,0,0,0,817.48-615c-4.37,13.54-6.07,27.44-6.63,41.62-.37,7.18-.69,14.33-1.75,21.73a51.35,51.35,0,0,1-1.15,5.69,19.28,19.28,0,0,1-2.81,6.28,12.13,12.13,0,0,1-3.48,3.25,15.66,15.66,0,0,1-4.83,1.94,45.61,45.61,0,0,1-7.8.78,103.07,103.07,0,0,0-12.47,1,79.37,79.37,0,0,0-11.76,2.7,93.17,93.17,0,0,0-21.53,10c-3.4,2.07-6.72,4.3-10.2,6.59a89.39,89.39,0,0,1-11.57,6.75,34.26,34.26,0,0,1-7.71,2.57,26.23,26.23,0,0,1-9.31.16,28.78,28.78,0,0,1-8.14-2.75,39.67,39.67,0,0,1-6.22-3.91,66.46,66.46,0,0,1-9.23-8.92,40.22,40.22,0,0,0-7.68-7c-5.31-3.59-12.85-5-21-5.41-16.48-.73-33.7,2.15-51.26,4.4l-52.42,7,4.87-7.1a50.79,50.79,0,0,1,2.61,6.58c.72,2.13,1.31,4.28,1.82,6.42a91.15,91.15,0,0,1,2.11,12.95,101.48,101.48,0,0,1-1.13,25.92,115.27,115.27,0,0,1-3,12.73l-4,12.11a141.49,141.49,0,0,0-5.34,23.78c-1.19,8.08-1.61,16.25-3,24.9a47.59,47.59,0,0,1-4,13.31A32.88,32.88,0,0,1,529-377a41.47,41.47,0,0,1-16.32,6.83,70.11,70.11,0,0,1-17.31,1A108.57,108.57,0,0,1,479-371.39a123.21,123.21,0,0,1-15.65-4.35l9-5.72a148.71,148.71,0,0,1,3.75,30.67c0,10.3-.78,20.86-5.63,31.33a34,34,0,0,1-12.45,14.34c-3.55,2.1-5.44,2.8-7.49,4.19a20.64,20.64,0,0,0-4.86,4.32c-2.56,3.17-3.83,7.28-4.44,11.9a144.47,144.47,0,0,0-.93,14.46c-.27,9.94-.68,20.1-1.86,30.17a263.93,263.93,0,0,1-5.2,30.07c-4.94,19.52-8.92,39.11-13.62,58.75C401.26-72.79,376.94,5,343.91,80.41s-74.51,148.69-128,216.32a789.75,789.75,0,0,1-89.68,96A724,724,0,0,1,16.73,474.45l1.81-6.56c4.55,7.26,8.29,14.28,12.06,21.5s7.24,14.41,10.65,21.67q10.15,21.79,19,43.89c5.91,14.73,11.62,29.51,16.92,44.38,2.74,7.46,5.26,14.77,8.16,22.06s5.89,14.54,9,21.77C107.1,672,122,700.3,137.62,728.39l23.6,42.17c7.8,14.13,15.6,28.29,22.13,43.15,3.17,7.48,6.24,15,7.26,23.69.71,7.9,1,15.6,1.32,23.36.62,15.44.46,31,2.43,45.75a48.64,48.64,0,0,0,2.49,10.35,13,13,0,0,0,2.19,3.8,18,18,0,0,0,3.78,3.05c1.64,1.06,3.69,2.2,5.85,3.7a27.6,27.6,0,0,1,5.94,5.46A26.88,26.88,0,0,1,219.85,946c1.16,8.56.06,16.51-1.2,24.38-.67,3.86-1.57,7.93-2.34,11.53a52.13,52.13,0,0,0-1.2,10.59c0,3.35.94,6.25,2.34,7.27,1.18,1.18,4.92,2,9.59,2.59a87.9,87.9,0,0,1,15.2,3,40.77,40.77,0,0,1,14.11,7.63c7.78,6.7,11.68,14.77,14.5,22.55l1.88,5.69c.58,1.83,1.19,3.65,1.86,5.48,1.26,3.66,2.66,7.32,4,11,11.31,29.28,24,58.39,36.47,87.53s25.1,58.29,37.26,87.57,24,58.68,34.17,88.64q3.82,11.23,7,22.67c1,3.82,2,7.66,2.88,11.56s1.6,7.56,2.52,11.33a229.8,229.8,0,0,0,14.46,43.86c1.59,3.58,3.31,7.17,4.9,11A54.29,54.29,0,0,1,422,1434c1.34,8.57.09,16.76-1.5,24.54a74.16,74.16,0,0,0-1.69,10.91,46.41,46.41,0,0,0,.41,10.58c1.06,6.82,4.21,13.46,9.71,17.21s12.7,4,19.37.88a36.13,36.13,0,0,0,9.27-6.37,69.54,69.54,0,0,0,7.88-8.61c9.58-12.44,16.34-26.77,22.35-41.14s10.93-29.23,15.53-44.11c2.29-7.4,4.43-15,6.95-22.53s5.19-15,7.93-22.4c5.56-14.8,10.88-29.36,14.9-44.28s7.29-30,10.06-45.15l2-11.39,1.81-11.43c1.19-7.59,2.41-15.46,4.15-23.17a152.15,152.15,0,0,1,6.87-23.14,86.33,86.33,0,0,1,12.55-22.17c2.67-3.44,5.51-6.59,7.84-9.64a40.52,40.52,0,0,0,5.56-9.33c2.68-6.55,3.64-13.92,4.08-21.36.85-14.94-1.09-30.22-1.52-45.88a157.72,157.72,0,0,1,.64-23.8,42.15,42.15,0,0,1,1.28-6.35,24,24,0,0,1,3-6.6c1.37-2.08,2.49-3.44,3.2-4.81a21,21,0,0,0,1.8-4.57,62,62,0,0,0,1.83-10.7c.39-3.7.57-7.48.71-11.27s.14-7.58.19-11.44l.16-6,.42-5.92c1.37-15.75,4.49-31.16,8.21-46.43S616.17,917.8,621,902.8c9.8-30,21.24-59.56,33.72-88.83s26.1-58.22,41-86.77c15.07-28.46,30.93-56.89,51.83-83.41,5.24-6.61,10.83-13.07,16.79-19.31s12.36-12.2,18.33-18,10.84-11.49,13.45-18.1a52.38,52.38,0,0,0,3-10.38l.46-2.71c.11-.87.23-1.7.27-2.56a33.16,33.16,0,0,0,0-5.17c-.51-6.95-2.94-13.94-6.34-20.76a193.62,193.62,0,0,0-12.24-20.28c-2.24-3.41-4.54-6.85-6.69-10.54a53.68,53.68,0,0,1-3-5.86,21.32,21.32,0,0,1-1.86-7.1,11.54,11.54,0,0,1,.62-4.5,11.39,11.39,0,0,1,3-4.49,20.28,20.28,0,0,1,9.06-4.47,40.26,40.26,0,0,1,4.27-.82l3.33-.5a53.78,53.78,0,0,0,6-1.36,36.3,36.3,0,0,0,18.49-12.47c4.58-5.79,7.6-12.7,9.88-19.85a181.87,181.87,0,0,0,5.21-22.18l2-11.38c.55-3.7,1.06-7.42,1.39-11.22,1.51-15.14,2.07-30.56,2.83-45.94s1.31-30.83,2.2-46.28,2-30.93,4.11-46.43c.86-7.74,2.85-15.64,3.8-22.89s1-14.86-1-21.66a21.83,21.83,0,0,0-5-8.94,16.94,16.94,0,0,0-9.25-4.72,27.65,27.65,0,0,0-11.8.7c-5.26,1.22-9.71,1.76-14.33,2.66a128.94,128.94,0,0,0-26,7.29,78.51,78.51,0,0,0-21.74,13.1c-12.56,10.71-19.92,25-23.49,39.72A124.52,124.52,0,0,0,730,299a221.26,221.26,0,0,0,.35,22.91c1.73,30.85,2,62-2.68,92.73-2.27,15.37-5.47,30.57-7.4,45.86-.51,3.82-1,7.65-1.32,11.48s-.7,7.67-1,11.51a135.15,135.15,0,0,0-.13,23c1.31,15.24,5.41,30.59,14.44,44.12,4.56,6.68,10.4,13,18.32,17.31a30.19,30.19,0,0,0,13.25,3.77,21.84,21.84,0,0,0,13.12-3.8,21.86,21.86,0,0,1-13.13,4,30.87,30.87,0,0,1-13.55-3.62c-8.15-4.23-14.21-10.56-19-17.25-9.48-13.56-14-29-15.71-44.43-2.49-31,3.52-61.86,7.81-92.37,4.08-30.56,3.21-61.38.9-92.08l-.72-11.62c-.2-3.9-.13-7.81-.09-11.72a128.27,128.27,0,0,1,2.89-23.42c3.43-15.44,10.91-30.95,24.54-43a86,86,0,0,1,23.68-14.74,138.06,138.06,0,0,1,27.83-8.21c4.66-1,9.67-1.69,13.57-2.67a38.78,38.78,0,0,1,16.46-1.09,27.09,27.09,0,0,1,14.67,7.17,29.07,29.07,0,0,1,7.09,11.82c2.56,8.23,2.47,16.41,1.68,24.34-.92,8.1-2.65,15.37-3.34,23-1.76,15.18-2.53,30.54-3.12,45.91s-.87,30.77-1.26,46.21-.76,30.88-2.22,46.5c-.34,3.89-.88,7.84-1.48,11.8l-2,11.52a190.36,190.36,0,0,1-5.6,23.24c-2.53,7.74-5.9,15.58-11.62,22.83a49,49,0,0,1-24.81,16.58,68.54,68.54,0,0,1-7.82,1.79l-3.72.56a24.3,24.3,0,0,0-2.7.51,7.31,7.31,0,0,0-3.12,1.33c-.3.31-.54.63-.51,1.8.12,2.31,1.77,5.78,3.64,9s4.14,6.65,6.38,10.05A202.85,202.85,0,0,1,805.44,543c3.71,7.47,6.6,15.51,7.24,24a45.87,45.87,0,0,1-.83,12.6,61.15,61.15,0,0,1-3.49,12.13,50.47,50.47,0,0,1-6.71,11.54,98.34,98.34,0,0,1-9,9.85c-6.25,6.07-12.38,11.74-18.08,17.75S763.49,643,758.43,649.37C738.25,675,722.56,703,707.62,731.23c-14.78,28.3-28.28,57.06-40.71,86.12s-23.74,58.42-33.44,88.09c-4.83,14.83-9.24,29.75-13,44.74s-6.69,30.08-8,45.11l-.4,5.63-.15,5.6c0,3.85-.06,7.78-.19,11.69s-.34,7.85-.75,11.83a69.7,69.7,0,0,1-2.12,12.19,29.84,29.84,0,0,1-2.57,6.43c-1.17,2.18-2.7,4.06-3.55,5.39-1.72,2.52-2.43,5.67-2.92,9.28a150.17,150.17,0,0,0-.57,22.42c.22,7.64.78,15.21,1.23,23a212.21,212.21,0,0,1,.28,23.59c-.49,7.93-1.43,16.07-4.73,24.21a50.1,50.1,0,0,1-6.81,11.48c-2.7,3.51-5.49,6.61-7.89,9.7-9.67,12.18-14.29,26.77-17.65,41.63s-4.91,30.33-7.9,45.65c-2.8,15.34-6,30.67-10.23,45.9s-9.6,30.29-15.13,45c-2.74,7.38-5.43,14.7-7.82,22.08s-4.56,14.8-6.9,22.37c-4.65,15-9.7,30-15.81,44.88s-13.06,29.57-23.67,43.39a80,80,0,0,1-9.14,10,48.58,48.58,0,0,1-12.52,8.5,37.55,37.55,0,0,1-17.19,3.53,31.48,31.48,0,0,1-26.84-16.74,40.28,40.28,0,0,1-4.13-12.54c-1.36-8.36-.4-16.84,1.35-24.54,1.53-7.39,2.52-14.71,1.43-21.49s-4.65-13.61-7.93-21a238.94,238.94,0,0,1-15-45.46c-.93-3.8-1.68-7.76-2.55-11.44S382,1350,381,1346.3q-3.13-11.12-6.89-22.21c-10-29.56-21.88-58.85-34-88.06s-24.69-58.33-37.22-87.47-25.17-58.26-36.61-87.88c-1.39-3.72-2.8-7.44-4.1-11.21-.68-1.87-1.31-3.77-1.92-5.68l-1.81-5.48c-2.46-6.94-6-13.62-11.43-18.22a27.17,27.17,0,0,0-9.52-5.15,73.75,73.75,0,0,0-12.64-2.4,69.77,69.77,0,0,1-7.88-1.41,22.18,22.18,0,0,1-8.81-4.2,15.46,15.46,0,0,1-4.89-7.36,24.25,24.25,0,0,1-1.05-6.94,59.61,59.61,0,0,1,1.37-12.42c.85-4,1.63-7.52,2.29-11.3,1.22-7.38,2.13-14.92,1.17-21.73a18.1,18.1,0,0,0-3.33-8.76c-1.76-2.33-4.63-4-8.95-6.62a29.55,29.55,0,0,1-6.25-5.17,22.56,22.56,0,0,1-3.94-6.61,56.81,56.81,0,0,1-3-12.31c-2.1-15.92-1.87-31.3-2.52-46.67-.27-7.65-.61-15.36-1.28-22.85-.76-6.73-3.55-14-6.59-21.08-6.24-14.22-14-28.29-21.73-42.32l-23.6-42.17c-15.66-28.2-30.72-56.73-43.6-86-3.18-7.33-6.3-14.68-9.16-22.11s-5.55-14.95-8.24-22.27c-5.27-14.78-10.94-29.45-16.8-44.06s-12.16-29.1-18.85-43.44c-3.37-7.17-6.82-14.3-10.48-21.34S11.27,479.24,7.2,472.74l-2.48-4L9,466.18c78.32-47.52,143.36-108.35,196.09-175S299.11,151.77,331.8,77,388.73-75.11,407-153.19c4.66-19.48,8.68-39.21,13.61-58.73a255.53,255.53,0,0,0,5-29.09c1.14-9.76,1.53-19.53,1.81-29.5a150,150,0,0,1,1-15.37c.71-5.23,2.22-11.13,6.42-16.37a32.19,32.19,0,0,1,7.51-6.71c2.7-1.82,6.31-3.44,7.71-4.33a23.41,23.41,0,0,0,8.38-9.93c3.88-8.25,4.84-17.95,4.77-27.49a141,141,0,0,0-3.5-28.73L457.62-389l11.16,3.86a105.4,105.4,0,0,0,27.52,5.66c9.27.55,18.28-.82,24.18-5.23a22.09,22.09,0,0,0,7.07-8.2,39.39,39.39,0,0,0,3.2-10.84c1.27-7.82,1.73-16.26,3-24.67a149.84,149.84,0,0,1,5.66-25.18l4-11.94a106.51,106.51,0,0,0,2.72-11.73,93.15,93.15,0,0,0,1-23.75,83.35,83.35,0,0,0-1.91-11.73c-.46-1.92-1-3.84-1.61-5.71a44.32,44.32,0,0,0-2.07-5.28l-2.93-6,7.81-1.06,52.4-7.11c17.33-2.24,35.13-5.46,54.19-4.66a79.59,79.59,0,0,1,14.57,1.94,43.49,43.49,0,0,1,13.95,6,51,51,0,0,1,9.82,9,59.38,59.38,0,0,0,7.6,7.62,20.52,20.52,0,0,0,8.16,4.21c2.41.46,5.11,0,8.4-1.51,6.52-3,13.29-8.06,20.7-12.36a106.74,106.74,0,0,1,24.62-11,93.15,93.15,0,0,1,13.82-3,116.9,116.9,0,0,1,14-.93,36.77,36.77,0,0,0,5.37-.38c1.09-.33,1.22-.3,1.92-1.17a12.25,12.25,0,0,0,1.68-3.76,45.13,45.13,0,0,0,1.08-4.87c1.11-6.78,1.61-13.93,2.12-21,.85-14.36,2.93-29,7.8-43.13a120.58,120.58,0,0,1,9.07-20.73,106,106,0,0,1,6.29-9.85,65.06,65.06,0,0,1,8-9.4l8.78-8.36-1.52,11a14.16,14.16,0,0,0,1.36,8.54A21.46,21.46,0,0,0,847-638.5a46.64,46.64,0,0,0,9.74,5.41,69.52,69.52,0,0,0,11.14,3.62l-4.51,2.07c3.11-8.1,8.74-15.38,15.67-21.48a86.92,86.92,0,0,1,11.29-8.37A90.52,90.52,0,0,1,903.32-664l-.31.14c12-6.2,22.38-14.61,31.59-23.67a241.71,241.71,0,0,0,24.73-29.19c14.85-20.43,27-42.13,38-64.17s20.62-44.58,29.36-67.31,16.6-45.71,23.31-68.91" />
            <path d="M826.34,177.35a54.07,54.07,0,0,0,2.05-13,107.34,107.34,0,0,0-.08-13.05,185.67,185.67,0,0,0-3.37-25.91c-1.66-8.56-3.86-17.08-5.89-25.77s-3.94-17.36-5.39-26.16c-4.34-35.38-2.09-71,2.66-106,1.14-8.77,2.56-17.49,4-26.22l4.6-26A376,376,0,0,0,830-136.56c.64-17.36.12-34.76-.33-52.32s-1-35.38,3.18-53.5a70.67,70.67,0,0,1,12-26.22,72.26,72.26,0,0,1,10.56-11.35c4.14-3.51,8.12-6.34,12.15-9.36,16.12-11.91,32.47-23.36,48.16-35.31s30.83-24.25,44.46-37.5,25.73-27.42,34.6-42.78a112.75,112.75,0,0,0,10.47-23.76,34.3,34.3,0,0,0,1.54-6.15l1.26-6.2a44.28,44.28,0,0,0,.73-6.31l.53-6.35c.84-17-1.37-34.28-4.35-51.39a461.28,461.28,0,0,0-9.86-51.6c-2.12-8.57-4.37-17.12-6.87-25.64s-5-17-7.93-25.5c16,32.65,28.85,66.41,37.36,101.22.47,2.19,1,4.36,1.36,6.56s.56,4.42.85,6.63c.48,4.43,1.29,8.82,1.52,13.29a196.88,196.88,0,0,1,.75,26.85l-.56,6.77a48.61,48.61,0,0,1-.78,6.77l-1.37,6.77a39.53,39.53,0,0,1-1.69,6.71,121.78,121.78,0,0,1-11.3,25.68c-9.5,16.44-22.27,31.32-36.36,45s-29.63,26.34-45.55,38.43-32.37,23.64-48.28,35.4c-3.93,2.94-8.08,5.93-11.42,8.78a61.4,61.4,0,0,0-9,9.63c-5.22,6.85-8.36,14.71-10.37,22.86-3.81,16.43-3.29,33.9-3,51.33s1,35.13.33,52.8a384.64,384.64,0,0,1-5.27,52.93l-4.6,26c-1.39,8.65-2.8,17.29-3.93,26-4.65,34.62-7,69.42-2.54,103.85q.89,13,2.49,26c1,8.66,2.39,17.43,2.92,26.31a186.92,186.92,0,0,1,.1,26.55,109.74,109.74,0,0,1-1.8,13.18,56.64,56.64,0,0,1-3.91,12.82" />
            <path d="M398.17,701.16a205.11,205.11,0,0,0,26.4-18.59,84.55,84.55,0,0,0,11-10.88c1.78-1.94,2.63-4,4.53-6.14a6.19,6.19,0,0,1,4.29-2,10.08,10.08,0,0,1,4.69,1,36.56,36.56,0,0,1,7.16,4.44c2.16,1.63,4.22,3.33,6.28,5,4.08,3.39,8.06,6.84,12.25,10.08a84.06,84.06,0,0,0,13.41,8.86,43.94,43.94,0,0,0,16.06,5v.19a42.4,42.4,0,0,1-8.75-1.11,53.18,53.18,0,0,1-8.16-2.9,81.38,81.38,0,0,1-14.2-8.6c-4.34-3.24-8.36-6.7-12.33-10.17s-7.87-7.08-12.62-9.42c-2.37-1.2-5.1-1.3-6.7.53-1.55,1.64-2.81,4.12-4.59,6a87.31,87.31,0,0,1-11.46,10.86,209.25,209.25,0,0,1-27.12,18.07Z" />
            <path d="M313.59,725.23a257.31,257.31,0,0,0,33.07-23.15,106.24,106.24,0,0,0,13.81-13.59c2.23-2.41,3.34-5,5.67-7.65a7.49,7.49,0,0,1,5.21-2.42,12.31,12.31,0,0,1,5.72,1.22,45.25,45.25,0,0,1,8.87,5.53c2.69,2,5.25,4.16,7.81,6.29,5.09,4.25,10.06,8.56,15.32,12.6a105.19,105.19,0,0,0,16.84,11,54.66,54.66,0,0,0,20.17,6.09v.19a52.93,52.93,0,0,1-10.89-1.46A66.69,66.69,0,0,1,425,716.26a102.26,102.26,0,0,1-17.63-10.78c-5.4-4-10.43-8.37-15.4-12.7-2.49-2.15-5-4.3-7.57-6.35a42.66,42.66,0,0,0-8.3-5.42,10.15,10.15,0,0,0-4.68-1.12,5.63,5.63,0,0,0-4,1.83c-2,2.11-3.5,5.15-5.72,7.46a108.63,108.63,0,0,1-14.26,13.57,261,261,0,0,1-33.79,22.63Z" />
            <path d="M476.9,685.94a173.92,173.92,0,0,0,22.39-15.84,72.08,72.08,0,0,0,9.33-9.25c1.52-1.65,2.2-3.34,3.85-5.24a5.43,5.43,0,0,1,3.74-1.75,8.78,8.78,0,0,1,4.06.85c4.62,2.15,7.92,5.23,11.48,8s6.86,5.81,10.41,8.57a72.33,72.33,0,0,0,11.34,7.55,37.6,37.6,0,0,0,13.59,4.31v.19a36.3,36.3,0,0,1-7.47-.89,45.84,45.84,0,0,1-7-2.44,69.29,69.29,0,0,1-12.13-7.3c-3.7-2.76-7.13-5.7-10.49-8.66s-6.68-6-10.67-8c-2-1-4.19-1.1-5.53.41-1.29,1.35-2.39,3.49-3.9,5a74.28,74.28,0,0,1-9.78,9.23A178.57,178.57,0,0,1,477,686.1Z" />
          </g>
          <text className="map-headline" transform="translate(733.45 64.76)">
            י"א הנקודות בגנב
          </text>
          <text
            className="map-places-text-medium"
            transform="translate(256.97 356.59)"
          >
            עזה
          </text>
          <text className="map-places-text" transform="translate(555.6 295.75)">
            קרית גת
          </text>
          <text
            className="map-places-text"
            transform="translate(397.22 356.22)"
          >
            שדרות
          </text>
          <text className="map-places-text" transform="translate(397.6 464.09)">
            נתיבות
          </text>
          <line
            className="black-map-line"
            x1="360.43"
            y1="11.55"
            x2="824"
            y2="11.55"
          />
          <line
            className="black-map-line"
            x1="180"
            y1="881.55"
            x2="643"
            y2="881.55"
          />
        </svg>

        <div className="drop-cont">
          {Text[props.questionNum]["answers"].map((name, index) => {
            return (
              <DropTarget
                targetKey={`city${index}`}
                key={index}
                onHit={handleDrop}
              >
                <div className={`drop-city drop${index}`}>
                  {data[index] === 1 ? (
                    <div className={` city${index} placed`}>{name}</div>
                  ) : (
                    <div className={`placed`}></div>
                  )}
                </div>
              </DropTarget>
            );
          })}
        </div>
      </div>

      {isNext === false ? (
        <div className="city-container">
          {Text[props.questionNum]["answers"].map((name, index) => {
            return (
              <DragDropContainer
                targetKey={`city${index}`}
                key={index}
                dragData={{ name: { name }, index: { index } }}
              >
                <div className={`city-drag city${index}`}>{name}</div>
              </DragDropContainer>
            );
          })}
        </div>
      ) : (
        <div className="cheack-cont">
          <div className="cheack-btn btn" onClick={props.changeQuestion}>
            המשך
          </div>
        </div>
      )}
    </div>
  );
}

export default Map;
