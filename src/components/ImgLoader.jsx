import React, { useState } from 'react'
import './ImgLoader.scss'
import Cube from '../svg/Cube.svg'
export const ImgLoader = ({src}) => {
const [loaded, setloaded] = useState(false)


  function onLoad() {
 
  
    
    setloaded(true);
   
  }
  return (
    <div >
      <img onLoad={onLoad} style={{display: loaded? 'block': 'none'}} src={src} alt=""/>
      <div style={{display: loaded? 'none': 'block'}} className="loader">Loading...</div>
     
    </div>
  )
}
