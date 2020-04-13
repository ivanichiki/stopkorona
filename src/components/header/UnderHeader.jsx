import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './UnderHeader.scss'
export const UnderHeader = () => {
  const [statistic_toggle, setstatistic_toggle] = useState(false)
  const [simptom_toggle, setsimptom_toggle] = useState(false)
  const [more_toggle, setmore_toggle] = useState(false)
  return (
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
            <NavLink to='/what-is-done/solutions'><div className='scrolltext'>  Меры правительства РФ  </div>  </NavLink>
            <NavLink to='/what-is-done/council'> <div className='scrolltext'>  Координационный совет </div></NavLink>
            <NavLink to='/what-is-done/hq'>       <div className='scrolltext'>  Оперативный штаб </div></NavLink>
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
  )
}
