import React, { Component } from "react";
import { render } from "react-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <mdb-navbar SideClass="navbar navbar-expand-lg navbar-dark unique-color">
          <mdb-navbar-brand>
            <a
              class="navbar-brand"
              routerLink="/home"
              routerLinkActive="active"
            >
              My GitHub
            </a>
          </mdb-navbar-brand>

          <links>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item" ng-class="{ active: isActive('/home') }">
                <a
                  class="nav-link waves-light"
                  mdbWavesEffect
                  routerLink="/home"
                  routerLinkActive="active"
                >
                  {" "}
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link  waves-light"
                  mdbWavesEffect
                  routerLink="/profile"
                  routerLinkActive="active"
                >
                  User
                </a>
              </li>
            </ul>

            <ul class="navbar-nav ml-auto nav-flex-icons">
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://github.com/pritamkhose"
                >
                  <mdb-icon fab icon="github" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://www.linkedin.com/in/pritamkumar-khose-68a01653/"
                >
                  <mdb-icon fab icon="linkedin" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://www.instagram.com/p.khose"
                >
                  <mdb-icon fab icon="instagram" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://wa.me/919876543210"
                >
                  <mdb-icon fab icon="whatsapp" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://www.facebook.com/pritam.khose"
                >
                  <mdb-icon fab icon="facebook" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://twitter.com/PritamKhose"
                >
                  <mdb-icon fab icon="twitter" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="mailto:pritamkhose@gmail.com?Subject=Hello%20Pritam"
                >
                  <mdb-icon fab icon="google-plus" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <div class="btn-group" mdbDropdown>
                    <mdb-icon fas icon="user" mdbDropdownToggle />
                    <div class="dropdown-menu dropdown-menu-right dropdown-primary">
                      <a
                        class="dropdown-item"
                        routerLink="/profile"
                        routerLinkActive="active"
                      >
                        User
                      </a>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </links>
        </mdb-navbar>
      </div>
    );
  }
}
