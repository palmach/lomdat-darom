import './App.css';
import React, { useState } from "react";
import FirstPage from './Container/firstPage/FirstPage';


function App() {

  const [pageNum, setPageNum] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
       <FirstPage pageNum={pageNum} setPageNum={setPageNum} />
      </header>
    </div>
  );
}

export default App;
