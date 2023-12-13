import React from 'react'
import "./Feature.css"

function Feature({ title, para }) {
  return (

    <>
      <div>
        <hr className='rulerBar' />
      </div>
     
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="para">
        <p>{para}</p>
      </div>
    </>


  )
}

export default Feature