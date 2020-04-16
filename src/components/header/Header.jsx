import React, { useState, useContext } from 'react'
import './Header.scss'

import { KoronaContext } from '../../App'
import { UnderHeader } from './UnderHeader'
import { HeaderUp } from './HeaderUp'
import { ScrollMenu } from './ScrollMenu'




export const Header = ({match}) => {
 
  const {headerloaded,setheaderloaded } = useContext(KoronaContext)
  const [counter, setcounter] = useState(0)

 

  function onLoad() {
    setcounter(counter => counter + 1)

    if (counter == 8) {
      setheaderloaded(true);

    }
  }

  return (
    <>
    <div onLoad={onLoad} className={`header_wrapper_wrap ${headerloaded && 'showheader'}`} >
      <div className='centrolize' >
     
        <HeaderUp/>
        <UnderHeader />
   
      </div>
 
    </div>
   <ScrollMenu match={match.params.path}/>

    </>
  )
}
