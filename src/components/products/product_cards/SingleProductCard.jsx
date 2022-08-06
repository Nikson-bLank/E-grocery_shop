import React from 'react'
const SingleProductCard = ({name, price , image}) => {
  return (
    <div className="featured__item">
    <div
      className="featured__item__pic set-bg"
      data-setbg={image}
    >
      <ul className="featured__item__pic__hover">
        <li>
          <a href="#">
            <i className="fa fa-heart"></i>
          </a>
        </li>
        {/* <li><a href="#"><i className="fa fa-retweet"></i></a></li> */}
        <li>
          <a href="#">
            <i className="fa fa-shopping-cart"></i>
          </a>
        </li>
      </ul>
    </div>
    <div className="featured__item__text">
      <h6>
        <a href="#">{name}</a>
      </h6>
      <h5>{price}</h5>
    </div>
  </div>
  )
}

export default SingleProductCard