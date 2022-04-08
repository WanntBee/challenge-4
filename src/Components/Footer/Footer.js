import React from 'react'

import style from './footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer_container}>
      <div className={style.footer_detail}>
        <div className='col-4'>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className='col-2'>
          <a href="#"><p className={`${style.link_site} font-weight-bold`}>Our Service</p></a>
          <a href="#"><p className={`${style.link_site} font-weight-bold`}>Why Us</p></a>
          <a href="#"><p className={`${style.link_site} font-weight-bold`}>Testimonial</p></a>
          <a href="#"><p className={`${style.link_site} font-weight-bold`}>FAQ</p></a>
        </div>
        <div className='col-3'>
          <p>Connect with Us</p>
          <div>
            <a href="#"><img src="/images/icon-facebook.png" alt="fb" className={style.contact_icon} /></a>
            <a href="#"><img src="/images/icon-instagram.png" alt="ig" className={style.contact_icon} /></a>
            <a href="#"><img src="/images/icon-twitter.png" alt="twtr" className={style.contact_icon} /></a>
            <a href="#"><img src="/images/icon-mail.png" alt="mail" className={style.contact_icon} /></a>
            <a href="#"><img src="/images/icon-twitch.png" alt="twch" className={style.contact_icon} /></a>
          </div>
        </div>
        <div className='col-3'>
          <p>Copyright Binar 2022</p>
          <img src='/images/logo.png' alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Footer