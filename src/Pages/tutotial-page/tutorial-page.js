import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const TutorialPage = () => {
  return (
    <div style={{display:'flex'}}>
     <aside style={{width : '20%'}}>
      <NavLink to="/tutorials">Wellcome</NavLink> 
      <br />
      <NavLink to="/tutorials/react-module">React Module</NavLink> 
      <br/>
      <NavLink to="/tutorials/react-component">React Components</NavLink>
    </aside>

    <div style={{width: '80%'}}>
        <Outlet />
    </div>
    </div>
    
  )
}

export default TutorialPage