import React from 'react'
import {NavLink} from 'react-router-dom'

function Header(){
  return(
    <header>
      <nav>
      <div className="imageWrapper">
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"/>
      </div>
      <div className="navlinks">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/stream">Stream</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          </div>
        </nav>
    </header>
  )

}
export default Header; 