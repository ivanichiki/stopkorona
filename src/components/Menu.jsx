import React from 'react'
import '../styles/Menu.scss'
import group from '../svg/Group.png'
import ok from '../svg/Ok.png'
import lab from '../svg/Lab.png'
import { NavLink } from 'react-router-dom'

const Block =(props)=> {
  return (
    <div className='block'>
    <div className='content'>
      <div style={{width:props.width}} className='tag'>
       {props.tag}
      </div>
          <div><h1>{props.title}</h1></div>
      <div>
        <img src={props.img} alt=""/>
      </div>
    <NavLink to={props.link}> <div className='btn'>
        <span>
        Подробнее
        </span>
     
      </div>
      </NavLink> 
    </div>
  </div>
  )
}

export const Menu = () => {
  return (
    <div className='Menu_wrapper'>
     <Block link='/' img={group} title='Памятка для пожилых людей' width='170px' tag='ЧТО ПРЕДПРИНЯТЬ?'/>
     <Block  link='/what-is-done/council' img={ok} title='Антикризисный план' width='135px' tag='ЧТО СДЕЛАНО?'/>
     <Block link='/' img={lab} title='Где и как сдают анализы?' width='190px'tag='ВСЕ О КОРОНАВИРУСЕ'/>
    </div>
  )
}
