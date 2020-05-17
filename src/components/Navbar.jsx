import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar  navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Bs-detector
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
