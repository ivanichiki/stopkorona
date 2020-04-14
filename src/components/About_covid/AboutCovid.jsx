import React, { useRef, useEffect } from 'react'
import './AboutCovid.scss'
import { Symptoms } from './Symptoms'
import ScrollAnimation from 'react-animate-on-scroll'

export const AboutCovid = ({match}) => {
  const Symptomref = useRef(null)
  const scrollToRef = (ref) => window.scrollTo({top: ref.current.offsetTop-150, behavior: 'smooth'})
  const executeScrolltoSym = () => scrollToRef(Symptomref)

useEffect(() => {
  window.scrollTo(0, 0)
 
  if (match.params.ref==='symptoms') {
    executeScrolltoSym()
  }
}, [match.params.ref])

  return (
    <div className='AboutCorona_wrapper' >
      <h1>Все о коронавирусе</h1>
      <ScrollAnimation delay='100' duration='1' animateOnce animateIn="fadeIn">
      <Symptoms  Ref={Symptomref}/>
      </ScrollAnimation>
    </div>
  )
}
