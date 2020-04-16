import React from 'react'
import './WorldStatistic.scss'
import  who from '../../svg/who.svg'
import  jh from '../../svg/jh.svg'
import  ym from '../../svg/ym.svg'

const Pics=(props)=> {
  return(
    <div>

    <a target='blank' href={props.href}>
    <div className='pics'>
      <img src={props.src} alt=""/>
    
    </div>
    <div className='pics_text'>
     {props.text}
    </div>
    </a>
    </div>
  )
}

export const WorldStatistic = ({Ref}) => {
  return (
    <div ref={Ref} className='statistic_wrapper'>
      <h1>Мировая статистика</h1>
<div className='pics_wrapper'>
  <Pics href='https://who.maps.arcgis.com/apps/opsdashboard/index.html#/a19d5d1f86ee4d99b013eed5f637232d' src={who} text=' Карта распространения коронавируса ВОЗ'/>
  <Pics href='https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6'  src={jh} text='Университет Джонса Хопкинса'/>
  <Pics href='https://yandex.ru/web-maps/covid19'  src={ym} text='Карта распространения коронавируса в России и мире на Яндекс.Картах'/>
</div>
    </div>
  )
}
