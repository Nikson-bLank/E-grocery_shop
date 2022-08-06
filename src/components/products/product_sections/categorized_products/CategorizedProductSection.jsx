import React from "react";
import ProductSectionCategory from "./categorized_product_section/ProductSectionCategory";

//image imports


import latest_product_1 from "../../../../images/latest-product/lp-1.jpg";
import latest_product_2 from "../../../../images/latest-product/lp-2.jpg";
import latest_product_3 from "../../../../images/latest-product/lp-3.jpg";

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
          <ProductSectionCategory heading="Latest Products" slide_products={latestProducts} />
          <ProductSectionCategory heading="Top Rated Products" slide_products={TopRatedProducts} />
          <ProductSectionCategory heading="Review Products" slide_products={ReviewProducts} />
        </div>
      </div>
    </section>
    
  );
};

export default LatestProducts;
