import React from 'react'
import '../styles/Solutions.scss'
import { useContext } from 'react'
import { KoronaContext } from '../App'
import table from '../svg/Layer_8.svg'
import call from '../svg/call.svg'
import many from '../svg/many.svg'
import fly from '../svg/fly.svg'
import zig from '../svg/zig.svg'
import world from '../svg/world.svg'
import skorb from '../svg/skorb.svg'
import line from '../svg/line.svg'
import { useEffect } from 'react'
import { ModalBlock } from './ModalBlock'





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
        <ModalBlock props={fly}   id={4} text='Ограничение полетов'/>
    
        <ModalBlock  props={zig} id={5} text='Пересичение государственных границ' />
        <ModalBlock props={world}   id={6} text='Эпидемическая ситуация в мире'/>
        <ModalBlock props={skorb}   id={7} text='Режим повышенной готовности'/>
        <ModalBlock props={line}   id={8} text='Дополнительные меры для обеспечения устойчевого экономического развития'/>
      </div>
    </div>
  )
}
