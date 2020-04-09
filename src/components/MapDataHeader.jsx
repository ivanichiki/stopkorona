import React, { useContext } from 'react'
import { KoronaContext } from '../App'

export const MapDataHeader = () => {
  const {stateOper } = useContext(KoronaContext)
  return (
    <div className='Header'>
       

          <div style={{paddingLeft:'10px', paddingTop:'15px' }}>
            <div style={{ fontSize: '40px', fontWeight: 600, width: '300px', lineHeight: '1.1', paddingBottom: '10px', paddingRight: '130px'}}>  Оперативные данные</div>
            <di style={{ color: '#fb5f3d', fontSize: '18px', fontWeight: 600 }}>по состоянию на {stateOper.day} {stateOper.mounth} {stateOper.time}</di>

          </div>

          <div >
            <div style={{ fontSize: '60px', color: '#003188', fontWeight: 600,paddingRight:'50px' }}> <span></span> {stateOper.stat.amountofcase} <sup>+1 175</sup></div>
            <div style={{ fontSize: '19px', fontWeight: '600', width: '170px', paddingLeft:'30px' }}>Случаев заболевания</div>
          </div>

          <div>
            <div style={{ fontSize: '60px', color: '#003188', fontWeight: 600 }}> <span style={{backgroundColor:'#03c8a4'}}></span>  {stateOper.stat.amountOfCure} <sup>+86</sup></div>
            <div style={{ fontSize: '19px', fontWeight: '600', width: '170px', paddingLeft:'30px' }}>Человек выздоровело</div>
          </div>

          <div style={{width:'140px' }}>
            <div style={{ fontSize: '60px', color: '#003188', fontWeight: 600 }}> <span style={{backgroundColor:"#cd0712"}}></span>  {stateOper.stat.deaths} <sup>+5</sup></div>
            <div style={{ fontSize: '19px', fontWeight: '600', width: '90px', paddingLeft:'30px' }}> Человек умерло</div>
          </div>

 
      </div>
  )
}
