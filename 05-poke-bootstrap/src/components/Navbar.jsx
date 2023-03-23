import { NavLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
        <NavLink className='navbar-brand' to='#'>Pokédex</NavLink>

        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item px-2'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
          </li>
          <li className='nav-item px-2'>
            <NavLink className='nav-link' to='/about'>Acerca de Pokémon</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
