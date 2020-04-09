import React from 'react'
import '../styles/Menu.scss'
import group from '../svg/Group.png'
import ok from '../svg/Ok.png'
import lab from '../svg/Lab.png'
import { NavLink } from 'react-router-dom'
import Scrollbars from 'react-custom-scrollbars'

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

{!props.alink?
    <NavLink to={props.link}> 
     <div className='btn'>
        <span>
        Подробнее
        </span>
      </div>
      </NavLink> 

: 
<a href={props.alink}> 
     <div className='btn'>
        <span>
        Подробнее
        </span>
      </div>
      </a> 
}
    </div>
    
  </div>
  )
}

export const Menu = () => {
  return (
    <Scrollbars style={{ width: '100%', height:600 }}>
    <div className='Menu_wrapper'>
   
     <Block alink='https://стопкоронавирус.рф/ai/doc/4/attach/4.pdf' img={group} title='Памятка для пожилых людей' width='170px' tag='ЧТО ПРЕДПРИНЯТЬ?'/>
     <Block  link='/what-is-done/council'  img={ok} title='Антикризисный план' width='135px' tag='ЧТО СДЕЛАНО?'/>
     <Block link='/'  img={lab} title='Где и как сдают анализы?' width='190px'tag='ВСЕ О КОРОНАВИРУСЕ'/>

    </div>
    </Scrollbars>

  )
}
