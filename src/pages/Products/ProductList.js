import React from "react";
import HeroHeader from "../../components/common/hero/HeroHeader";
import ProductCards from "../../components/products/product_cards/ProductCards";
import image from "../../images/featured/feature-1.jpg";

const ProductList = () => {
  return (
    <>
      <HeroHeader />
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Product</h2>
              </div>
            <ProductCards></ProductCards>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
