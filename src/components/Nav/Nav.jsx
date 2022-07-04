import React from 'react'
import image from "../../images/logo.png"
import "./Nav.css"

function Nav() {
  return (
    <div className='nav-bar'>
    <img src={image} alt="earth logo"/>
    <h1>my travel journal.</h1>
    </div>
  )
}

export default Nav