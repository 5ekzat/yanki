import React from 'react'
import {NavLink} from "react-router-dom"
import "./Header.css"
// import Burger from '../burger/Burger'

const Header = ({changeVisible}) => {
  return (
    <nav>
      {/* <Burger/> */}
      <ul>
        <li>
          <NavLink className='navLink' to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink className='navLink' to="/catalog">Catalog</NavLink>
        </li>
        <li>
          <NavLink className='navLink'   to="/">Home</NavLink>
        </li>
      </ul>
      <div className='mainTitle'>YANKI</div>
      <ul>
      <li>
          <NavLink className='navLink' to="/">
          <i className="bi bi-search"></i>
          </NavLink>
        </li>
        <li onClick={changeVisible}>
          <NavLink className='navLink' to="/">
          <i className="bi bi-person"></i>
          </NavLink>
        </li>
        <li>
          <NavLink className='navLink' to="/favorites">
          <i className="bi bi-heart"></i>
          </NavLink>
        </li>
        <li>
          <NavLink className='navLink' to="/card"> 
          <i className="bi bi-cart3"></i>
          </NavLink>
        </li>
      </ul>
     
    </nav>
  )
}

export default Header