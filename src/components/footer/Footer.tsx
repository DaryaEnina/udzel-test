import React from 'react'
import './style.scss'
import footerLogo from '../../assets/footerIcon.png'

const Footer = () => {
  return (
    <div className='wrapper'>
      <div className='content'>
        <img src={footerLogo} alt="udzel" width={36} height={39}/>
        <p id='agreement'>Пользовательское соглашение</p>
        <p id='copyright'>© 2022 Udzel</p>
      </div>
    </div>
  )
}

export default Footer
