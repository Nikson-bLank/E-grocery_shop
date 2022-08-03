/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const SingleFeaturedProduct = (props) => {
   const {name, price, link, image, filter_category } = props

  return (
    <div className={`col-lg-3 col-md-4 col-sm-6 mix ${filter_category}`}>
    <div className="featured__item">
        <div className="featured__item__pic set-bg" data-setbg={image}>
            <ul className="featured__item__pic__hover">
                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
            </ul>
        </div>
        <div className="featured__item__text">
            <h6><a href={link}>{name}</a></h6>
            <h5>{price}</h5>
        </div>
    </div>
</div>
  )
}

export default SingleFeaturedProduct