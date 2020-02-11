import React, { Component } from "react";
import { render } from "react-dom";

import Repositories from "./repositories";
import Stars from "./stars";
import Followers from "./followers";
import Following from "./following";
import Profile from "./profile";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "pritamkhose"
    };
  }

  render() {
    return (
      <div>
        <Profile name={this.state.name} />
        <div class="row">
          <div class="col-sm-3">
            <Following name={this.state.name} />
            <p />
            <Followers name={this.state.name} />
          </div>

          <div class="col-sm-8">
            <Repositories name={this.state.name} />
            <br />
            <Stars name={this.state.name} />
          </div>
        </div>
      </div>
    );
  }
}
