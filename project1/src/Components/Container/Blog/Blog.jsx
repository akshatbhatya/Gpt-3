import React from 'react'
import './Blog.css'
import Article from '../../Article/Article'
import { Blog1, Blog2, Blog3, Blog4, Blog5 } from "./index"
function Blog() {
  return (
    <div className='cta_blog_container'>

      <div className="cta_blog_heading">
        <h1 className='gradient__text'>A lot is happening,
          We are blogging about it.</h1>
      </div>

      <div className="blog-container">
        <div className="blog-group-a">
          <Article img={Blog1} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article" />
        </div>

        <div className="blog-group-b">
          <Article img={Blog2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article" />
          <Article img={Blog3} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article" />
          <Article img={Blog4} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article" />
          <Article img={Blog5} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" read="Read Full Article" />
        </div>
      </div>
    </div>
  )
}

export default Blog
