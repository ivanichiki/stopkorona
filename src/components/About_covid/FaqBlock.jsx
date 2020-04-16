import React, { useState } from 'react'
import './FaqBlock.scss'
import cross from '../../svg/cross.svg'
import { Markup } from 'interweave'

export const FaqBlock = (props) => {
  const [toggle, settoggle] = useState(false)
  return (
    <div className={`faq_block ${props.last&&'lastfaq'} ${props.faqself&&'faqself'} `}>
      <div onClick={() => settoggle(!toggle)} className='faqblock_title'>
        <div className='title'>
          {props.name}
        </div>
        <div className={`cross  ${toggle && 'rotate'}`}>
          <img src={cross} alt="" />
        </div>
      </div>
      <div className={`hidden_text  ${toggle && 'activ'}`}>
        <Markup content={props.text} />

      </div>
    </div>
  )
}