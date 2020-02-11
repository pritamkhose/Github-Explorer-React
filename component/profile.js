import React, { Component } from "react";
import { render } from "react-dom";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aUserInfo: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.callWeb();
  }

  callWeb() {
    var url = "https://api.github.com/" + "users/" + this.props.name;
    {
      fetch(url)
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              isLoaded: true,
              aUserInfo: result
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

  render() {
    var aUserInfo = this.state.aUserInfo;
    return (
      <header style={{marigin : "10px"}} >
        {aUserInfo != undefined && aUserInfo != null ? (
          <div class="row">
            <div class="row col-sm-4">
              <div class="col-lg-1 col-centered">
                <img
                  src={aUserInfo.avatar_url}
                  alt={aUserInfo.name}
                  height="150"
                  width="150"
                  style={{ align: "center" }}
                />
              </div>
            </div>
            <div class="col-sm-4">
              <mat-card-header>
                <h3>{aUserInfo.name}</h3>
                <br />
                <mat-card-subtitle>{aUserInfo.bio}</mat-card-subtitle>
                <br />
                <mat-card-subtitle>
                  <br />
                  <p align="left">
                    <a routerLink="/repositories/{aUserInfo.login}">
                      <i
                        class="far fa-file-code"
                        style={{ fontSize: "16px", color: "indigo" }}
                      >
                        &nbsp;{aUserInfo.public_repos}
                      </i>
                    </a>
                    &nbsp;&nbsp;
                    <i
                      class="far fa-window-maximize"
                      style={{ fontSize: "16px", color: "teal" }}
                    >
                      &nbsp;{aUserInfo.public_gists}
                    </i>
                    &nbsp;&nbsp;
                    <a routerLink="/followers/{aUserInfo.login}">
                      <i
                        class="fas fa-user-plus"
                        style={{ fontSize: "16px", color: "lime" }}
                      >
                        &nbsp;{aUserInfo.followers}
                      </i>
                    </a>
                    &nbsp;&nbsp;
                    <a routerLink="/following/{aUserInfo.login}">
                      <i
                        class="fas fa-user-friends"
                        style={{ fontSize: "16px", color: "cyan" }}
                      >
                        &nbsp;{aUserInfo.following}
                      </i>
                    </a>
                    &nbsp;
                    <a routerLink="/stars/{aUserInfo.login}">
                      <i
                        class="far fa-star"
                        style={{ fontSize: "16px", color: "orange" }}
                      />
                    </a>
                  </p>
                </mat-card-subtitle>
              </mat-card-header>
            </div>
            <div class="col-sm-4">
              <mat-card-content>
                {aUserInfo.email != undefined ? (
                  <p align="left">
                    <i
                      class="far fa-envelope"
                      style={{ fontSize: "16px", color: "teal" }}
                    >
                      &nbsp;&nbsp;Email : {aUserInfo.email}
                    </i>
                  </p>
                ) : null}
                {aUserInfo.location != undefined ? (
                  <p align="left">
                    <i
                      class="far fa-flag"
                      style={{ fontSize: "16px", color: "teal" }}
                    >
                      &nbsp;&nbsp;Location : {aUserInfo.location}
                    </i>
                  </p>
                ) : null}
                {aUserInfo.blog != undefined ? (
                  <p align="left">
                    <i
                      class="far fa-comment-alt"
                      style={{ fontSize: "16px", color: "teal" }}
                    >
                      &nbsp;&nbsp;Blog : {aUserInfo.blog}
                    </i>
                  </p>
                ) : null}
                <p align="left">
                  <i
                    class="far fa-calendar-check"
                    style={{ fontSize: "16px", color: "teal" }}
                  >
                    &nbsp;&nbsp;Created at : {aUserInfo.created_at}
                  </i>
                </p>
                <p align="left">
                  <i
                    class="far fa-clock"
                    style={{ fontSize: "16px", color: "teal" }}
                  >
                    &nbsp;&nbsp;Last updated at : {aUserInfo.updated_at}
                  </i>
                </p>
              </mat-card-content>
            </div>
          </div>
        ) : <p> Invalid Username</p>}
      </header>
    );
  }
}
