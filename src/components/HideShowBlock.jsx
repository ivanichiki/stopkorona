import React, { useState } from 'react'
import '../styles/HideShowBlock.scss'
import { Markup } from 'interweave'


export const HideShowBlock = (props) => {
  const [show, setshow] = useState(true)
  return (

    <div className={`topic ${show==false&&'hide'}`}>
    <div style={{padding:'30px 30px 30px 40px'}}>

    
    <div onClick={()=> setshow(!show)} className={`topic_title `}>
  <div className='title_text' > {props.title}</div>
      <div className={`btn`}>&#10005;</div>
     </div>
    <div className='topic_text'>
   <Markup content={props.text}/>  
  
    </div>
    </div>
  </div>
  )
}
