import React, { Component } from "react";
import { render } from "react-dom";

// https://stackoverflow.com/questions/27176838/reactjs-setstate-is-slow

export default class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      aList: [],
      isStyleGrid: true,
      perpage: 30,
      sort: "updated",
      desc: "desc",
      isLoaded: false
    };
    this.toggleView = this.toggleView.bind(this);
    this.toggleOrder = this.toggleOrder.bind(this);
    this.changeperpage = this.changeperpage.bind(this);
    this.changesort = this.changesort.bind(this);
  }

  componentDidMount() {
    this.callWeb();
  }

  toggleView = () => {
    this.setState({ isStyleGrid: !this.isStyleGrid });
    if (this.state.isStyleGrid) {
      this.setState({ isStyleGrid: false });
    } else {
      this.setState({ isStyleGrid: true });
    }
  };

  toggleOrder = () => {
    if (this.state.desc == "asc") {
      this.setState({ desc: "desc" }, () => {
        this.callWeb();
      });
    } else {
      this.setState({ desc: "asc" }, () => {
        this.callWeb();
      });
    }
  };

  changesort = () => {
    this.setState({ sort: event.target.value }, () => {
      this.callWeb();
    });
  };

  changeperpage = () => {
    this.setState({ perpage: event.target.value }, () => {
      this.callWeb();
    });
  };

  callWeb() {
    // console.log(
    //   this.props.name,
    //   this.state.sort,
    //   this.state.perpage,
    //   this.state.desc
    // );
    var url =
      "https://api.github.com/" +
      "users/" +
      this.props.name +
      "/starred?sort=" +
      this.state.sort +
      "&per_page=" +
      String(this.state.perpage) +
      "&direction=" +
      this.state.desc;
    // if (!this.state.isLoaded) 
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
    // else {
    //   console.log("working in progress --> " + url);
    // }
  }

  getGrid() {
    return (
      <div class="row w3-margin">
        {this.state.aList.map(function(aObj) {
          return (
            <mat-card
              class=".mat-card example-card w3-margin col-sm-5"
              style={{background: "#fff;"}}
              key={aObj.id}
              onClick={() => window.open(aObj.html_url, "_blank")}
            >
              <mat-card-header>
                <mat-card-title>{aObj.name}</mat-card-title>
                <mat-card-subtitle>{aObj.description}</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fas fa-code-branch" style={{ color: "indigo" }}>
                  &nbsp;{aObj.forks}
                </i>{" "}
                &nbsp;&nbsp;
                <i class="far fa-star" style={{ color: "orange" }}>
                  &nbsp;{aObj.stargazers_count}
                </i>
                &nbsp;&nbsp;&nbsp;
                <i class="fas fa-glasses" style={{ color: "cyan" }}>
                  &nbsp;{aObj.watchers}
                </i>
                &nbsp;&nbsp;&nbsp;
                <i class="far fa-circle" style={{ color: "lime" }}>
                  &nbsp;{aObj.language}
                </i>
                &nbsp;&nbsp;&nbsp;
                <p align="right">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="far fa-calendar-alt" style={{ color: "teal" }}>
                    &nbsp;&nbsp;{aObj.updated_at}
                  </i>
                </p>
              </mat-card-content>
            </mat-card>
          );
        })}
      </div>
    );
  }

  getList() {
    return (
      <div class="row w3-margin">
        <div class="table-responsive-sm">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Language</th>
                <th>Forks</th>
                <th>Stars</th>
                <th>Watchers</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {this.state.aList.map(function(aObj, i) {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td onClick={() => window.open(aObj.html_url, "_blank")}>{aObj.name}</td>
                    <td onClick={() => window.open(aObj.html_url, "_blank")}>{aObj.description}</td>
                    <td>{aObj.language}</td>
                    <td>{aObj.forks}</td>
                    <td>{aObj.stargazers_count}</td>
                    <td>{aObj.watchers}</td>
                    <td>{aObj.updated_at}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="card bg-light">
          <div className="card-header">
            <div style={{ width: "50%", float: "left" }}>Stars</div>
            <div style={{ width: "50%", float: "right", textAlign: "end" }}>
              <span>
                Sort
                <select
                  id="sort"
                  onChange={this.changesort}
                  value={this.state.sort}
                >
                  <option value="created">Created</option>
                  <option value="full_name">Name</option>
                  <option value="pushed">Pushed</option>
                  <option value="updated">Updated</option>
                </select>
              </span>{" "}
              &nbsp;&nbsp;
              <span onClick={this.toggleOrder}>
                {this.state.desc == "asc" ? (
                  <i
                    className="far fa-hand-point-up"
                    style={{ color: "#007bff" }}
                  />
                ) : (
                  <i
                    className="far fa-hand-point-down"
                    style={{ color: "#007bff" }}
                  />
                )}
              </span>{" "}
              &nbsp;&nbsp;
              <span>
                Per Page
                <select
                  id="perpage"
                  onChange={this.changeperpage}
                  value={this.state.perpage}
                >
                  <option value="10">10</option>
                  <option value="30">30</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="300">300</option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                </select>
              </span>{" "}
              &nbsp;&nbsp;
              <span onClick={this.toggleView}>
                {!this.state.isStyleGrid ? (
                  <i className="fa fa-th" style={{ color: "#007bff" }} />
                ) : (
                  <i className="fa fa-th-list" style={{ color: "#007bff" }} />
                )}
              </span>
            </div>
          </div>
          {this.state.isStyleGrid ? this.getGrid() : this.getList()}
        </div>
      </div>
    );
  }
}

const italicFontSize = {
  fontSize: "16px"
};
