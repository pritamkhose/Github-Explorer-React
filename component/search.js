import React, { Component } from "react";
import { render } from "react-dom";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: "pritamkhose",
      page: 1,
    };
  }

  callWeb() {
    var url = "https://api.github.com/search/users?q=" + this.state.name + '&page='+ this.state.page; 
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

  showUser() {
    return (
      <div
        onClick={() => this.showCard()}
        class="w3-container w3-margin example-card"
      >
        <mat-card-header>
          <img src={aObj.avatar_url} alt={aObj.login} height="30" width="30" />
          <mat-card-title>{aObj.login}</mat-card-title>
        </mat-card-header>
      </div>
    );
  }

  render() {
    return (
      <div>
        <header>
          <mat-card-title>
            <mat-form-field class="example-full-width">
              <input
                type="text"
                placeholder="Search"
                id="searchModel"
              />
              <button
                aria-label="Clear"
                onClick={() => this.searchModel()}
              >
                <mat-icon>close</mat-icon>
              </button>
            </mat-form-field>
            <span>&nbsp;&nbsp;</span>
            <button
              color="primary"
              onClick={() => this.callWeb()}
            >
              Search
            </button>
          </mat-card-title>
        </header>
      </div>
    );
  }
}

        // <div class="row" style="padding-left: 30px;">
        //   <p class="pstyle" color="normal" onClick={() => this.pagination()}>
        //     {" "}
        //     {aNo}{" "}
        //   </p>
        // </div>