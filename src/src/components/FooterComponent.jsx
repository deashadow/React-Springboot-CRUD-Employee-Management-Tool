import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="page-footer font-small special-color-dark pt-4">
          <div className="container-fluid1 text-center text-md-left">
            <div className="row">
              <div className="col-md-3 mt-md-0 mt-3">
                <h5 className="text-uppercase">Ronald Rendessy</h5>
                <p> Full Stack Web Developer</p>
                <a href="https://sflluxuryhomesearch.com/"></a>
              </div>
            </div>
            <div className="footer-copyright text-center py-3">
              © 2020 Copyright: RR <br></br>
              <a href="https://sflluxuryhomesearch.com/"> RR.com</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
