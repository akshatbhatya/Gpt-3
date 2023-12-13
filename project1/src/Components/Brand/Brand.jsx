import React from 'react'

import "./Brand.css"

import Google from '../../assets/google.png'
import DropBox from '../../assets/dropbox.png'
import Slack from '../../assets/slack.png'
import Shopify from '../../assets/shopify.png'
import Atlassian from '../../assets/atlassian.png'
const Brand = () => {
  return (
    <div>
      <div className="brand-container">
        <img src={Google} alt="google" />
        <img src={DropBox} alt="DropBox" />
        <img src={Slack} alt="Slack" />
        <img src={Shopify} alt="Shopify" />
        <img src={Atlassian} alt="Shopify" />
      </div>
    </div>
  )
}

export default Brand
