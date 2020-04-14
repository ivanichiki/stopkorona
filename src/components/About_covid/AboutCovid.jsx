import React, { useRef, useEffect, useContext } from 'react'
import './AboutCovid.scss'
import { Symptoms } from './Symptoms'
import ScrollAnimation from 'react-animate-on-scroll'
import { Transmitted } from './Transmitted'
import { KoronaContext } from '../../App'

export const AboutCovid = ({match}) => {
  const Symptomref = useRef(null)
  const Transmitref = useRef(null)
  const scrollToRef = (ref, value) => window.scrollTo({top: ref.current.offsetTop-value, behavior: 'smooth'})
  const executeScrolltoSym = (value) => scrollToRef(Symptomref,value)
  const executeScrolltoTrans = (value) => scrollToRef(Transmitref, value)

  const {render}=useContext(KoronaContext)
useEffect(() => {

 
  if (match.params.ref==='symptoms') {
    executeScrolltoSym(150)
  }
  if (match.params.ref==='transmitted'){
  
    executeScrolltoTrans(150)
  }
}, [render, match.params.ref])

  return (
    <div className='AboutCorona_wrapper' >
      <h1>Все о коронавирусе</h1>
      <ScrollAnimation delay='100' duration='1' animateOnce animateIn="fadeIn">
      <Symptoms  Ref={Symptomref}/>
      </ScrollAnimation>
      <ScrollAnimation delay='100' duration='1' animateOnce animateIn="fadeIn">
        <Transmitted  Ref={Transmitref}/>
        </ScrollAnimation>
    </div>
  )
}
