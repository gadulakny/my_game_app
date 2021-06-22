import React from "react";
import Home from "./Routes/Home";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import GamePage from "./Routes/GamePage";
import "./index.css";
import EvaluationPage from "./Routes/EvaluationPage";

//footer Route 만들기

function App() {
  return (
    <div id="app" className="w-full h-full">
      <HashRouter>
        <Navigation />
        <Route path="/home" component={Home} />
        <Route path="/gamedetail/:id" component={GamePage} />
        <Route path="/games" component={EvaluationPage} />
        <footer></footer>
      </HashRouter>
    </div>
  );
}

export default App;
