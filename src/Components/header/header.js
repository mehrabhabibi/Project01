import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header style={{backgroundColor: 'lightgray', height: '100px'}}>
      <NavLink to= '/'>Home</NavLink>
      <NavLink to = '/tutorials'>Tutorials</NavLink>
      {/* <NavLink to='/react-component'>React Component</NavLink>
      <NavLink to='/react-module'>React Module</NavLink> */}

    </header>
  )
}

export default Header