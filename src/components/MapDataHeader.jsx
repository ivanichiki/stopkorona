import React, { useContext } from 'react'
import { KoronaContext } from '../App'

export const MapDataHeader = () => {
  const { stateOper } = useContext(KoronaContext)
  return (
    <div className='Header'>


      <div style={{ paddingLeft: '10px', paddingTop: '15px' }}>
        <div className='title'>  Оперативные данные</div>
        <di  className='sub_title' >по состоянию на {stateOper.day} {stateOper.mounth} {stateOper.time}</di>

      </div>
      <div className='stat_wrapper'>
        <div className='cases_wrapper'>
          <div className='bgword-cases bgword'> <span></span> {stateOper.stat.amountofcase} <sup>+1 175</sup></div>
          <div className='cases' >Случаев заболевания</div>
        </div>

        <div className='recovered_wrapper'>
          <div  className='bgword' > <span style={{ backgroundColor: '#03c8a4' }}></span>  {stateOper.stat.amountOfCure} <sup>+86</sup></div>
          <div className='recovered'>Человек выздоровело</div>
        </div>

        <div   className='deaths_wrapper' style={{ width: '140px' }}>
          <div  className='bgword' > <span style={{ backgroundColor: "#cd0712" }}></span>  {stateOper.stat.deaths} <sup>+5</sup></div>
          <div  className='deaths' > Человек умерло</div>
        </div>

      </div>
    </div>
  )
}
