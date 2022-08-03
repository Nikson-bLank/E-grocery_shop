import React from "react";

//image imports
import blog_1 from "../../images/blog/blog-1.jpg";
import blog_2 from "../../images/blog/blog-2.jpg";
import blog_3 from "../../images/blog/blog-3.jpg";
import SingleBlogCard from "./SingleBlogCard";

const blogArticles = [
  {
    id: 1,
    date: "May 4,2019",
    commentsCount: "5",
    img: blog_1,
    link: "#",
    title: "Cooking tips make cooking simple",
    description:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat ",
  },
  {
    id: 2,
    date: "May 4,2019",
    commentsCount: "5",
    img: blog_2,
    link: "#",
    title: "6 ways to prepare breakfast for 30",
    description:
      " Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
  },
  {
    id: 3,
    date: "May 4,2019",
    commentsCount: "5",
    img: blog_3,
    link: "#",
    title: "Cooking tips make cooking simple",
    description:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat ",
  },
];

const BlogCards = () => {
  return (
    <div className="row">
      {blogArticles.map((blog) => {
        const { id, date, commentsCount, title, description, img, link } = blog;
        return (
          <SingleBlogCard
            key={id}
            date={date}
            comments={commentsCount}
            image={img}
            link={link}
            title={title}
            description={description}
          />
        );
      })}
      {/* <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="blog__item">
          <div className="blog__item__pic">
            <img src="assets/img/blog/blog-1.jpg" alt="" />
          </div>
          <div className="blog__item__text">
            <ul>
              <li>
                <i className="fa fa-calendar-o"></i> May 4,2019
              </li>
              <li>
                <i className="fa fa-comment-o"></i> 5
              </li>
            </ul>
            <h5>
              <a href="#">Cooking tips make cooking simple</a>
            </h5>
            <p>
              Sed quia non numquam modi tempora indunt ut labore et dolore
              magnam aliquam quaerat{" "}
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="blog__item">
          <div className="blog__item__pic">
            <img src="assets/img/blog/blog-2.jpg" alt="" />
          </div>
          <div className="blog__item__text">
            <ul>
              <li>
                <i className="fa fa-calendar-o"></i> May 4,2019
              </li>
              <li>
                <i className="fa fa-comment-o"></i> 5
              </li>
            </ul>
            <h5>
              <a href="#">6 ways to prepare breakfast for 30</a>
            </h5>
            <p>
              Sed quia non numquam modi tempora indunt ut labore et dolore
              magnam aliquam quaerat{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="blog__item">
          <div className="blog__item__pic">
            <img src="assets/img/blog/blog-3.jpg" alt="" />
          </div>
          <div className="blog__item__text">
            <ul>
              <li>
                <i className="fa fa-calendar-o"></i> May 4,2019
              </li>
              <li>
                <i className="fa fa-comment-o"></i> 5
              </li>
            </ul>
            <h5>
              <a href="#">Visit the clean farm in the US</a>
            </h5>
            <p>
              Sed quia non numquam modi tempora indunt ut labore et dolore
              magnam aliquam quaerat{" "}
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BlogCards;
