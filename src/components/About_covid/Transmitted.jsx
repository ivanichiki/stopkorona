import React from 'react'
import './Transmitted.scss'
import how from '../../svg/how.svg'
import icon from '../../svg/list-icon.svg'
import icon2 from '../../svg/list-icon3.svg'

export const Transmitted = (props) => {
  return (
    <div ref={props.Ref} className='trans_wrapper'>
      <h1  >Как передается коронавирус?</h1>
      <div  className='flex'>
        <div className='left'>
          <div><img src={how} alt="" /></div>
        </div>
        <div className='right'>
          <div className='icon-block'>
            <div > <img src={icon} alt="" /> </div>
            <div className='lbl'>воздушно-капельным путем (при кашле или чихании)</div>
          </div>

          <div className='icon-block'>
            <div > <img src={icon2} alt="" /> </div>
            <div className='lbl'>контактным путем (поручни в транспорте, дверные ручки и другие загрязненные поверхности и предметы)</div>
          </div>
          
        </div>
      </div>
  
  <div  className='list_block' >
  <div>
    <div className='list_circle'>?</div>
  </div>
<div>
  <div className='text_list'>Как и другие респираторные вирусы, коронавирус распространяется через капли, которые образуются, когда инфицированный человек кашляет или чихает.</div>
  <div className='text_list'>Кроме того, он может распространяться, когда инфицированный человек касается любой загрязненной поверхности, например, дверной ручки. Люди заражаются, когда они касаются загрязненными руками рта, носа или глаз.</div>
</div>
  </div>
    </div>
  )
}
