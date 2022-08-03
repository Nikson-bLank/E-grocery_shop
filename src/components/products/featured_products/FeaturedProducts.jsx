/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

//images import
import feat_1 from "../../../images/featured/feature-1.jpg";
import feat_2 from "../../../images/featured/feature-2.jpg";
import feat_3 from "../../../images/featured/feature-3.jpg";
import feat_4 from "../../../images/featured/feature-4.jpg";
import feat_5 from "../../../images/featured/feature-5.jpg";
import feat_6 from "../../../images/featured/feature-6.jpg";
import feat_7 from "../../../images/featured/feature-7.jpg";
import feat_8 from "../../../images/featured/feature-8.jpg";

//component import
import SingleFeaturedProduct from "./SingleFeaturedProduct";

const featuredProducts = [
  {
    id: 1,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: feat_1,
    category: "oranges fresh-meat",
  },
  {
    id: 2,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: feat_2,
    category: "vegetables fastfood",
  },
  {
    id: 3,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: feat_3,
    category: "vegetables fresh-meat",
  },
  {
    id: 4,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: feat_4,
    category: "fastfood oranges",
  },
  {
    id: 5,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: feat_5,
    category: "fresh-meat vegetables",
  },
  {
    id: 6,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: feat_6,
    category: "oranges fastfood",
  },
  {
    id: 7,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: feat_7,
    category: "fresh-meat vegetables",
  },
  {
    id: 8,
    name: "Crab Pool Security",
    price: "$30.00",
    link: "#",
    img: feat_8,
    category: "fastfood vegetables",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Featured Product</h2>
            </div>
            <div className="featured__controls">
              <ul>
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".oranges">Oranges</li>
                <li data-filter=".fresh-meat">Fresh Meat</li>
                <li data-filter=".vegetables">Vegetables</li>
                <li data-filter=".fastfood">Fastfood</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          {featuredProducts.map((product) => {
            const { id, name, price, link, img, category } = product;
            // we can also spread all the key like this--> return <SingleFeaturedProduct {...product}></SingleFeaturedProduct>
            return (
              <SingleFeaturedProduct
                key={id}
                name={name}
                price={price}
                link={link}
                image={img}
                filter_category={category}
              ></SingleFeaturedProduct>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
