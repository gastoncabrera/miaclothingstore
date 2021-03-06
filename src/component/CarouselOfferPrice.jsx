import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Product from "./product";
import { productsPopulated } from "../const";
import "../sass/pages/productsList.scss";

class CarouselOfferPrice extends Component {
  state = {
    items: [
      { id: 1, title: "item #1" },
      { id: 2, title: "item #2" },
      { id: 3, title: "item #3" },
      { id: 4, title: "item #4" },
      { id: 5, title: "item #5" },
    ],
  };

  render() {
    const breakPoints = [
      { width: 500, itemsToShow: 1 },
      { width: 600, itemsToShow: 2 },
      { width: 800, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
    const offerPrice = productsPopulated.filter((x) => x.offerPrice === true);

    return (
      <Carousel breakPoints={breakPoints}>
        {offerPrice.map((props) => (
          <Product product={props} key={props.id} />
        ))}
      </Carousel>
    );
  }
}
export default CarouselOfferPrice;
