import React, { useState } from 'react'
import '../styles/Header.scss'
import logo from '../svg/logo.svg'
import gov from '../svg/gov.svg'
import facebook from '../svg/download.svg'
import instagram from '../svg/instagram.svg'
import watsup from '../svg/watsup.svg'
import icq from '../svg/icq.svg'
import telega from '../svg/telega.svg'
import odnokashniki from '../svg/odnokashniki.svg'
import vk from '../svg/vk.svg'
import { NavLink } from 'react-router-dom'



export const Header = () => {
  const [statistic_toggle, setstatistic_toggle] = useState(false)
  const [simptom_toggle, setsimptom_toggle] = useState(false)
  const [more_toggle, setmore_toggle] = useState(false)
  return (
    <div style={{position:'fixed', width:'1180px', backgroundColor:'white', zIndex:'9999', paddingRight:'5px', }} >
      <div  className='header_wrapper'>
        <div className='left_secsion'>
        <NavLink to='/'><img src={logo} alt="" /></NavLink> 
        </div>

        <div className='right_secsion'>

          <div className='socseti'>
            <a target="_blank" href="https://vk.com/stopcoronavirusrf">
              <img className='social instagram' src={vk} alt="" />
            </a>
            <a target="_blank" href="https://ok.ru/stopcoronavirusrf">
              <img className='social odnokashniki' src={odnokashniki} alt="" />
            </a>

            <a target="_blank" href="https://t.me/stopcoronavirusrussia">
              <img className='social instagram' src={telega} alt="" />
            </a>

            <a target="_blank"href="https://icq.im/stopcoronavirus">
              <img className='social instagram' src={icq} alt="" />
            </a>

            <a target="_blank"href="https://invite.viber.com/?g2=AQBcynAipR6Xe0tEiCKYKFbAufoqkOMwTqUnq%2FPSkSHejIyln14LBwLEZl8xAj9y">
              <img className='social instagram' src={watsup} alt="" />
            </a>

            <a target="_blank"href="https://www.instagram.com/stopcoronavirusrf/">
              <img className='social instagram' src={instagram} alt="" />
            </a>

            <a target="_blank" href="https://www.facebook.com/stopcoronavirusrf/">
              <img className='social facebook' src={facebook} alt="" />
            </a>
          </div>

          <div className='gov' >
            <a target="_blank" href="http://government.ru/">

              <img style={{ width: '50px' }} src={gov} alt="" />
            </a>

          </div>


          <div className='oficcial' >
            Официальная информация
            о коронавирусе в России

      </div>

        </div>
      </div>
      <div className='under-header'>
        <div className='left_flang'>


          <div onMouseLeave={() => setstatistic_toggle(false)} onMouseEnter={() => setstatistic_toggle(true)} className='statistika'>  Статистика <i></i>

            <div className={`hiddenstat ${statistic_toggle && 'active'}`}>
              <div className='scrolltext'>  Сайты с официальной информацией  </div>
              <div className='scrolltext'>  Оперативные данные </div>
              <div className='scrolltext'>  Мировая статистика  </div>
            </div>
          </div>

          <div className='statistika'>  Как передаётся?  </div>
          <div onMouseLeave={() => setsimptom_toggle(false)} onMouseEnter={() => setsimptom_toggle(true)} className='statistika'>  Симптомы <i></i>

            <div className={`hiddenstat simptom ${simptom_toggle && 'active'}`}>
              <div className='scrolltext'>  Основные симптомы  </div>
              <div className='scrolltext'>  Редкие симптомы </div>

            </div>

          </div>
          <div className='statistika'>  Профилактика  </div>


          <div onMouseLeave={() => setmore_toggle(false)} onMouseEnter={() => setmore_toggle(true)} className='statistika'>  Больше <i></i>

            <div className={`hiddenstat more ${more_toggle && 'active'}`}>
            <NavLink to='/news'> <div className='scrolltext'>  Новости  </div> </NavLink>
              <div className='scrolltext'>  Меры борбы с коронавирусом </div>
              <div className='scrolltext'>  Подержка МСП </div>
              <div className='scrolltext'>  Что такое коронавирус? </div>
              <div className='scrolltext'>  Вопросы и ответы </div>
              <div className='scrolltext'>  Мифы </div>
              <div className='scrolltext'>  Видео о коронавирусе </div>
              <div className='scrolltext'>  Официальные документы </div>
              <div className='scrolltext'>  Все памятки </div>
            </div>

          </div>

        </div>
        <div className='right_flang'>
          <div className='hotline'>
            Единая горячая линия
      </div>
          <div className='number'>
            8-800-2000-112
        </div>
        </div>
      </div>
    </div>
  )
}
