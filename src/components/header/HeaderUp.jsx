import React, { useContext } from 'react'
import logo from '../../svg/logo.svg'
import gov from '../../svg/gov.svg'
import { NavLink } from 'react-router-dom'
import { KoronaContext } from '../../App'
import { SocialImgs } from './SocialImgs'
import { AnimatedBtn } from './AnimatedBtn'

export const HeaderUp = () => {
  const {setscrollMenuToggle,scrollMenuToggle} = useContext(KoronaContext)
  return (
    <div className='header_wrapper'>
    <div className='left_secsion'>
      <div> <NavLink to='/'><img  onClick={()=>setscrollMenuToggle(false)} className='logotip' src={logo} alt="" /></NavLink></div>

      <div className='movile-gov' >
        <a target="_blank" href="http://government.ru/">

          <img className='img_gov' style={{ width: '50px' }} src={gov} alt="" />
        </a>


      </div>

    </div>

    <div className='right_secsion'>
        <SocialImgs/>
     

      
      <AnimatedBtn/>


    <div className='gov' >
        <a target="_blank" href="http://government.ru/">

          <img className='img_gov' style={{ width: '50px' }} src={gov} alt="" />
        </a>


      </div>

      <div className='oficcial' >
        Официальная информация
        о коронавирусе в России

</div>

    </div>
  </div>
  )
}
