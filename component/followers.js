import React, { Component } from "react";
import { render } from "react-dom";

export default class Followers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aList: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    this.callWeb();
  }

  callWeb() {
    var url =
      "https://api.github.com/" +
      "users/" +
      this.props.name +
      "/followers?per_page=100";
    {
      fetch(url)
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              isLoaded: true,
              aList: result
            });
            // console.log("working --> " + this.state.aList);
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
  }

  getData() {
    return this.state.aList.map(function(aObj) {
      return (
        <ul class="list-group list-group-flush" onClick={() => window.open(aObj.html_url, "_blank")} key={aObj.id}>
          <li class="list-group-item">
            <div class="row">
              <img
                src={aObj.avatar_url}
                alt={aObj.login}
                height="30"
                width="30"
              />
              &nbsp;&nbsp;
              <h5>{aObj.login}</h5>
            </div>
          </li>
        </ul>
      );
    });
  }

  render() {
    return (
      <div class="card bg-light" style={{ width: "18rem" }}>
        <div class="card-header">Followers</div>
        {this.getData()}
      </div>
    );
  }
}
