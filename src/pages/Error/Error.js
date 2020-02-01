import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Error extends Component {
  render() {
    return (
      <div className="error_page">
        <h1>404 Error! this page does not exist.</h1>
        <Link to="/" className="my-link">
          go back to homepage
        </Link>
      </div>
    );
  }
}

export default Error;
