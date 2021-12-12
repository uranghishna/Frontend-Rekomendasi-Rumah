import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizSummary from "./pages/QuizSummary";
import NavbarComp from "./components/NavbarComp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {

  return(
    <div>
      <Router>
      <div>
        <NavbarComp />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/summary" component={QuizSummary} />
        </Switch>
      </div>
    </Router>
    
    </div>
  );
};

export default App;

