import React, { useContext, useState } from 'react'
import './ScrollMenu.scss'
import { KoronaContext } from '../../App'
import Scrollbars from 'react-custom-scrollbars'
import { SocialImgs } from './SocialImgs'
import { NavLink } from 'react-router-dom'

export const ScrollMenu = () => {

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
          <div className={`blocks ${hideMenu && 'hided'}`}> <div onClick={() => sethideMenu(!hideMenu)}><span>Все о коронавирусе  </span> <i></i></div>

            <NavLink onClick={() => { sethideMenu(!hideMenu); setscrollMenuToggle(false) }} to={`/about-covid/symptoms/`}>      <div className='podsos'>Симптомы</div> </NavLink>
            <NavLink to={`/about-covid/transmitted/`}>       <div onClick={() => { sethideMenu(!hideMenu); setscrollMenuToggle(false) }} className='podsos'>Пути передачи</div></NavLink>
            <div className='podsos'>7 шагов по профилактике</div>
            <div className='podsos'>Мифы о коронавирусе</div>
            <div className='podsos'>Часто задоваемые вопросы</div>
            <div className='podsos last'>Мировая статистика</div>
          </div>

        </div>

        <div >
          <div className={`blocks ${hideMenu1 && 'hided'}`}><div onClick={() => sethideMenu1(!hideMenu1)}> < span   >Что сделано?  </ span> <i></i></div>

            <NavLink to='/what-is-done/solutions'>   <div onClick={() => { sethideMenu1(!hideMenu1); setscrollMenuToggle(false) }} className='podsos'>Меры правителсьтва РФ</div></NavLink>
            <NavLink to='/what-is-done/council'>  <div onClick={() => { sethideMenu1(!hideMenu1); setscrollMenuToggle(false) }} className='podsos'>Координационный совет</div></NavLink>
            <NavLink to='/what-is-done/hq'>      <div onClick={() => { sethideMenu1(!hideMenu1); setscrollMenuToggle(false) }} className='podsos last'>Оперативный штаб</div></NavLink>

          </div>

        </div>

        <div >
          <div onClick={() => sethideMenu2(!hideMenu2)} className={`blocks ${hideMenu2 && 'hided'}`}> <span>Что предпринять? <i></i> </span>

            <div className='podsos'>Каждому</div>
            <div className='podsos'>Предпринимателям</div>
            <div className='podsos'>Работадателям</div>
            <div className='podsos'>Работникам  </div>
            <div className='podsos'>Волонтером  </div>
            <div className='podsos'>Пожилым людям  </div>
            <div className='podsos'>Родителям  </div>
            <div className='podsos last'>Учащимся  </div>

          </div>

        </div>


        <div className={`blocks `}> <span>Официальные документы </span></div>
        <div className={`blocks `}> <span>Памятки </span></div>

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
