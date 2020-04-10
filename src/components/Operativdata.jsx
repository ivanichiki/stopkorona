import React, { useEffect, useContext } from 'react'
import '../styles/Oper.scss'
import snimok from '../svg/snimok.jpg'
import load from '../svg/load.svg'
import globe from '../svg/globe.svg'
import { KoronaContext } from '../App'

export const Operativdata = () => {


  const { modal, setmodal, setmodalId, modalcontent, modalId,stateOper } = useContext(KoronaContext)



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
          <div>
            <img src={snimok} alt="" />
          </div>
          <div style={{ paddingLeft: '15px', height: '200px' }}>
            <a target="_blank" href="https://стопкоронавирус.рф/ai/html/3/attach/2020-04-03_coronavirus_government_report_1_.pdf" download>

              <span className='text'>   Отчет о текущей ситуации с коронавирусом в РФ: статистика, данные из регионов, меры Правительства РФ.</span>

              <span className='size'>PDF 2.7 MB</span>   <span>Скачать</span>
              <img src={load} alt="" />

            </a>
          </div>
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
          <div>
            <img src={snimok} alt="" />
          </div>
          <div className='right_block' >
            <a target="_blank" href="https://стопкоронавирус.рф/ai/html/3/attach/2020-04-03_coronavirus_government_report_1_.pdf" download>

              <span className='text'>   Отчет о текущей ситуации с коронавирусом в РФ: статистика, данные из регионов, меры Правительства РФ.</span>

              <span className='size'>PDF 2.7 MB</span>   <span>Скачать</span>
              <img src={load} alt="" />

            </a>
          </div>
        </div>
      </div>

    </div>
    
  )
}
