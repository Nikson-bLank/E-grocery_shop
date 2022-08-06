import React from 'react'

// Image import

import banner_1 from "../../images/banner/banner-1.jpg"
import banner_2 from "../../images/banner/banner-2.jpg"

const Banner = () => {
  return (
    <div className="banner">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                    <img src={banner_1} alt="" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                    <img src={banner_2} alt="" />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Banner