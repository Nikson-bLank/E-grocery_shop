import React from "react";

const SingleProductSlider = ({ products }) => {
  return (
    <div className="latest-prdouct__slider__item">
      {products.map((product) => {
        const { id, name, price, link, img } = product;
        return (
          <a key={id} href={link} className="latest-product__item">
            <div className="latest-product__item__pic">
              <img src={img} alt="" />
            </div>
            <div className="latest-product__item__text">
              <h6>{name}</h6>
              <span>{price}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

const SingleProductSection = ({products}) => {
  return (
    <div className="latest-product__slider owl-carousel">
      <SingleProductSlider products={products} />
    </div>
  );
};

export default SingleProductSection;
