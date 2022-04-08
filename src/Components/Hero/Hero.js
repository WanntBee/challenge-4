import React from 'react'
import style from './hero.module.css'

const Hero = () => {
  return (
    <div className={style.hero_container}>
      <div className={`${style.hero_text} col-6`}>
        <div>
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        </div>
      </div>
      <img src='/images/img_car.png' alt='car image' className={`${style.hero_image}`} />
    </div>
  )
}

export default Hero