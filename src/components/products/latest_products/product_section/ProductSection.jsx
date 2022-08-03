import React from "react";
import SingleProductSection from "./SingleProductSection";


const ProductSection = (props) => {
  const {heading, slide_products} = props
  return (
    <div className="col-lg-4 col-md-6">
      <div className="latest-product__text">
        <h4>{heading}</h4>
        <SingleProductSection products={slide_products} />
      </div>
    </div>
  );
};

export default ProductSection;
