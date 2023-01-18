import React from "react"
import IMAGES from "../assets/index.js"

function Navbar() {
  return (
    <nav className="comp-navbar">
      <div className="nav-logo-link">
        <a href="/dakine-ipsum">
          <img
            className="nav-logo-img"
            src={IMAGES.bannerGreen}
            alt="site logo"
          />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
