import React from "react";
import SingleProductCard from "./SingleProductCard";

//image
import feat_1 from "../../../images/featured/feature-1.jpg";
import feat_2 from "../../../images/featured/feature-2.jpg";
import feat_3 from "../../../images/featured/feature-3.jpg";
import feat_4 from "../../../images/featured/feature-4.jpg";
import feat_5 from "../../../images/featured/feature-5.jpg";
import feat_6 from "../../../images/featured/feature-6.jpg";
import feat_7 from "../../../images/featured/feature-7.jpg";
import feat_8 from "../../../images/featured/feature-8.jpg";

const products = [
  {
    id: 1,
    name: "Crab Pool Security",
    price: "$30.00",
    img: feat_1,
    category: "oranges fresh-meat",
  },
  {
    id: 2,
    name: "Crab Pool Security",
    price: "$30.00",
    img: feat_2,
    category: "vegetables fastfood",
  },
  {
    id: 3,
    name: "Crab Pool Security",
    price: "$30.00",
    img: feat_3,
    category: "vegetables fresh-meat",
  },
  {
    id: 4,
    name: "Crab Pool Security",
    price: "$30.00",
    img: feat_4,
    category: "fastfood oranges",
  },
  {
    id: 5,
    name: "Crab Pool Security",
    price: "$30.00",
    img: feat_5,
    category: "fresh-meat vegetables",
  },
  {
    id: 6,
    name: "Crab Pool Security",
    price: "$30.00",
    img: feat_6,
    category: "oranges fastfood",
  },
  {
    id: 7,
    name: "Crab Pool Security",
    price: "$30.00",
    img: feat_7,
    category: "fresh-meat vegetables",
  },
  {
    id: 8,
    name: "Crab Pool Security",
    price: "$30.00",
    img: feat_8,
    category: "fastfood vegetables",
  },
];

const ProductCards = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6">
        {products.map((product) => {
          const { id, name, img, price } = product;
          return (
            <SingleProductCard key={id} name={name} image={img} price={price} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductCards;
