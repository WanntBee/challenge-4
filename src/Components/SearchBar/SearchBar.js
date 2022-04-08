import React from 'react'

import style from './searchbar.module.css'

const SearchBox = () => {
  return (
    <div>
      <form id="search-car" action="/">
        <div className={style.search_container}>
          <div className={style.search_group}>
            <label for="driver-type">Tipe Driver</label>
            <select name="driver-type" id="driver-type">
              <option value="">Pilih Tipe Driver</option>
            </select>
          </div>
          <div className={style.search_group}>
            <label for="date">Tanggal</label>
            <select name="date" id="date">
              <option value="">Pilih Tanggal</option>
            </select>
          </div>
          <div className={style.search_group}>
            <label for="pickup-time">Waktu Jemput/Ambil</label>
            <select name="pickup-time" id="pickup-time">
              <option value="">Pilih Waktu</option>
            </select>
          </div>
          <div className={style.search_group}>
            <label for="passanger">Jumlah Penumpang (optional)</label>
            <select name="passnger" id="passasnger">
              <option value="">Jumlah Penumpang</option>
            </select>
          </div>
          <div className={style.submit}>
            <button type="submit">Cari Mobil</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBox