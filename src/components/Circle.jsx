import React from 'react'

export const Circle = (props) => {
  const kof = 14
  return (
    <div style={{ left: props.left, top: props.top, height: Math.pow(props.infected, 1/7) * kof, width: Math.pow(props.infected, 1/7) * kof }} className='circle'>


      <div className='hidden_name'>{props.name}</div>

    </div>
  )
}
