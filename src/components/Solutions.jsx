import React from 'react'
import '../styles/Solutions.scss'
import { useContext } from 'react'
import { KoronaContext } from '../App'
import table from '../svg/Layer_8.svg'
import call from '../svg/call.svg'
import many from '../svg/many.svg'


import { Modal } from './modal'

const ModalBlock = (props) => {
  const { SolutionsRef, modal, setmodal, setmodalId } = useContext(KoronaContext)

  return (

    <div  onClick={() => { setmodal(true); setmodalId(props.id) }} className='modal'>
      <div className='insidemodal'>
        <img src={props.props} alt="" />
      </div>
      <div className='insidemodal text'>
        {props.text}
      </div>
    </div>

  )

}



export const Solutions = () => {
  const { SolutionsRef, modal, setmodal, setmodalId } = useContext(KoronaContext)


  return (
    <div ref={SolutionsRef} className='solution_wrapper'>
      <div className='solutions_title'>

        Какие меры принимаются для борьбы с коронавирусом
     </div>
      <div className='solutions_subtitle'>
        Необходимые ограничения и меры поддержки направлены на то, чтобы предотвратить распространение инфекции, оказать помощь тем, кто нуждается в наблюдении и лечении, а также снизить негативные последствия для бизнеса.
      </div>
      <div className='modal_container'>
      
        <ModalBlock  props={table} id={1} text='Антикризисный план' />
        <ModalBlock props={call}   id={2} text='Нерабочие дни, которые нужно провести дома'/>
        <ModalBlock props={many}   id={3} text='Ответственность за нарушение режима'/>
        <ModalBlock props={call}   id={2} text='Нерабочие дни, которые нужно провести дома'/>
    
        <ModalBlock  props={table} id={1} text='Антикризисный план' />
        <ModalBlock props={call}   id={2} text='Нерабочие дни, которые нужно провести дома'/>
        <ModalBlock props={call}   id={2} text='Нерабочие дни, которые нужно провести дома'/>
        <ModalBlock props={call}   id={2} text='Нерабочие дни, которые нужно провести дома'/>
      </div>
    </div>
  )
}