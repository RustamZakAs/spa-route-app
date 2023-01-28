import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  const [focused, setFocused] = useState('/');

  const onLinkClick = (e) => {
    setFocused(e.target.href);
    console.log(e.target.href);
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-gray bg-gray">
        <Link className="navbar-brand color" to="/">
          Porfolio
        </Link>
        <button
          className="navbar-toggler navbar-light bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${focused.endsWith("/") ? "text-warning" : ""}`} onClick={onLinkClick} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${focused.includes("/about") ? "text-warning" : ""}`} onClick={onLinkClick} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${focused.includes("/resume") ? "text-warning" : ""}`} onClick={onLinkClick} to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${focused.includes("/works") ? "text-warning" : ""}`} onClick={onLinkClick} to="/works">
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${focused.includes("/contact") ? "text-warning" : ""}`} onClick={onLinkClick} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header >
  )
}
