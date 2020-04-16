import React, { useEffect, useContext } from 'react'
import './Oper.scss'
import globe from '../../svg/globe.svg'
import { KoronaContext } from '../../App'
import { Otchet } from './Otchet'

export const Operativdata = () => {


  const { modal, setmodal, setmodalId, modalcontent, modalId,stateOper } = useContext(KoronaContext)

  useEffect(() => {
    window.scrollTo(0, 0)


  }, [])

  return (

  
    <div  className='oper_wrapper'>
          
      <div className='title_download '>

        <div>
          <div  className='bigwords' >
            Оперативные данные
        </div>
          <div style={{ color: '#fc5f3d', marginTop: '20px', fontSize: '18px' }}>
            По состоянию на {stateOper.day} {stateOper.mounth} {stateOper.time}
        </div>
        </div>

        <div className='otchet desktop'>
           <Otchet/>
       </div>
       
      </div>
     
     
      <div className='stat_wrapper'>
        <div>

          <div className='stat'>
            {stateOper.stat.amountoftest}
          </div>
          <div className='subtitle' >
            Проведено тестов

          </div>
          <div  style={{cursor:'pointer'}} onClick={()=>{setmodal(true);setmodalId(10)}} className='more_date desktop'>
            <img src={globe} alt=""/>
            Подробные данные
           </div>
        </div>
        <div>
          <div style={{ color: '#fb5f3d' }} className='stat'>
           {stateOper.stat.amountofcase}
          </div>
          <div   className='subtitle' >
            Случаев заболеваний

        </div>
       
        </div>
        <div>

          <div style={{ color: '#fb5f3d' }} className='stat'>
           {stateOper.stat.amountOfCaseToday}
        </div>
          <div  className='subtitle' style={{ width: '200px'}}>
            Случаев заболеваний за последние сутки

        </div>
        </div>
        <div>

          <div className='stat'>
          {stateOper.stat.amountOfCure}
          </div>
          <div  className='subtitle'>
            Человек выздоровел

        </div>
        </div>
        <div>

          <div className='stat'>
          {stateOper.stat.deaths}
        </div>
          <div  className='subtitle'>
            Человек умерло

        </div>
        </div>
        <div  style={{cursor:'pointer'}} onClick={()=>{setmodal(true);setmodalId(10)}} className='more_date mobile'>
            <img src={globe} alt=""/>
            Подробные данные
           </div>
         
           <div className='otchet mobile'>
              <Otchet/>
           </div>
      </div>

    </div>
    
  )
}
