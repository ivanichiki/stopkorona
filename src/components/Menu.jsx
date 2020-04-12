import React, { useState, useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
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

const preventScrollRef = useRef(false)
usePreventScroll(preventScrollRef)
  function usePreventScroll(preventScrollRef) {
    useEffect(() => {
      const preventScrolling = e => {
        if (preventScrollRef.current) {
          e.preventDefault()
        }
      }
  
      document.addEventListener('touchmove', preventScrolling, {
        passive: false,
      })
      return () => document.removeEventListener('touchmove', preventScrolling)
    }, [])
  }
 const [cantoucn, setcantoucn] = useState(false)
  const [count, setcount] = useState(0)
  const [props, set] = useSpring(() => ({ x: 0, y:0}))
  const bind = useDrag(({ down, movement: [x, y] }) => {
   if ((x>20||x<-20)&(x!==0)) {
   
    preventScrollRef.current = true
   }
   if (down==false) {
    preventScrollRef.current = false
  
   }
//   if (down) {
//     // Prevent scroll on touch screens while dragging:
//     preventScrollRef.current = true
//     }
//  else {
//     preventScrollRef.current = false
//   }
    if (down==false&x<-50&x!=0&count!=200) {setcount(e=>e+100)}
    if (down==false&x>50&x!=0&count!=0) {setcount(e=>e-100)}
    console.log(y)
if (y==0&x!==0) {
  setcantoucn(true)
}
if (down==false) {
  setcantoucn(false)
}
    set({ x: down&cantoucn ? x : 0,
      immediate: down
    })

  })

  return (
  <div className={`menu_wrap_wrap`}>
    <animated.div className={`Menu_wrapper`}  {...bind()} style={{...props ,right:`${count}vw`}}>

  <Block alink='https://стопкоронавирус.рф/ai/doc/4/attach/4.pdf' img={group} title='Памятка для пожилых людей' width='170px' tag='ЧТО ПРЕДПРИНЯТЬ?'/> 
     <Block  link='/what-is-done/council'  img={ok} title='Антикризисный план' width='135px' tag='ЧТО СДЕЛАНО?'/>
     <Block link='/'  img={lab} title='Где и как сдают анализы?' width='190px'tag='ВСЕ О КОРОНАВИРУСЕ'/>


    </animated.div>
    </div>

  )
}
