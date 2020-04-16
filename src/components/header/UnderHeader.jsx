import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './UnderHeader.scss'
import { KoronaContext } from '../../App'
export const UnderHeader = () => {
  const [statistic_toggle, setstatistic_toggle] = useState(false)
  const [simptom_toggle, setsimptom_toggle] = useState(false)
  const [more_toggle, setmore_toggle] = useState(false)

 const {setrender}=useContext(KoronaContext)

  return (
    <div className='under-header'>
      <div className='left_flang'>

      <NavLink to='/about-covid/default'>    <div onMouseLeave={() => setstatistic_toggle(false)} onMouseEnter={() => setstatistic_toggle(true)} className='statistika'>
      Все о коронавирусе  <i></i>

         <div className={`hiddenstat ${statistic_toggle && 'active'}`}>
         <NavLink to={`/about-covid/symptoms/`}>    <div onClick={()=>setrender(e=>e+1)} className='scrolltext'>  Симптомы  </div> </NavLink>
         <NavLink to={`/about-covid/transmitted/`}>    <div onClick={()=>setrender(e=>e+1)} className='scrolltext'>  Пути передачи </div></NavLink>
         <NavLink to={`/about-covid/prevention/`}>           <div onClick={()=>setrender(e=>e+1)}  className='scrolltext'>  7 шагов по профилактике  </div></NavLink>
         <NavLink to={`/about-covid/myths/`}>       <div onClick={()=>setrender(e=>e+1)} className='scrolltext'>  Мифы о коронавирусе  </div></NavLink>
         <NavLink to={`/about-covid/world-statistics/`}>    <div  onClick={()=>setrender(e=>e+1)} className='scrolltext'> Мировая статистика </div></NavLink>
          </div>
        </div></NavLink>
        <NavLink to='/what-is-done/council'> <div onMouseLeave={() => setmore_toggle(false)} onMouseEnter={() => setmore_toggle(true)} className='statistika'>  Что сделано <i></i>

          <div className={`hiddenstat ${more_toggle && 'active'}`}>
            <NavLink to='/what-is-done/solutions'><div className='scrolltext'>  Меры правительства РФ  </div>  </NavLink>
            <NavLink to='/what-is-done/council'> <div className='scrolltext'>  Координационный совет </div></NavLink>
            <NavLink to='/what-is-done/hq'>       <div className='scrolltext'>  Оперативный штаб </div></NavLink>
          </div>

        </div>
        </NavLink>
        <NavLink to='/what-to-do/business'>  <div  className='statistika'>  Что предпринять</div></NavLink>

        
      

        

        <NavLink to='/faq'>  <div className='statistika'>  Вопросы и ответы </div></NavLink>

   




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
