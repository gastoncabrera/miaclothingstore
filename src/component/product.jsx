import React from "react";
import "../sass/pages/home.scss";
import PercentajeOffer from "./PercentajeOffer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addShop } from "../redux/actions/action";
import { add_buy } from "../redux/actions/action";
import { Component } from "react";
import ProductDescription from "../pages/ProductDescription";
class Product extends Component {
  render() {
    const { products } = this.props;

    const {
      id,
      images,
      offerPricePrice,
      normalPrice,
      sizes,
      title,
      offerPrice,
    } = products;
    const handleAddShop = () => {
      this.props.addShop({
        id,
        title,
        images,
        offerPricePrice,
        normalPrice,
        sizes,
      });
    };
    return (
      <div className="product__container">
        <Link to="/producto">
          <img
            src={images}
            alt="remera"
            className="product__image"
            onClick={() => this.props.addShop({ products })}
          />
        </Link>

        {offerPrice ? (
          <span className="product__off">
            <PercentajeOffer
              props={Math.round((offerPricePrice * 100) / normalPrice) - 100}
            />
            %
          </span>
        ) : (
          true
        )}
        <div className="product__cart" onClick={handleAddShop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            fill="currentColor"
            className="shopping-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
        </div>
        <p className="product__title">{title}</p>
        <div className="product__price">
          {offerPricePrice ? (
            <p className="product__offerprice">${offerPricePrice}</p>
          ) : (
            true
          )}
          <p className="product__normalprice">${normalPrice}</p>
        </div>
        <span className="product__size">Talles: {sizes}</span>
      </div>
    );
  }
}
const mapDispatchToProps = {
  addShop,
  add_buy,
};
export default connect(null, mapDispatchToProps)(Product);
