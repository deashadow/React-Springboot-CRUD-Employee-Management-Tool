import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div class="navbar-header">
              <a
                class="navbar-brand"
                href="https://www.sflluxuryhomesearch.com"
              >
                Employee Management Tool
              </a>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class=" navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/posts/">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/authors">
                    Info
                  </a>
                </li>

                <Link to="/ContactUs">
                  <li className="nav-link">ContactUs</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
