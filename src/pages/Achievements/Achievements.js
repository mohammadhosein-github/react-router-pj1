import React, { Component } from "react";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar";
import Product from "./Products/Product";

export class Achievements extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
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
