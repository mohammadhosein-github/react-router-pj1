import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Product extends Component {
  render() {
    console.log(this.props.products);
    return (
      <ul className="products">
        {this.props.products.map(elem => (
          <li key={elem.name} className="product">
            <img src={elem.img} alt={elem.img_alt} />
            <h3>{elem.name}</h3>
            <p>{elem.description}</p>
            <Link to={elem.link} className="my-link">
              read more
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Product;
