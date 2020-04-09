import React, { useState, useContext } from 'react'
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
import { KoronaContext } from '../App'
import { useEffect } from 'react'



export const Header = () => {
  const [statistic_toggle, setstatistic_toggle] = useState(false)
  const [simptom_toggle, setsimptom_toggle] = useState(false)
  const [more_toggle, setmore_toggle] = useState(false)
  const { executeScrolltoVideo, executeScrolltoOper, executeScrolltoSolutions } = useContext(KoronaContext)
  const [counter, setcounter] = useState(0)
  const [loaded, setloaded] = useState(false)

  function onLoad() {
    setcounter(counter=>counter+1)

    if (counter==8) {
    setloaded(true);
 
    }
  }

  return (
    <div onLoad={onLoad} className={`header_wrapper_wrap ${loaded&&'show'}`} >
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '1160px', paddingRight: '5px' }} >
        <div className='header_wrapper'>
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

              <a target="_blank" href="https://icq.im/stopcoronavirus">
                <img className='social instagram' src={icq} alt="" />
              </a>

              <a target="_blank" href="https://invite.viber.com/?g2=AQBcynAipR6Xe0tEiCKYKFbAufoqkOMwTqUnq%2FPSkSHejIyln14LBwLEZl8xAj9y">
                <img className='social instagram' src={watsup} alt="" />
              </a>

              <a target="_blank" href="https://www.instagram.com/stopcoronavirusrf/">
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


            <div onMouseLeave={() => setstatistic_toggle(false)} onMouseEnter={() => setstatistic_toggle(true)} className='statistika'>  Все о коронавирусе <i></i>

              <div className={`hiddenstat ${statistic_toggle && 'active'}`}>
                <div className='scrolltext'>  Симптомы  </div>
                <div className='scrolltext'>  Пути передачи </div>
                <div className='scrolltext'>  7 шагов по профилактике  </div>
                <div className='scrolltext'>  Мифы о коронавирусе  </div>
                <div className='scrolltext'>  Часто задоваемые вопросы  </div>
              </div>
            </div>
            <NavLink to='/what-is-done/council'> <div onMouseLeave={() => setmore_toggle(false)} onMouseEnter={() => setmore_toggle(true)} className='statistika'>  Что сделано <i></i>

              <div className={`hiddenstat ${more_toggle && 'active'}`}>
                <NavLink to='/what-is-done/council'>     <div className='scrolltext'>  Меры правительства РФ  </div>  </NavLink>
                  <div className='scrolltext'>  Координационный совет </div>
                <div className='scrolltext'>  Оперативный штаб </div>
              </div>

            </div>
            </NavLink>
            <div onMouseLeave={() => setsimptom_toggle(false)} onMouseEnter={() => setsimptom_toggle(true)} className='statistika'>  Что предпринять <i></i>

              <div className={`hiddenstat ${simptom_toggle && 'active'}`}>
                <div className='scrolltext'>  Каждому  </div>
                <NavLink to='/what-to-do/business'> <div className='scrolltext'>  Предприятиям </div></NavLink> 
                <div className='scrolltext'>  Работадателям </div>
                <div className='scrolltext'>  Работникам </div>
                <div className='scrolltext'>  Волонтерам </div>
                <div className='scrolltext'>  Пожилым людям </div>

              </div>

            </div>

            <div className='statistika'>  Официальные документы  </div>

            <div className='statistika'>  Памятки  </div>




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
    </div>
  )
}
