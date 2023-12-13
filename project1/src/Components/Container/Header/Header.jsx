import React from 'react'
import "./Header.css"
import People from "../../../assets/people.png"

import AiPhoto from "../../../assets/ai.png"

function Header() {
  return (
    <>
    <div className='header-of-all-content'>

      <div className='header_content'>
        <h1 className='gradient_text'>Let’s Build Something
          amazing with GPT-3
          OpenAI</h1>
          <br />
          <br />
          <p className='paraOfContent'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <br />
          <br />

          <div className="email-content">

          <input type="email" placeholder='Your Email Address' className='inputBox' />
          <button className='get_started'>Get Started</button>
          </div>
          <br />
          <br />
          <br />
          <div className="header-content-people">
            <img src={People} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
      </div>

      <div className="header_image_content">
        <img src={AiPhoto}  className="aiPicture" alt="ai.png" />
      </div>
    </div>
    </>

  )
}

export default Header