import React, { useContext } from 'react'
import { KoronaContext } from '../../App'
import './AnimatedBtn.scss'
import { useTransition, animated, useSpring } from 'react-spring'
import { CSSTransition } from 'react-transition-group';



export const AnimatedBtn = () => {
  const { setscrollMenuToggle, scrollMenuToggle } = useContext(KoronaContext)

 
  const props = useSpring({
    top:'38.5px',
    from:{top:'28px'},
    config: {
      duration: 500,
    },
  })
  return (


    <div onClick={() => setscrollMenuToggle(!scrollMenuToggle)} className='MENU'>



<CSSTransition in={scrollMenuToggle} timeout={500} classNames="up-active">
        <div className='up'>|
        </div>
      </CSSTransition>

     <div className={`center ${scrollMenuToggle && 'center-active'}`}>|</div>
     
<CSSTransition in={scrollMenuToggle} timeout={500} classNames="down-active">
      <div className={`down`}>|</div>
      </CSSTransition>

    </div>
  )
}
