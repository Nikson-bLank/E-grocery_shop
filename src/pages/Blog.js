import React from 'react'
import BlogCards from '../components/blog/BlogCards'

const Blog = () => {
  return (
    <section className="from-blog spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-title from-blog__title">
                              <h2>From The Blog</h2>
                          </div>
                      </div>
                  </div>
                  <BlogCards />
              </div>
          </section>
  )
}

export default Blog