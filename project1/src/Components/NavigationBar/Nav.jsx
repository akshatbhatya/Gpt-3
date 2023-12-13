import React from 'react'
import "./Nav.css"
import Logo from "../../assets/logo.svg"

const Nav = () => {
  return (
    <>
      <div className='navbar'>
        <div className="nav__link">
          <div className="__nav-links-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="navbar-links-tags">
            <a href="">home</a>
            <a href="">home</a>
            <a href="">home</a>
            <a href="">home</a>
          </div>

          <div className='navbar-sign'>
            <p>sign in</p>

            <button className='btns'> log in</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Nav
