import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import React from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Main from "./pages/main-page/main-page";
import SecondOpinion from "./pages/sop/sop";
import HomeMonitoring from "./pages/hmp/hmp";
import Suvorov from "./pages/suvorov/suvorov";
import InfoDesign from "./pages/info-design/info-design";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/projects/sop" component={SecondOpinion}/>
        <Route exact path="/projects/hmp" component={HomeMonitoring}/>
        <Route exact path="/projects/suvorov-park" component={Suvorov}/>
        <Route exact path="/projects/info-design" component={InfoDesign}/>
      </Switch>
    </Router>
  );
}

export default App;
