import React from 'react'

import "./Article.css"

const Article = ({ img, date, title, read }) => {
  return (
    <>
      <div className="blog-container-article" id='Library'>
        <div className="blog-container-article-image">
          <img src={img} alt="blog img" />
        </div>
        <div className="blog-container-article-content">
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <p>{read}</p>
        </div>
      </div>
    </>
  )
}

export default Article
