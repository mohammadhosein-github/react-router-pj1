import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../media/logo.gif";

export class Navbar extends Component {
  state = {
    show_logo: window.location.pathname === "/"
  };

  handle_logo = () => {
    window.location.pathname === "/"
      ? this.setState({ show_logo: true })
      : this.setState({ show_logo: false });
  };

  render() {
    return (
      <div className="my-navbar">
        <Link to="/">
          <img
            src={Logo}
            alt="DABP logo"
            className={
              this.state.show_logo === false ? "site-logo hidden" : "site-logo"
            }
          />
        </Link>
        <ul>
          <li onClick={this.handle_logo}>
            <i className="lab la-cloudsmith"></i>
            <Link to="/" className="my-link">
              Home
            </Link>
          </li>
          <li onClick={this.handle_logo}>
            <i className="las la-microscope"></i>
            <Link to="/achievements" className="my-link">
              Achievements
            </Link>
          </li>
          <li onClick={this.handle_logo}>
            <i className="las la-info-circle"></i>
            <Link to="/about" className="my-link">
              About
            </Link>
          </li>
          <li onClick={this.handle_logo}>
            <i className="las la-users"></i>
            <Link to="/join-us" className="my-link">
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
