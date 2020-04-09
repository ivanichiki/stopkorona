import React, { useContext } from 'react'
import logo from '../../svg/logo.svg'
import gov from '../../svg/gov.svg'
import facebook from '../../svg/download.svg'
import instagram from '../../svg/instagram.svg'
import watsup from '../../svg/watsup.svg'
import icq from '../../svg/icq.svg'
import telega from '../../svg/telega.svg'
import odnokashniki from '../../svg/odnokashniki.svg'
import vk from '../../svg/vk.svg'
import { NavLink } from 'react-router-dom'
import { KoronaContext } from '../../App'
import { SocialImgs } from './SocialImgs'

export const HeaderUp = () => {
  const {setscrollMenuToggle,scrollMenuToggle} = useContext(KoronaContext)
  return (
    <div className='header_wrapper'>
    <div className='left_secsion'>
      <div> <NavLink to='/'><img src={logo} alt="" /></NavLink></div>

      <div className='movile-gov' >
        <a target="_blank" href="http://government.ru/">

          <img className='img_gov' style={{ width: '50px' }} src={gov} alt="" />
        </a>


      </div>

    </div>

    <div className='right_secsion'>
        <SocialImgs/>
     

      

      <div onClick={()=>setscrollMenuToggle(!scrollMenuToggle)} className='MENU'>
        |||
    </div>

      <div className='oficcial' >
        Официальная информация
        о коронавирусе в России

</div>

    </div>
  </div>
  )
}
