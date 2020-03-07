import React, { Component } from "react";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar";

export class About extends Component {
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
      <div className="about achievements">
        <Navbar />
        <h1>about page</h1>
        <ul className="products">
          {this.props.departments.map(elem => (
            <li key={elem.name} className="product">
              <img src={elem.img} alt={elem.img_alt} />
              <h3>{elem.name}</h3>
              <p style={{ marginBottom: "10px" }}>{elem.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default About;
