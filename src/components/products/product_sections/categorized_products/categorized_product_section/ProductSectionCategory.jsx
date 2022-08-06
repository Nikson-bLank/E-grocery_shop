import React from "react";
import SingleProductSectionCategory from "./SingleProductSectionCategory";


const ProductSectionCategory = (props) => {
  const {heading, slide_products} = props
  return (
    <div className="col-lg-4 col-md-6">
      <div className="latest-product__text">
        <h4>{heading}</h4>
        <SingleProductSectionCategory products={slide_products} />
      </div>
    </div>
  );
};

export default ProductSectionCategory;
