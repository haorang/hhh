/*App.js*/
import React, { Component } from "react";
import "./App.css";
import Home from "./Home.js"
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default App;