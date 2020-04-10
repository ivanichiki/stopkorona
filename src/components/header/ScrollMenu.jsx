import React, { useContext, useState } from 'react'
import './ScrollMenu.scss'
import { KoronaContext } from '../../App'
import Scrollbars from 'react-custom-scrollbars'
import  {SocialImgs} from './SocialImgs'

export const ScrollMenu = () => {

  const { scrollMenuToggle } = useContext(KoronaContext)
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
          <div onClick={() => sethideMenu(!hideMenu)} className={`blocks ${hideMenu && 'hided'}`}>Все о коронавирусе  <i></i>

            <div className='podsos'>Симптомы</div>
            <div className='podsos'>Пути передачи</div>
            <div className='podsos'>7 шагов по профилактике</div>
            <div className='podsos'>Мифы о коронавирусе</div>
            <div className='podsos'>Часто задоваемые вопросы</div>
            <div className='podsos last'>Мировая статистика</div>
          </div>

        </div>

        <div >
          <div onClick={() => sethideMenu1(!hideMenu1)} className={`blocks ${hideMenu1 && 'hided'}`}>Что сделано?  <i></i>

            <div className='podsos'>Меры правителсьтва РФ</div>
            <div className='podsos'>Координационный совет</div>
            <div className='podsos last'>Оперативный штаб</div>

          </div>

        </div>

        <div >
          <div onClick={() => sethideMenu2(!hideMenu2)} className={`blocks ${hideMenu2 && 'hided'}`}>Что предпринять?  <i></i>

            <div className='podsos'>Каждому</div>
            <div className='podsos'>Предпринимателям</div>
            <div className='podsos'>Работадателям</div>
            <div className='podsos'>Работникам  </div>
            <div className='podsos'>Волонтером  </div>
            <div className='podsos'>Пожилым людям  </div>
            <div className='podsos'>Родителям  </div>
            <div className='podsos last'>Учащимся  </div>

          </div>
         <div className={`modalOverlay`}> </div>
        </div>


        <div className={`blocks `}>Официальные документы</div>
        <div className={`blocks `}>Памятки</div>

        <div style={{ color: '#fb5f3d', marginTop:'30px' }} className={`blocks `}>Единная горячая линия</div>
        <div className='Number'>
          8-800-2000-112


      </div>
      <div style={{marginTop:'40px', marginLeft:'auto', marginRight:'auto', width:'200px'}}>
       <SocialImgs/>
        </div>
      </Scrollbars>
    </div>

  )
}
