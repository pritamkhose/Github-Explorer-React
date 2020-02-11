import React, { Component } from "react";
import { render } from "react-dom";

import Hello from "./Hello";
import Home from "./component/home";
import Search from "./component/search";

import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "pritamkhose"
    };
  }

  render() {
    return (
      <div>
        <Search name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
