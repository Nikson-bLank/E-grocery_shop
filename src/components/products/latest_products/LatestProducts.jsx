import React from "react";
import ProductSection from "./product_section/ProductSection";

//image imports


import latest_product_1 from "../../../images/latest-product/lp-1.jpg";
import latest_product_2 from "../../../images/latest-product/lp-2.jpg";
import latest_product_3 from "../../../images/latest-product/lp-3.jpg";

const latestProducts = [
  {
    id: 1,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: latest_product_1,
  },
  {
    id: 2,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: latest_product_2,
  },
  {
    id: 3,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: latest_product_3,
  },
];
const ReviewProducts = [
  {
    id: 1,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: latest_product_1,
  },
  {
    id: 2,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: latest_product_2,
  },
  {
    id: 3,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: latest_product_3,
  },
];
const TopRatedProducts = [
  {
    id: 1,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: latest_product_1,
  },
  {
    id: 2,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: latest_product_2,
  },
  {
    id: 3,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: latest_product_3,
  },
];

const LatestProducts = () => {
  return (
    <section className="latest-product spad">
      <div className="container">
        <div className="row">
          <ProductSection heading="Latest Products" slide_products={latestProducts} />
          <ProductSection heading="Top Rated Products" slide_products={latestProducts} />
          <ProductSection heading="Review Products" slide_products={latestProducts} />
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
