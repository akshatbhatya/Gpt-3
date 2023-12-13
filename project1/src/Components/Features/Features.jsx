import React from 'react'
import "./Features.css"

import Feature from "../Container/Feature/Feature"

const Features = () => {
  return (
    <div className='features-container'>
      <div className="content_left">

      <h1 className='gradient_text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
      <br />
      <p>Request Early Access to Get Started</p>
      </div>
        
      <div className="content_right">
        <Feature title={'Improving end distrusts instantly '} para={'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'} />

        <br />

        <Feature title={'Become the tended active'} para={'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'} />

        <br />

        <Feature title={'Message or am nothing'} para={'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'} />

        <br />

        <Feature title={'Really boy law county'} para={'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'} />
        
      </div>
      
    </div>
  )
}

export default Features
