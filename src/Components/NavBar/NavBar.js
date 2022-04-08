import React from 'react'

import style from './navbar.module.css'

const NavBar = () => {
  return (
    <div className={style.navbar_container}>
      <div className={`${style.navbar_left} col`}>
        <img src='/images/logo.png' alt='logo' className={style.navbar_logo} />
      </div>
      <div className={`${style.navbar_right} col-auto`}>
        <a href='#'><div className='col-auto'>Our Service</div></a>
        <a href='#'><div className='col-auto'>Why Us</div></a>
        <a href='#'><div className='col-auto'>Testimonial</div></a>
        <a href='#'><div className='col-auto'>FAQ</div></a>
        <button type="button" class="btn btn-success">Register</button>      
      </div>
    </div>
  )
}

export default NavBar