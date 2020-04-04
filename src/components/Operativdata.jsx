import React, { useEffect } from 'react'
import '../styles/Oper.scss'
import snimok from '../svg/snimok.jpg'
import load from '../svg/load.svg'
import globe from '../svg/globe.svg'

import { useState } from 'react'
import { useReducer } from 'react'
import { stataReducer } from '../reducers/stateReducer'
import { client } from '../client'

export const Operativdata = () => {



const fetchData = async ()=> {
  const entries = await client.getEntries({
    content_type: "stata",
    
   
  })
 
  dispatch({type:'setamount',value:entries.items[0].fields})
  dispatch({type:'setmounth',value:entries.items[0].sys.updatedAt.slice(5,7)})
  dispatch({type:'setday',value:entries.items[0].sys.updatedAt.slice(8,10)})
  dispatch({type:'settime',value:entries.items[0].sys.updatedAt.slice(11,16)})
}
useEffect(() => {
  fetchData()
 
}, [])
const initialstate = {stat:'', mounth:'',day:'', time:''}
const [state,dispatch] = useReducer(stataReducer,initialstate)

  return (

  
    <div className='oper_wrapper'>
          
      <div className='title_download'>

        <div>
          <div className='bigwords' >
            Оперативные данные
        </div>
          <div style={{ color: '#fc5f3d', marginTop: '20px', fontSize: '18px' }}>
            По состоянию на {state.day} {state.mounth} {state.time}
        </div>
        </div>

        <div className='otchet'>
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
            {state.stat.amountoftest}
          </div>
          <div style={{ fontSize: '18px' }}>
            Проведено тестов

          </div>
          <div className='more_date'>
            <img src={globe} alt=""/>
            Подробные данные
        </div>
        </div>
        <div>
          <div style={{ color: '#fb5f3d' }} className='stat'>
           {state.stat.amountofcase}
          </div>
          <div style={{ fontSize: '18px' }}>
            Случаев заболеваний

        </div>
       
        </div>
        <div>

          <div style={{ color: '#fb5f3d' }} className='stat'>
           {state.stat.amountOfCaseToday}
        </div>
          <div style={{ width: '200px', fontSize: '18px' }}>
            Случаев заболеваний за последние сутки

        </div>
        </div>
        <div>

          <div className='stat'>
          {state.stat.amountOfCure}
          </div>
          <div style={{ fontSize: '18px' }}>
            Человек выздоровел

        </div>
        </div>
        <div>

          <div className='stat'>
          {state.stat.deaths}
        </div>
          <div style={{ fontSize: '18px' }}>
            Чуеловек умело

        </div>
        </div>

      </div>

    </div>
    
  )
}
