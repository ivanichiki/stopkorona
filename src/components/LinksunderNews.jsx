import React from 'react'
import border from '../svg/border.png'
import myvmeste from '../svg/myvmeste.png'
import dostup from '../svg/dostup.png'

export const LinksunderNews = () => {
  return (
    <div className='linkimgwrapper'>

      <a target="_blank" href="https://www.gosuslugi.ru/394604/1">  <img className='linkimg' src={border} alt="" /></a>
      <a target="_blank" href="https://мывместе2020.рф/">   <img className='linkimg' src={myvmeste} alt="" /></a>
      <a target="_blank" href="https://доступвсем.рф/">  <img className='linkimg' src={dostup} alt="" /></a>
    </div>


  )
}
