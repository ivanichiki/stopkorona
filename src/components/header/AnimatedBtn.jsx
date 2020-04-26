import React, { useContext } from 'react'
import { KoronaContext } from '../../App'
import './AnimatedBtn.scss'


export const AnimatedBtn = () => {
  const { setscrollMenuToggle, scrollMenuToggle } = useContext(KoronaContext)

  return (


    <div onClick={() => setscrollMenuToggle(!scrollMenuToggle)} className='MENU mobile'>

<div className={`up ${scrollMenuToggle==true? 'inFirst': 'outFirst'} `}>

</div>
<div className={`center ${scrollMenuToggle==true? 'incenter':''}`}></div>
<div className={`down ${scrollMenuToggle==true? 'inSecond':'outSecond'} `}></div>

    </div>
  )
}
