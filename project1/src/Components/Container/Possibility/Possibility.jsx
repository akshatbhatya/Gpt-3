import React from 'react'
import "./Possibility.css"

import PossibilitiesPic from "../../../assets/Possibility.png"

function Possibility() {
  return (
    <div className='possibility_parent' id='CaseStudies'>
      <div className="possibility_image">
        <img src={PossibilitiesPic} alt="PossibilitiesPic" />
      </div>
      <div className="possibility_content">

        <div className="para1">
          <p>Request Early Access to Get Started</p>
        </div>
        <br />

        <div className="heading">
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        </div>
        <br />
        <div className="para3">
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
        <br />
        <div className="para4">
          <p>Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  )
}

export default Possibility