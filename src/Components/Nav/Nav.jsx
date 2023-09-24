import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex items-center justify-between mb-2'>
      <div>
        <img src='https://i.ibb.co/v1Hbs5Z/Logo.png' alt="logo" />
      </div>
      <div>
        <NavLink className="mx-2" to="/">Home</NavLink>
        <NavLink className="mx-2" to="/donation">Donation</NavLink>
        <NavLink className="mx-2" to="/statistics">Statistics</NavLink>
      </div>
    </nav>
  )
}

export default Nav
