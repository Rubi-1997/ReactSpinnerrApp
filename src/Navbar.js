import React from 'react'
import './Navbar.css'

const Navbar = ({getdata}) => {
  return (
    <div className='navbardiv'>
      <ul className='unorderList'>
        <li><h1 className='brandname'>Facebook</h1></li>
        <li><button onClick={getdata}>Get Users</button></li>
      </ul>
    </div>
  )
}

export default Navbar
