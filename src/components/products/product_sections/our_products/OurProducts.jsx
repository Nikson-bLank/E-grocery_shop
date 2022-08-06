import React from 'react'
//image imports
import cat_1 from "../../../../images/categories/cat-1.jpg";
import cat_2 from "../../../../images/categories/cat-2.jpg";
import cat_3 from "../../../../images/categories/cat-3.jpg";
import cat_4 from "../../../../images/categories/cat-4.jpg";
import cat_5 from "../../../../images/categories/cat-5.jpg";


const categories = [
    { id: 1, name: "Fresh Fruit", img: cat_1, link: "#" },
    { id: 2, name: "Dried Fruit", img: cat_2, link: "#" },
    { id: 3, name: "Vegetables", img: cat_3, link: "#" },
    { id: 4, name: "Fruit Drinks", img: cat_4, link: "#" },
    { id: 5, name: "Fresh Meat", img: cat_5, link: "#" },
  ];

const OurProducts = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Our Products</h2>
            </div>
            <div className="categories__slider owl-carousel">
              {categories.map((category) => {
                const { id, name, img, link } = category;
                return (
                  <div className="col-lg-3" key={id}>
                    <div className="categories__item set-bg" data-setbg={img}>
                      <h5>
                        <a href={link}>{name}</a>
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProducts