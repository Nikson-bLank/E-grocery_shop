import React from 'react'

const SingleBlogCard = (props) => {
    const {title, description, comments, date, image, link} = props
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
    <div className="blog__item">
      <div className="blog__item__pic">
        <img src={image} alt="" />
      </div>
      <div className="blog__item__text">
        <ul>
          <li>
            <i className="fa fa-calendar-o"></i> {date}
          </li>
          <li>
            <i className="fa fa-comment-o"></i> {comments}
          </li>
        </ul>
        <h5>
          <a href={link}>{title}</a>
        </h5>
        <p>
         {description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default SingleBlogCard