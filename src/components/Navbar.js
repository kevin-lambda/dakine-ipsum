import React from "react"
import IMAGES from "../assets/index.js"

function Navbar() {
  return (
    <nav className="comp-navbar">
      <a className="nav-logo-link" href="/">
        <img
          className="nav-logo-img"
          src={IMAGES.bannerGreen}
          alt="site logo"
        />
      </a>
    </nav>
  )
}

export default Navbar
