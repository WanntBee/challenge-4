import React from 'react'

import style from './result.module.css'

const Result = () => {
  return (
    <div className={style.result_container}>
        <div className={style.car_card}>
            <div className={style.car_image}>
                <img src='/images/image-1.png' alt='car' />
            </div>
            <div className={style.car_result}>
                <div>Nama/Tipe Mobil</div>
                <div><strong>Rp 430.000 / hari</strong></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div><i class='bx bx-user'>4 Orang</i></div>
                <div><i class='bx bx-cog'>Manual</i></div>
                <div><i class='bx bx-clipboard'>Tahun 2020</i></div>
            </div>  
            <div className={style.submit}>
                <button type="submit">Pilih Mobil</button>
            </div>              
        </div>
        <div className={style.car_card}>
            <div className={style.car_image}>
                <img src='/images/image-1.png' alt='car' />
            </div>
            <div className={style.car_result}>
                <div>Nama/Tipe Mobil</div>
                <div><strong>Rp 430.000 / hari</strong></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div><i class='bx bx-user'>4 Orang</i></div>
                <div><i class='bx bx-cog'>Manual</i></div>
                <div><i class='bx bx-clipboard'>Tahun 2020</i></div>
            </div>  
            <div className={style.submit}>
                <button type="submit">Pilih Mobil</button>
            </div>              
        </div>
        <div className={style.car_card}>
            <div className={style.car_image}>
                <img src='/images/image-1.png' alt='car' />
            </div>
            <div className={style.car_result}>
                <div>Nama/Tipe Mobil</div>
                <div><strong>Rp 430.000 / hari</strong></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div><i class='bx bx-user'>4 Orang</i></div>
                <div><i class='bx bx-cog'>Manual</i></div>
                <div><i class='bx bx-clipboard'>Tahun 2020</i></div>
            </div>  
            <div className={style.submit}>
                <button type="submit">Pilih Mobil</button>
            </div>              
        </div>
    </div>
  )
}

export default Result