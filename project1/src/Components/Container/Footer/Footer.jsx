import React from 'react'
import "./Footer.css"

import logo from '../../../assets/logo.svg'

function Footer() {
  return (
    <div className='gpt3_footer_container_section'>

      <div className="gpt3_fotter_headding">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt_footer_btn">
        <button>Request Early Access</button>
      </div>
      <div className="footer_links">
        <div className="footer_links_logo">
          <img src={logo} alt="logo" />
          <br />
          <br />
          <p>2023, All Rights Reserved</p>
        </div>
        <div className="footer_links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="footer_links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="footer_links_div">
          <h4>Get in touch</h4>
          <p>Amritsar , Punjab 143001</p>
          <a href='tel:7814720746'>7814720746</a>
          <a href='mailto:akshatbhatya@gmail.com'>akshatbhatya@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
