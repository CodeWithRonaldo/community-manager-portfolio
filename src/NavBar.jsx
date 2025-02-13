import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navlink-container'>
        <div className='nav-links'>
          <NavLink to='/'><h1 >Abdulkudus</h1></NavLink>
            
            <div>
                {/* <NavLink className="links" to="/home" >Home</NavLink> */}
                <NavLink className="links" to="/about" >About</NavLink>
                <NavLink className="links" to="/work-with-me" >Work with me</NavLink>
                <NavLink className="links" to="/my-portfolio" >My Portfolio</NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar