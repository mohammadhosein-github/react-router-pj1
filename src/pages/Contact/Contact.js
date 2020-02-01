import React, { Component } from "react";
import Navbar from "../Navbar";

export class Contact extends Component {
  state = {
    email_address: "",
    show_warning: false,
    valid_submit: false
  };

  handle_input = e => {
    let email_address = e.target.value;
    this.setState({ email_address });
  };

  is_valid = () => {
    if (
      this.state.email_address.includes("@") &&
      !this.state.email_address.includes(" ")
    ) {
      this.setState({ valid_submit: true });
      setTimeout(() => {
        this.setState({ valid_submit: false });
      }, 4000);
      return true;
    } else {
      this.setState({
        show_warning: true
      });
      setTimeout(() => {
        this.setState({ show_warning: false });
      }, 2500);
      return false;
    }
  };

  handle_submit = e => {
    e.preventDefault();
    const valid_input = this.is_valid();
    if (valid_input === true) {
      this.setState({ email_address: "" });
    }
  };
  render() {
    return (
      <div className="contact">
        <Navbar />
        <div className="form-container">
          <h3>how you can build the future with us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit obcaecati hic natus magni, saepe iure quisquam iste
            suscipit iusto eius repudiandae unde praesentium eaque culpa labore
            non consequatur expedita atque, id excepturi sunt sapiente! Facilis,
            deserunt laudantium! Esse impedit vel commodi cupiditate omnis
            pariatur quod tenetur sit praesentium non. Delectus.
          </p>
          <form onSubmit={this.handle_submit}>
            <div className="email">
              <input
                type="text"
                name="email-field"
                autoComplete="off"
                value={this.state.email_address}
                onChange={this.handle_input}
              />
              <label
                htmlFor="email-field"
                className={this.state.email_address ? "stay-above" : ""}
              >
                Your Email
              </label>
            </div>
            <button type="submit" onClick={this.handle_submit}>
              Join Now
            </button>
          </form>
          <p className="email-description">
            We will send an email with everything you need to know shortly.
          </p>
        </div>
        <div
          className={
            this.state.show_warning === false
              ? "email-warning"
              : "email-warning show"
          }
        >
          <span>your email address is not valid! try again.</span>
        </div>
        <div
          className={
            this.state.valid_submit === false
              ? "email-warning"
              : "email-warning show"
          }
        >
          <span>now check your emails.</span>
        </div>
      </div>
    );
  }
}

export default Contact;
