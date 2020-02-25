import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Example from "../Components/Example";
import Header from "../Components/Header";
import Users from "../Components/Users";

//Style
import { AppWrapper } from "./style";

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Example />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
