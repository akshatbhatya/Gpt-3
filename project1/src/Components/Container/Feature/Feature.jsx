import React from 'react'
import "./Feature.css"

function Feature({ title, para }) {
  return (

    <>
      {/* <span className='ruler'>
        <hr className='rulerBar' />
      </span> */}
     
     <div className="feature-container">

      <div className="title">
      <hr className='rulerBar' />
        <h1>{title}</h1>
      </div>
      <div className="para">
        <p>{para}</p>
      </div>
     </div>
    </>


  )
}

export default Feature