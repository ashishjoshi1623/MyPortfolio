import React from 'react'
import './header.css';
function Header() {
  return (
      <section className="navbar-section">
        <div className="pfIcon">
          <img src="/icons/portfolioIcon.png" alt="AppIcon" className="pfImg"/>
        </div>
        <div className="navContainer">
          <p className="glow-on-hover">Home</p>
          <p className="glow-on-hover">About</p>
          <p className="glow-on-hover">Skills</p>
          <p className="glow-on-hover">Resume</p>
        </div>
        <div className="menu-toggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Resume</a></li>
            </ul>
        </div>
        <div className="contactContainer">
          <button className="contact-button btn-text">Contact Me</button>
        </div>
      </section>
  )
}

export default Header