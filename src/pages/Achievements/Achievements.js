import React, { Component } from "react";
import Navbar from "../Navbar";
import Product from "./Products/Product";

export class Achievements extends Component {
  render() {
    return (
      <div className="achievements">
        <Navbar />
        <h1>achievements</h1>
        <Product products={this.props.products} />
      </div>
    );
  }
}

export default Achievements;
