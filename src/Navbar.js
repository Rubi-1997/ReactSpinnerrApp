import React from 'react'
import './Navbar.css'

const Navbar = ({getdata}) => {
  return (
    <div className='navbardiv'>
      <ul className='unorderList'>
        <li><img src="./addidas2.png"></img></li>
        <li><button onClick={getdata}>Get User Data</button></li>
      </ul>
    </div>
  )
}

export default Navbar
