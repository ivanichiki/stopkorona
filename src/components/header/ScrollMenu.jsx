import React, { useContext, useState } from 'react'
import './ScrollMenu.scss'
import { KoronaContext } from '../../App'
import Scrollbars from 'react-custom-scrollbars'
import { SocialImgs } from './SocialImgs'
import { NavLink } from 'react-router-dom'

export const ScrollMenu = ({ match }) => {


  console.log(match)

  const { scrollMenuToggle, setscrollMenuToggle } = useContext(KoronaContext)
  const [hideMenu, sethideMenu] = useState(false)
  const [hideMenu1, sethideMenu1] = useState(false)
  const [hideMenu2, sethideMenu2] = useState(false)

  if (scrollMenuToggle) {
    document.body.style.overflow = "hidden";

  }

  if (scrollMenuToggle == false) {
    document.body.style.overflow = "auto";
  }

  return (

    <div className={`scrollMenu ${scrollMenuToggle && 'scroll'}`}>
      <Scrollbars style={{ minHeight: 515, maxHeight: 600 }}>
        <div style={{ paddingTop: '40px' }}>
          <div className={`blocks ${hideMenu && 'hided'} ${match && match.slice(0, 11) === 'about-covid' ? 'choosen' : ''}`}> <div onClick={() => sethideMenu(!hideMenu)}><span>Все о коронавирусе  </span> <i></i></div>

            <div className='blocks-hided'>

              <div className='podsos'> <NavLink onClick={() => { sethideMenu(!hideMenu); setscrollMenuToggle(false) }} to={`/about-covid/symptoms/`}>   Симптомы</NavLink></div>
              <div onClick={() => { sethideMenu(!hideMenu); setscrollMenuToggle(false) }} className='podsos'>   <NavLink to={`/about-covid/transmitted/`}> Пути передачи</NavLink></div>
             <div onClick={() => { sethideMenu(!hideMenu); setscrollMenuToggle(false) }} className='podsos'>  <NavLink to={`/about-covid/prevention/`}>7 шагов по профилактике</NavLink></div>
             <div onClick={() => { sethideMenu(!hideMenu); setscrollMenuToggle(false) }} className='podsos'>  <NavLink to={`/about-covid/myths/`}>  Мифы о коронавирусе</NavLink></div>

              <div onClick={() => { sethideMenu(!hideMenu); setscrollMenuToggle(false) }}  className='podsos last'> <NavLink to={`/about-covid/world-statistics/`}>Мировая статистика</NavLink></div>


            </div>
          </div>

        </div>

        <div >
          <div className={`blocks ${hideMenu1 && 'hided'}  ${match && match.slice(0, 12) === 'what-is-done' ? 'choosen' : ''}`}><div onClick={() => sethideMenu1(!hideMenu1)}> < span   >Что сделано?  </ span> <i></i></div>

            <div className='blocks-hided'>
              <div onClick={() => { sethideMenu1(!hideMenu1); setscrollMenuToggle(false) }} className='podsos'>  <NavLink to='/what-is-done/solutions'  > Меры правителсьтва РФ</NavLink></div>
              <div onClick={() => { sethideMenu1(!hideMenu1); setscrollMenuToggle(false) }} className='podsos'>  <NavLink to='/what-is-done/council'> Координационный совет</NavLink></div>
              <div onClick={() => { sethideMenu1(!hideMenu1); setscrollMenuToggle(false) }} className='podsos last'>  <NavLink to='/what-is-done/hq'>     Оперативный штаб</NavLink></div>
            </div>

          </div>

        </div>

        <div >
          <NavLink to='/what-to-do/business'>    <div onClick={() => { setscrollMenuToggle(false) }} className={`blocks ${match && match === 'what-to-do/business' ? 'choosen' : ''}`}> <span>Что предпринять?  </span>  </div>
          </NavLink>

        </div>

        <NavLink to='/faq'>  <div onClick={() => { setscrollMenuToggle(false) }} className={`blocks ${match && match.slice(0, 11) === 'faq' ? 'choosen' : ''}`}><span>Часто задоваемые вопросы</span></div></NavLink>

    

        <div className='hotline'>Единная горячая линия</div>
        <div className='Number'>
          8-800-2000-112


      </div>
        <div style={{ marginTop: '40px', marginLeft: 'auto', marginRight: 'auto', width: '200px' }}>
          <SocialImgs />
        </div>
      </Scrollbars>
    </div>

  )
}
