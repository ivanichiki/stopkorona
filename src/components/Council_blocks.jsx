import React from 'react'
import './Council_blocks.scss'

export const Council_blocks = (props) => {
  return (
    <div className='council_block_wrapper'>
      <div className='name'>{props.name}</div>
      <div className='position'>{props.position}</div>
      <div className='sub_position'>{props.subPosition}</div>
    </div>
  )
}
