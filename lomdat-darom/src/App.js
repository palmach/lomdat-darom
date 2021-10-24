import "./App.css";
import React, { useState } from "react";
import FirstPage from "./Container/firstPage/FirstPage";
import QuizzPart from "./Container/quizzPart/QuizzPart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [pageNum, setPageNum] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <FirstPage pageNum={pageNum} setPageNum={setPageNum} />
          </Route>
          <Route exact path="/questions">
            <QuizzPart
              pageNum={pageNum}
              setPageNum={setPageNum}
              questionNum={questionNum}
              setQuestionNum={setQuestionNum}
            />
          </Route>
          <Route exact path="/end"></Route>
        </Switch>
      </Router>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
